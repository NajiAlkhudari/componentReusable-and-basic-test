// TabContent.js
import React from 'react';

const TabContent = ({ children, label, activeTab }) => {
  if (label !== activeTab) return null;
  return <div className="px-4 py-5 flex-auto">{children}</div>;
};

export default TabContent;
