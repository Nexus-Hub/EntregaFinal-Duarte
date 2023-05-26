const CartItem = (props) => {
    const { cartItem, removeFromCart } = props
    return (
        <div key={cartItem.id}>
            <div className="flex gap-5 font-mono text-lg">
                <div>
                    <img src={cartItem.image} width="16" alt={cartItem.title}></img>
                </div>
                <div>
                    {cartItem.title}
                </div>
                <div>
                    <span>Qty: </span>
                    {cartItem.amount}
                </div>
                <div>
                    <span>Price: </span>
                    {cartItem.price}
                </div>
                <div>
                    <span>Subtotal: </span>
                    {cartItem.price * cartItem.amount}
                </div>
                <div>
                    <button className="bg-red-500 rounded-full px-4 mb-4" onClick={() => removeFromCart(cartItem.id)}>X</button>
                </div>
            </div>
        </div>
    )
}
export default CartItem