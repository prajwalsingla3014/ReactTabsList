import React, { useState } from "react";

const TabsList = ({ tabs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (index) => {
    setSelectedIndex(index);
  };

  const Component = tabs[selectedIndex].component;

  return (
    <div role="tabsList">
      <div>
        {tabs?.map((tab, index) => (
          <button
            aria-selected={selectedIndex === index}
            data-selected={selectedIndex === index}
            key={tab.id}
            onClick={() => handleChange(index)}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Component />
    </div>
  );
};

export default TabsList;
