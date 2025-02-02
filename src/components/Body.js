// import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import { useState,useEffect } from "react";
const Body = () => {
  const [resData, setresData] = useState([]);

 useEffect(()=>{
  fetchData()
 },[])

 async function fetchData(){
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json()
setresData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

 }
//conditional rendering
return resData.length===0?<Shimmer/>:(
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = resData.filter((res) => res.info.avgRating >4);
            setresData(filteredData);
          }}
        >
          Top rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {resData.map((res) => (
          <RestaurantCard id={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
