import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import useCounter from "../hooks/useCounter";
import CartContext from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {

    const { addToCart } = useContext(CartContext)

    const { value, sum, substract } = useCounter()

    const handleClick = () => {
        const productAdded = addToCart({
            ...product, amount: value
        })
        if (productAdded) {
            toast.success(`${product.title} \n\nAñadido al carrito.`, { autoClose: 500 })

        } else {
            toast.error(`El producto ya está en el carrito.`, { autoClose: 250 })

        }
    }

    return (
        <div>
            {product &&
                (<div>
                    <h2 className="text-xl font-mono font-bold text-center mt-4 mb-4">{product.title}</h2>
                    <img className="mx-auto mt-4 mb-4" src={product.image} width="250" alt={product.title} />
                    <p className="px-12 text-lg font-mono text-justify mt-4 mb-4">{product.description}</p>
                    <h3 className="text-5xl font-mono text-center mt-4 mb-4">$ {product.price}</h3>
                    <div className="flex flex-col items-center">
                        <button className="bg-red-500 rounded-full px-4 mb-4" onClick={substract}>-</button>
                        <div>{value}</div>
                        <button className="bg-green-500 rounded-full px-4 mb-4" onClick={sum}>+</button>
                        <button className="rounded bg-green-600 mb-4 px-2 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500" onClick={handleClick}>Add to Cart</button>
                    </div>
                    <Toaster />
                </div>)
            }
        </div>
    )
}

export default ItemDetail;