import { LOGO_URL } from "../utils/constants";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
const Header = () => {
const [loginReactBtn,setLoginReactBtn] = useState('login')


useEffect(()=>{
  console.log('useeffects called');
},[loginReactBtn])
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
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'> Contact </Link>
            </li>
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