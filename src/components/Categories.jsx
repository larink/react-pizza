import React, { useState } from 'react';

export default function Categories({ items }) {
  const [acitveItem, setAcitveItem] = useState(null);

  const onSelectItem = (index) => {
    setAcitveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={acitveItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={acitveItem === index ? 'active' : ''}
              onClick={() => setAcitveItem(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
