import { createContext, useState } from "react"
export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const addToCart = (product) => {

        if (!isInCart(product.id)) {
            setCart([...cart, product])
            return true
        }
    }

    const removeFromCart = (productId) => {
        const newCart = cart.filter((product) => product.id != productId)
        setCart(newCart)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const context = { cart, addToCart, removeFromCart }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContext