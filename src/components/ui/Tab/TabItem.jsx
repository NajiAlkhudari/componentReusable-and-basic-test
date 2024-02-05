// TabItem.js
import React from 'react';

const TabItem = ({ label, activeTab, onClick }) => (
  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={label}>
    <a
      className={
        `text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ` +
        (activeTab === label
          ? `text-white bg-blue-600`
          : `text-blue-600 bg-white`)
      }
      onClick={onClick}
    >
      {label}
    </a>
  </li>
);

export default TabItem;
