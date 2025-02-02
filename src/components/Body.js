import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  const [resData, setresData] = useState(mockData);
  return (
    <div className="body">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            filteredData = resData.filter((res) => res.info.avgRating < a);
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
