import { useContext, useState } from "react";
import CartContext from "./CartContext"
import toast, { Toaster } from 'react-hot-toast';
import useCounter from "../hooks/useCounter";

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
                    <img className="mx-auto mt-4 mb-4" src={product.image} width="300" alt={product.title} />
                    <p className="px-12 text-lg font-mono text-justify mt-4 mb-4">{product.description}</p>
                    <h3 className="text-5xl font-mono text-center mt-4 mb-4">$ {product.price}</h3>
                    <div className="flex flex-col items-center">
                        <button onClick={substract}>-</button>
                        <div>{value}</div>
                        <button onClick={sum}>+</button>
                        <button className="rounded bg-green-600 mb-4 px-2 py-1 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500" onClick={handleClick}>Add to Cart</button>
                    </div>
                    <Toaster />
                </div>)
            }
        </div>
    )
}

export default ItemDetail;