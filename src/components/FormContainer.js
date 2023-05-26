import { useEffect, useState } from "react";

const FormContainer = () => {

    const [disableState, setDisableState] = useState(true)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });

    const handleStateChange = () => {
        if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || formData.email != formData.confirmEmail) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisableState(true)
        console.log(formData)
    };

    useEffect(() => {
        handleStateChange()
    }, [formData])

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="confirmEmail">Confirm Email:</label>
                <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" disabled={disableState}>Realizar Compra</button>
        </form>
    )
}

export default FormContainer