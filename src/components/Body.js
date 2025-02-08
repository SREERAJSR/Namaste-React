// import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer  from "./Shimmer";
import { useState,useEffect } from "react";
import { Link} from 'react-router-dom';
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
             const filteredData = resData.filter((res) => res.info.avgRating >4.);
            setFilteredResData(filteredData);
          }}
        >
          Top rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {filteredResData.map((res) => (
          <Link key={res.info.id} to={'/restaurants/'+res.info.id} ><RestaurantCard resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
