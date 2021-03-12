import React, { useState } from 'react';

export default function Categories({ items, onClickItem }) {
  const [acitveItem, setAcitveItem] = useState(null);

  const onSelectItem = (index) => {
    setAcitveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={acitveItem === null ? 'active' : ''} onClick={() => setAcitveItem(null)}>
          Все
        </li>
        {items.map((item, index) => (
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
