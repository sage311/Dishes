import React, { useState } from "react";
import classes from "../../styles/Components/Dish/Dish.module.scss";
import DishList from "./DishList";
const Dish = () => {
  const [dishName, setDishName] = useState("");
  const [dishComposition, setDishComposition] = useState("");
  const [dishPrice, setDishPrice] = useState("");

  const [dishList, setDishList] = useState([]);

  const createHandler = () => {
    if (dishName && dishComposition && dishPrice) {
      setDishList([
        ...dishList,
        { dishId: dishList.length + 1, dishName, dishComposition, dishPrice }
      ]);
      setDishName("");
      setDishComposition("");
      setDishPrice("");
    } else {
      alert("Заполните все данные");
    }
  };
  console.log(dishList);
  return (
    <div className={classes["Dish"]}>
      <div className={classes["Dish__container"]}>
        <div className={classes["Dish__container-title"]}>Create Dish</div>
        <div className={classes["Dish__container-title"]}>
          <input
            value={dishName}
            type="text"
            placeholder={"Название блюда"}
            onChange={(e) => setDishName(e.currentTarget.value)}
          />
          <input
            value={dishComposition}
            type="text"
            placeholder={"Состав блюда"}
            onChange={(e) => setDishComposition(e.currentTarget.value)}
          />
          <input
            value={dishPrice}
            type="text"
            placeholder={"Стоимость блюда"}
            onChange={(e) => setDishPrice(e.currentTarget.value)}
          />
        </div>
        <div className={classes["Dish__container-buttons"]}>
          <div
            className={classes["Dish__container--buttons-item"]}
            onClick={() => createHandler()}
          >
            Создать
          </div>
          <DishList dishList={dishList} setDishList={setDishList} />
        </div>
      </div>
    </div>
  );
};

export default Dish;
