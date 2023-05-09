import { useEffect, useState } from "react";
import styles from "./ProductItem.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  decrement,
  deleteProduct,
  increment,
} from "@/redux/slices/cartSlice";
import { addFav } from "@/redux/slices/favoriteSlice";
import CartIcon from "../../public/icon/productIcon/cartIcon.svg";
import FavoriteIcon from "../../public/icon/productIcon/favoriteIcon.svg";
import IncrIcon from "../../public/icon/productIcon/incr.svg";
import DecrIcon from "../../public/icon/productIcon/decr.svg";
import { AppState } from "@/redux/store";

export default function Hit({ hit }: any) {
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  const item = useSelector((state: AppState) => state.cartSlice.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = item.find((item) => item.id === hit.id);
    if (items) {
      setCount(items.count);
      setCart(true);
    }
  }, [hit.objectID]);

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

  const addFavorite = () => {
    dispatch(addFav(obj));
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
          <button className={styles.button_favorite} onClick={addFavorite}>
            <FavoriteIcon className={styles.favoriteIcon} />
          </button>
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
            <button className={styles.button_cart_wrapper} onClick={decr}>
              <DecrIcon className={styles.decrIcon} />
            </button>
            <div>{count}</div>
            <button className={styles.button_cart_wrapper} onClick={incr}>
              <IncrIcon className={styles.incrIcon} />
            </button>
          </div>
        ) : (
          <button className={styles.button_cart} onClick={addCart}>
            <CartIcon />В корзину
          </button>
        )}
      </div>
    </>
  );
}
