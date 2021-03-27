import React from "react";
import { useSelector } from "react-redux";
import { Categories, SortPopup, PizzaBlock } from "../components";

export default function Home() {
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup
          onClickItem={() => {}}
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "aplhabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}
