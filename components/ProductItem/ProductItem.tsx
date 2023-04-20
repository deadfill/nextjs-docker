import styles from "./ProductItem.module.css";
import Image from "next/image";

export default function Hit({ hit }: any) {
  console.log(hit.image_url);
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_image}>
          <Image
            className={styles.card_image}
            src={hit.image_url}
            alt={""}
            fill
          />
        </div>

        <div>{hit.name}</div>
        <div>{hit.price}</div>
        <div>{hit.category}</div>
      </div>
    </>
  );
}
