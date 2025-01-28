import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="logo"
          id="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3Za2XIox6pT0Jfb1mTa0OFyi5_tupvneKQ&s"
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

const RestaurantCardComponent = (props) => {
  console.log(props);
  const {res_name, cusine,rating} = props
  return (
    <div className="res-card" style={{ backgroundColor: "#D3D3D3" }}>
        <img
          className="res-logo"
          alt="fud-image"
          src="https://b.zmtcdn.com/data/pictures/chains/5/19026635/eeceb6b37200a6f510d9b1406f5ad220_o2_featured_v2.jpg"
        />
        <h3>{res_name}</h3>
        <h4>{cusine}</h4>
        <h4>{rating } stars</h4>
        <h4>38 minutes</h4>

    </div>
  );
};

const BodyComponent = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCardComponent res_name='Meghana food'cusine='Biriyani,NorthIndian, Asian' rating='4.4' />
      <RestaurantCardComponent />
    </div>
  </div>
);

const AppComponent = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<AppComponent />);
