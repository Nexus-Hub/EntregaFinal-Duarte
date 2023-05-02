import { useEffect, useState } from "react"
import products from "../products.json"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [state, setState] = useState()
    const params = useParams()

    useEffect(() => {

        const item = products.filter((product) => product.id === parseInt(params.id))
        setState(item[0])

    }, [params.id])

    return (
        <div>
            {state &&
                (<div>

                    <h2>{state.title}</h2>
                    <img src={state.image} width="300" alt={state.title} />
                    <p>{state.description}</p>
                    <h3>Precio: $ {state.price}</h3>

                </div>)
            }
        </div>

    )
}
export default ItemDetailContainer;