import React ,{useState}from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Alert = ({ type, children, showButton = false }) => {
    const [showAlert, setShowAlert] = useState(true);

  let alertStyle = "";

  switch (type) {
    case 'success':
      alertStyle = " font-semibold bg-green-100 border-green-400 text-green-700";
      break;
    case 'error':
      alertStyle = " font-semibold bg-red-100 border-red-400 text-red-700";
      break;
    case 'info':
      alertStyle = " font-semibold bg-blue-100 border-blue-400 text-blue-700";
      break;
      case 'warning':
        alertStyle = " font-semibold bg-yellow-100 border-blue-400 text-yellow-700";
        break;
    default:
      alertStyle = " font-semibold bg-gray-100 border-gray-400 text-gray-700";
  }

  return (
    
    showAlert && (
    <div className={` px-4 py-4 rounded relative ${alertStyle}`} role="alert">
      <span className="block sm:inline">{children}</span>
      {showButton && 
        <button onClick={() => setShowAlert(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <IoCloseSharp size={20} className="" />
        </button>
      }
    </div>
  )
  );
};

export default Alert;
