import { FaLocationArrow, FaShippingFast, FaUtensils } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import useStars from "../utils/useStars";
import { FaLocationPin } from "react-icons/fa6";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resObj } = props;
    const { name, avgRating, cuisines, costForTwo, sla,areaName } = resObj;
    const stars = useStars(avgRating);
    const {loggeInUser}=useContext(UserContext);

    return (
        <div className="res-card m-4 p-4 w-[220px] h-[350px] bg-gray-200 hover:bg-gray-300 rounded-lg flex flex-col transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <img
                className="rounded-lg w-full h-[150px] object-cover"
                alt="res-logo"
                src={CDN_URL + resObj?.cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg truncate">{name}</h3>
            <div className="flex items-center">
                {stars}
                <span className="ml-2 text-gray-700 font-semibold">{avgRating}</span>
            </div>
            <h4 className="text-sm font-bold flex items-center mt-1">
                <FaShippingFast className="mr-2" />
                {sla.deliveryTime - 10 + "-" + sla.slaString}
            </h4>
            <h4 className="text-sm flex items-center mt-1">
                <FaUtensils className="mr-2" />
                {cuisines.slice(0, 2).join(", ")}
            </h4>
            <h4>{loggeInUser}</h4>
            <h4 className="text-sm font-bold mt-1">{costForTwo}</h4>
            <h4 className="text-sm font-bold flex items-center mt-1"><FaLocationPin/>{areaName}</h4>
        </div>
    );
};

//Higher Order component
//input - RestaturantCard =? RestaurantCardVeg
export const withVegLabel=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute mt-4 ml-8 px-2 rounded-lg z-40 bg-green-500 text-white">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}
export default RestaurantCard;

