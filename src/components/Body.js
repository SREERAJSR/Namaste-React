// import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import { useState,useEffect } from "react";
const Body = () => {
  const [resData, setresData] = useState([]);
  const [filteredResData,setFilteredResData] = useState([])
  const [searchText,setSearchText] = useState('')

 useEffect(()=>{
    fetchData()
 },[])

 async function fetchData(){
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
  const json = await data.json()
const actualData =json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
console.log(actualData);
setresData(actualData)
setFilteredResData(actualData)
 }
//conditional rendering
return resData.length===0?<Shimmer/>:(
    <div className="body">
      <div className="filter-container">
        <input className="search-input" value={searchText} onChange={(e)=> {
          setSearchText(e.target.value)}
          
          } ></input>
        <button  onClick={()=>{
          const filteredData =resData.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredResData(filteredData)
        }} >search</button>
        <button
          className="filter-btn"
          onClick={() => {
             const filteredData = resData.filter((res) => res.info.avgRating <4.5);
            setFilteredResData(filteredData);
          }}
        >
          Top rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {filteredResData.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
