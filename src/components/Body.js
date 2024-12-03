import RestaurantCard from "./ResataurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [copyList, setCopyList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.68852152883197&lng=83.23767364025116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
