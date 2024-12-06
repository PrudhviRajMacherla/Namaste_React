import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // when we directly try to destructure it throws an error as the resInfo is undefined bcoz of asynchornous state update
  // resInfo is null and when we try to access we get error
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      {/* <h1>{cuisines}</h1> */}
      <h1>
        {cuisines}-{costForTwoMessage}
      </h1>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            Rs{item.card.info.price / 100 || item.card.info.defaultPrice / 100}-
            {item.card.info.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
