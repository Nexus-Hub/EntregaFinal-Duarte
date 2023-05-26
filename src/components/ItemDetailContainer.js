import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getProductDetail } from "../utils"

const ItemDetailContainer = () => {

    const [state, setState] = useState()
    const params = useParams()

    useEffect(() => {
        getProductDetail(params.id)
            .then((result) => {

                setState(result)
            })

    }, [params])

    return (
        <ItemDetail product={state} />

    )
}
export default ItemDetailContainer;