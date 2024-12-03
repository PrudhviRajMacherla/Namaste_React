import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resObj}=props;
    return (
        <div className="res-card">
            {/* <h2> Data is Coming</h2> */}
            <img className="res-logo" src={CDN_URL+resObj?.cloudinaryImageId}/>
            <h3>{resObj?.name}</h3>
            <h3>{resObj?.id}</h3>
            <h3>{resObj?.avgRating}</h3>
            <h4>{resObj?.cuisines.join(" ")}</h4>
            <h4>{resObj?.costForTwo}</h4>
            {/* <h4>{cost/100}</h4> */}
        </div>
    )
}

export default RestaurantCard;