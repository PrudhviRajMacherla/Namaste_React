import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { FaTrash } from "react-icons/fa";
import { clearCart } from "../redux/cartSlice";
const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  // useSelector for subsribing cart items -> accessing only reading
  const dispatch = useDispatch();
  // useDispatch for updating the store by sending the action

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">  
      <div className="w-5/12 m-auto flex justify-between">
      <h1 className="text-2xl font-bold underline">Cart Items</h1>
        <button onClick={handleClearCart}>
          <FaTrash size={20} color="red" />
        </button>
      </div>
      {cartItems.length ===0 && <h1>Cart is Empty Add Items to Cart</h1>}
      <div className=" m-auto w-6/12">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
