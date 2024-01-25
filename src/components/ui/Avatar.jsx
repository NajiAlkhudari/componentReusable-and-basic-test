import React from 'react';

const Avatar = ({ src, text, color, size }) => {
    const sizeClasses = {
        small: 'h-6 w-6 text-xs',
        medium: 'h-10 w-10 text-sm',
      large: 'h-14 w-14 text-base',
        xlarge: ' h-20 w-20 text-base',
        xxlarge: ' h-24 w-24 text-base',

    };

    if (src) {
        return (
            <img
                className={`rounded-lg   ${sizeClasses[size]}`}
                src={src}
                alt={text}
            />
        );
    } else {    
        return (
            <div
                className={`rounded-full flex items-center justify-center bg-${color}-500 text-black ${sizeClasses[size]}`}
            >
                {text}
            </div>
        );
    }
};

export default Avatar;
