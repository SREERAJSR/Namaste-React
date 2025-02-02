
import  {CDN_URL} from '../utils/constants';
 const RestaurantCard = (props) => {
const {name,cuisines,avgRating,sla,cloudinaryImageId}= props?.resData?.info
const {deliveryTime} = sla
  return (
    <div className="res-card" style={{ backgroundColor: "#D3D3D3" }}>
        <img
          className="res-logo"
          alt="fud-image"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>rating {avgRating}</h4>
        <h4>{deliveryTime} minutes</h4>

    </div>
  );
};


export default RestaurantCard;