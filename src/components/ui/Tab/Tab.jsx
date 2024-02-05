// Tab.js
import React, { useState } from 'react';
import TabItem from './TabItem';
import TabContent from './TabContent ';

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="w-full">
      <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        {children.map((child) => (
          <TabItem
            key={child.props.label}
            label={child.props.label}
            activeTab={activeTab}
            onClick={() => setActiveTab(child.props.label)}
          />
        ))}
      </ul>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        {children.map((child) => (
          <TabContent
            key={child.props.label}
            label={child.props.label}
            activeTab={activeTab}
          >
            {child.props.children}
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tab;
