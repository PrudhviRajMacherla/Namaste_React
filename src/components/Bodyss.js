import { RESTAURANTS_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./ResataurantCard";
import Shimmer from "./Shimmer";
import DinoGame from "./DinoGame"; // Import the Dino Game component
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [copyList, setCopyList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(RESTAURANTS_LIST_API);
    
        const json = await response.json();
        let restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
        if (restaurants === undefined) {
          restaurants =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
    
        setListOfRestaurants(restaurants);
        setCopyList(restaurants);
      };
    fetchData();
  }, []);


  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline! Try the Dino Game 🦖</h1>
        <DinoGame /> {/* Render the Dino Game */}
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
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
              let filteredItems = copyList.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRestaurants(filteredItems);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRatedRestaurants = copyList.filter((res) => {
              return res?.info?.avgRating > 4.5;
            });
            setListOfRestaurants(topRatedRestaurants);
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
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
