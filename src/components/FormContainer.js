import { useEffect, useState, useContext } from "react";
import { addOrderToDB } from "../utils";
import CartContext from "../contexts/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const FormContainer = () => {

    const { cart, clearCartItems } = useContext(CartContext)

    const navigate = useNavigate()

    const [disableState, setDisableState] = useState(true)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });

    const handleStateChange = () => {
        if (cart.length < 1 || !formData.firstName || !formData.lastName || !formData.phone || !formData.email || formData.email !== formData.confirmEmail) {
            setDisableState(true)
            return
        }
        setDisableState(false)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisableState(true)
        const orderId = await addOrderToDB({ ...formData, productsPurchased: cart })
        if (orderId) {
            toast.success("Your order has been placed succesfully.")
            clearCartItems()
            navigate(`/successCheckout/${orderId}`)
        }
    };

    useEffect(() => {
        handleStateChange()
    }, [formData])

    return (

        <div className="font-mono mt-4 mb-4 ml-4 mr-4 px-10 py-3 rounded border-2 bg-green-100 fixed left-1/2 bottom-24 transform -translate-x-1/2">

            <h2 className="text-2xl mb-4">Checkout user details form:</h2>

            <form onSubmit={handleSubmit} className="form-input ">


                <div className="grid grid-cols-3">
                    <div className="mt-2">
                        <label htmlFor="firstName">First Name: </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="lastName">Last Name: </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="phone">Phone: </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="confirmEmail">Confirm Email: </label>
                        <input
                            type="email"
                            id="confirmEmail"
                            name="confirmEmail"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {!disableState && <button className="mt-4 w-full py-6 rounded-lg shadow-lg border-2 border-gray-400 hover:bg-green-500 text-xl bg-white font-bold" type="submit" disabled={disableState}>Realizar Compra</button>}

                <Toaster />

            </form>
            {disableState && <p className="font-mono align-text-bottom mt-4 text-justify">Agregue productos al carrito, luego llene todos los campos de este formulario y verifique que estén ingresados correctamente para realizar la compra, por medidas de seguridad el boton para realizar la compra aparecerá una vez que los productos estén en el carrito y todos los campos estén correctos, este mensaje desaparecerá al detectar que todo está correcto.</p>}

        </div>
    )
}

export default FormContainer