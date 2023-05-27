import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import useCounter from "../hooks/useCounter";
import CartContext from "../contexts/CartContext";

const ItemDetail = ({ product }) => {

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
                    <h2 className="text-5xl font-mono uppercase font-bold text-center mt-4 mb-4 underline">{product.title}</h2>
                    <img className="mx-auto mt-4 mb-4" src={product.image} width="250" alt={product.title} />
                    <p className="px-12 text-lg font-mono text-justify mt-4 mb-4">{product.description}</p>
                    <h3 className="text-5xl font-mono text-center mt-4 mb-4">$ {(product.price * value).toFixed(2)}</h3>
                    <div className="flex flex-row justify-center">
                        <button className="bg-red-200 rounded-full px-6 py-3 mb-4 text-xl hover:bg-red-500" onClick={substract}>-</button>
                        <div className="font-mono text-6xl font-bold ml-8 mr-8">{value}</div>
                        <button className="bg-green-200 rounded-full px-6 py-3 mb-4 text-2xl hover:bg-green-500" onClick={sum}>+</button>
                        <button className="rounded bg-green-600 mb-4 px-4 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 ml-8" onClick={handleClick}>Add to Cart</button>
                    </div>

                    <Toaster />
                </div>)
            }

            {!product && <p className="bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3 rounded text-center">El producto no existe... por favor verifica la ruta o utiliza el navbar y los botones para navegar por el sitio.</p>}

        </div>
    )
}

export default ItemDetail;