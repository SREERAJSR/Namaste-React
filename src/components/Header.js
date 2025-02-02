import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            alt="logo"
            id="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-container">
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;