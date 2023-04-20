import styles from "./MobileNav.module.css";
import Link from "next/link";
import { MobileMenuProps, MobileNavProps } from "./MobileNav.prop";
import ButtonNav from "../ButtonNav/ButtonNav";
import CartSvg from "../../public/icon/mobileIcon/catMobile.svg";
import FavSvg from "../../public/icon/mobileIcon/favMobile.svg";
import UserSvg from "../../public/icon/mobileIcon/profMobile.svg";
import HomeSvg from "../../public/icon/mobileIcon/homeMobile.svg";
import CatalogMobile from "../../public/icon/mobileIcon/catalogMobile.svg";

const menuItem: MobileMenuProps[] = [
  {
    route: "/",
    name: "Главная",
    icon: <HomeSvg />,
  },
  {
    route: "about",
    name: "Каталог",
    icon: <CatalogMobile />,
  },
  {
    route: "help",
    name: "Корзина",
    icon: <CartSvg />,
  },
  {
    route: "help",
    name: "Избраное",
    icon: <FavSvg />,
  },
  {
    route: "help",
    name: "Профиль",
    icon: <UserSvg />,
  },
];

export default function Navbar({ ...props }: MobileNavProps): JSX.Element {
  const buildMenu = menuItem.map(({ route, name, icon }, id) => {
    return (
      <li className={styles.li} key={id}>
        <Link href={`${route}`}>
          <ButtonNav>
            {icon}
            {name}
          </ButtonNav>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      <nav className={styles.mobile_nav} {...props}>
        <ul className={styles.wrapper}>{buildMenu}</ul>
      </nav>
    </div>
  );
}