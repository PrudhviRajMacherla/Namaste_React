import { FaRupeeSign } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-4 border-b-2 text-left flex justify-between items-start"
        >
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-lg font-medium">
                {item.card.info.name} -
              </span>
              <span className="ml-2 flex items-center text-lg font-medium text-green-600">
                <FaRupeeSign />
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                /-
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative flex-shrink-0 ml-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-28 h-28 rounded-md object-cover"
            />
            <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-green-500 text-white font-bold text-sm px-4 py-1 rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
