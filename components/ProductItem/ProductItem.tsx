import { ProductItemProps } from "./ProductItem.props";
import styles from "./ProductItem.module.css";
import ProductImage from "@/public/productImage.jpg";
import Image from "next/image";

export default function ProductItem({
  hit,
  ...props
}: ProductItemProps): JSX.Element {
  return (
    <div {...props} className={styles.wrapper}>
      <div>
        <Image src={ProductImage} alt={""}></Image>
      </div>
      <div className={styles.hits_name}>{hit.name}</div>
      <div>Цена: {hit.price}</div>
    </div>
  );
}
