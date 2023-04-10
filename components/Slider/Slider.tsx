import { SliderProps } from "./Slider.props";
import Image from "next/image";
import sliderImg from "../../public/slider.jpg";
import styles from "./Slider.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function Slider({
  children,
  ...props
}: SliderProps): JSX.Element {
  const [active, setActive] = useState<boolean>(true);
  return (
    <section>
      <div {...props} className={styles.slider}>
        <Image className={styles.sliderImg} src={sliderImg} alt={""} />
        <div className={styles.dotSpan}>
          <span
            className={clsx(styles.dot, {
              [styles.dotActive]: active,
            })}
          ></span>
          <span
            onClick={() => console.log("sgf")}
            className={styles.dot}
          ></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
}
