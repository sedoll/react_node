import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to={`/`} alt="메인">
        <h1>Movie</h1>
      </Link>
      {/* <input type="text" placeholder="검색..." /> */}
      {/* <button>로그인</button> */}
    </nav>
  );
}

export default Navbar;
