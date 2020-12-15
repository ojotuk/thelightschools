import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Nav.module.css";
import {
  faBars,
  faHamburger,
  faSearch,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "../../styles/images/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.navBrand}>
          <img src="/logo.png" />
          <div className={styles.brandName}>
            <h3 className={styles.brandNameTop}>The Light</h3>
            <p className={styles.brandNameDown}>Schools</p>
          </div>
        </div>
        <ul className={open ? [styles.open] : styles.close}>
          <li className={styles.navFirst}>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/#about">
              <a>About</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/admission">
              <a>Admissions</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/#facilities">
              <a>Facilities</a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/#gallery">
              <a>Gallery </a>
            </Link>{" "}
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>{" "}
          </li>
        </ul>
        <i className={styles.toggler} onClick={() => setOpen(!open)}>
          {open ? (
            <FontAwesomeIcon size="3x" icon={faTimesCircle} />
          ) : (
            <FontAwesomeIcon size="3x" icon={faBars} />
          )}
        </i>
      </div>
      <div className={styles.loginReg}>
        {/* <FontAwesomeIcon size="2x" icon={faSearch} className={styles.search} /> */}
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
