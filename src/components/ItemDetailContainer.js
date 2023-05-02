import { useEffect, useState } from "react"
import products from "../products.json"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [state, setState] = useState()
    const params = useParams()

    useEffect(() => {

        const item = products.filter((product) => product.id === parseInt(params.id))
        setState(item[0])

    }, [params.id])

    return (
        <ItemDetail product={state} />

    )
}
export default ItemDetailContainer;