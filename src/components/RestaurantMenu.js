import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [menuData, setMenuData] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL+resId
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );

    setMenuData(json?.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (menuData === null) return <Shimmer />;
  const { name, avgRating, totalRatingsString } =
    menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        Rating-{avgRating}({totalRatingsString})
      </h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs {item?.card?.info?.price /100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
