import classes from "../../styles/Components/Dish/Dish.module.scss";
import { BsTrash } from "react-icons/bs";

const DishList = ({ dishList, setDishList }) => {
  const deleteHandler = (id) => {
    setDishList(dishList.filter((e) => e.dishId !== id));
  };

  return (
    <div className={classes["DishList"]}>
      <div className={classes["DishList__container"]}>
        {dishList.map((i, idx) => (
          <div className={classes["DishList__container-item"]} key={idx}>
            <div className={classes["DishList__container-item-name"]}>
              {i.dishName}
            </div>
            <div className={classes["DishList__container-item-composition"]}>
              {i.dishComposition}
            </div>
            <div className={classes["DishList__container-item-price"]}>
              {i.dishPrice}
            </div>
            <div
              className={classes["DishList__container-item-delete"]}
              onClick={() => deleteHandler(i.dishId)}
            >
              <BsTrash />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DishList;
