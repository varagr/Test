import React, { useState } from 'react';

const NestedCheckbox = ({ label, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [childChecked, setChildChecked] = useState(Array(children.length).fill(false));


  const handleParentChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    setChildChecked(Array(children.length).fill(checked));
    setCheckedCount(checked ? children.length : 0);
  };


  const handleChildChange = (index, isChecked) => {
    const newChildChecked = [...childChecked];
    newChildChecked[index] = isChecked;
    setChildChecked(newChildChecked);
    setCheckedCount(newChildChecked.filter((isChecked) => isChecked).length);
    setIsChecked(newChildChecked.every((isChecked) => isChecked));
  };

  return (
    <div>
      <label >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleParentChange}
        />
        {label}
        {checkedCount > 0 && `(${checkedCount}/${children.length} checked)`}
      </label>
      <div className='checkbox'>
        {children.map((child, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={childChecked[index]}
                onChange={(event) => handleChildChange(index, event.target.checked)}
              />
              {child}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};


export default NestedCheckbox;

