import { FaFilter, FaSearch } from "react-icons/fa";
import { RESTAURANTS_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withVegLabel } from "./ResataurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OfflinePage from "./OfflinePage";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [copyList, setCopyList] = useState([]);

  const onlineStatus = useOnlineStatus();

  const VegRestrauntCard = withVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [onlineStatus]);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_LIST_API);

    const json = await response.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    if (restaurants === undefined) {
      restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    }

    setListOfRestaurants(restaurants);
    setCopyList(restaurants);
  };

  if (onlineStatus === false) {
    return <OfflinePage />;
  }
  //This is known as conditonal rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search m-4 p-4 flex items-center">
          {/* we are binding the state variable with input text  but this doesn't work bcoz it won't change state variable
          to make this happen we use onChange */}
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-2 bg-green-200 m-2 flex items-center rounded-lg"
            onClick={() => {
              let filtred_items = copyList.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRestaurants(filtred_items);
            }}
          >
            <span>search</span>
            <FaSearch className="ml-2" />
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="filter-btn bg-gray-200 p-1 rounded-lg flex items-center"
            onClick={() => {
              let top_rated_resto = copyList.filter((res) => {
                return res?.info?.avgRating > 4.2;
              });
              setListOfRestaurants(top_rated_resto);
            }}
          >
            <span>Top-Rated Restaurants</span>
            <FaFilter />
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-center">
        {listOfRestaurants.map((e) => (
          <Link to={"/restaurants/" + e?.info?.id} key={e?.info?.id}>
            {e.info.veg ? (
              <VegRestrauntCard resObj={e.info} />
            ) : (
              <RestaurantCard resObj={e.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
