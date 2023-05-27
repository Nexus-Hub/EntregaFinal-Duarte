import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import FormContainer from "../components/FormContainer";

const CartContainer = () => {

    const { cart, removeFromCart, clearCartItems } = useContext(CartContext)

    return (
        <>
            <div className="flex gap-5 mt-4 mb-4 ml-10">
                <h1 className="text-5xl font-bold mb-4">Cart</h1>
                <button className="bg-red-300 rounded-full px-4 mb-4 hover:bg-red-500" onClick={clearCartItems}>Remove All Products</button>
            </div>
            {cart.map((product) => {
                return (
                    <CartItem key={product.id} cartItem={product} removeFromCart={removeFromCart} />
                )
            })}
            <div className="text-5xl font-bold mt-4 mb-10 ml-10">
                <span>Total: $</span>
                {cart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.price), 0).toFixed(2)}
            </div>

            <FormContainer />

        </>)
}
export default CartContainer;