import { RESTAURANTS_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./ResataurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [copyList, setCopyList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

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
    return <h1>Your Offline,Plz Check Your internet Connection!!!</h1>;
  }
  //This is known as conditonal rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* we are binding the state variable with input text  but this doesn't work bcoz it won't change state variable
          to make this happen we use onChange */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filtred_items = copyList.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRestaurants(filtred_items);
            }}
            className="search-btn"
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let top_rated_resto = copyList.filter((res) => {
              return res?.info?.avgRating > 4.5;
            });
            setListOfRestaurants(top_rated_resto);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {listOfRestaurants.map((e) => (
          <Link to={"/restaurants/" + e?.info?.id} key={e?.info?.id}>
            <RestaurantCard resObj={e.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
