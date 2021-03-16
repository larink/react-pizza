import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

export default function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup onClickItem={() => {}} items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}
