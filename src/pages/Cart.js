import { useContext } from "react";
import CartContext from "../components/CartContext";
import CartItem from "../components/CartItem";
import FormContainer from "../components/FormContainer";

const CartContainer = () => {

    const { cart, removeFromCart } = useContext(CartContext)

    return (
        <>
            <h1 className="text-5xl font-bold text-center mb-4">Cart</h1>
            {cart.map((product) => {
                return (
                    <CartItem key={product.id} cartItem={product} removeFromCart={removeFromCart} />
                )
            })}
            <div>
                <span>Total:</span>
                {cart.reduce((previousValue, currentValue) => previousValue + (currentValue.amount * currentValue.price), 0)}
            </div>

            <FormContainer />

        </>)
}
export default CartContainer;