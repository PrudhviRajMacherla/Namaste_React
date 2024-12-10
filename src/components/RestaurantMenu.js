import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // when we directly try to destructure it throws an error as the resInfo is undefined bcoz of asynchornous state update
  // resInfo is null and when we try to access we get error
  const { name} = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))
  console.log('parent is being called');
  if(itemCards==undefined){
    return <h1>No Menu Available for the restro</h1>
  }

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* Accordians */}
      {
        categories.map((category,index)=>
          (<RestaurantCategory key={index}
            setShowIndex={()=>setShowIndex(index)} 
            showItems={index===showIndex?true:false}
            dataObj={category?.card?.card}/>))
      }
      
    </div>
  );
};
export default RestaurantMenu;
