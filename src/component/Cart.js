import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    //subscribing to the store
    const  cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="bg-orange-300 text-white m-2 p-2 rounded-lg"
            onClick={handleClearCart}>clear cart</button>
            <div className="w-6/12 m-auto">
                <ItemsList item={cartItems}/>
            </div>
        </div>
    );
};
export default Cart;