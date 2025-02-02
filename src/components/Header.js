import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
const [loginReactBtn,setLoginReactBtn] = useState('login')
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
            <li> <button className="login-btn" onClick={
              ()=>{
                setLoginReactBtn(loginReactBtn==='login'?'logout':'login')
              }
            }>{loginReactBtn}</button> </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;