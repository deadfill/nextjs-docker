import { useState } from "react";
import styles from "./ProductItem.module.css";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addProduct,
  decrement,
  deleteProduct,
  increment,
} from "@/redux/slices/cartSlice";

export default function Hit({ hit }: any) {
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const obj = {
    id: hit.objectID,
    name: hit.name,
    count: 1,
  };

  const incr = () => {
    dispatch(increment());
    setCount((count) => count + 1);
    dispatch(addProduct(obj));
  };

  const decr = () => {
    if (count <= 1) {
      setCart(false);
      dispatch(decrement());
      dispatch(deleteProduct(hit.objectID));
      setCount(0);
      return;
    }
    dispatch(decrement());
    dispatch(deleteProduct(hit.objectID));
    setCount((count) => count - 1);
  };

  const addCart = () => {
    setCart(true);
    setCount((count) => count + 1);
    dispatch(increment());
    dispatch(addProduct(obj));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_image}>
          <Image
            className={styles.card_image}
            src={hit.image_url}
            alt={""}
            fill
            priority
          />
        </div>
        <div className={styles.product_price}>{hit.price} &#8381;</div>
        <div className={styles.product_name}>
          {hit.name[0].toUpperCase() + hit.name.slice(1)}
        </div>
        <div className={styles.product_category}>
          <div className={styles.product_category_brend}>Бренд:</div>
          <div className={styles.product_category_name}>
            {hit.category[0].toUpperCase() + hit.category.slice(1)}
          </div>
        </div>
        {cart ? (
          <div className={styles.product_cart_wrapper}>
            <button onClick={decr}>-</button>
            <div>{count}</div>
            <button onClick={incr}>+</button>
          </div>
        ) : (
          <button className={styles.button_cart} onClick={addCart}>В корзину</button>
        )}
      </div>
    </>
  );
}
