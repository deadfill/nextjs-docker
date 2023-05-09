import { AppState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Help(): JSX.Element {
  const cartItems = useSelector(
    (state: AppState) => state.cartSlice.cart
  );
  if (cartItems.length === 0) {
    return <div>Вы еще не добавили не один товар</div>;
  }

  const renderCart = cartItems.map((item, id) => {
    return (
      <li key={id}>
        <div>{item.name}</div>
        <div>{item.count}</div>
      </li>
    );
  });

  return (
    <>
      <ul>{renderCart}</ul>
    </>
  );
}
