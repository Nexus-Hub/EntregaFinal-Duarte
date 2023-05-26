import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../utils"

const title = {
    'men-clothing': "Men's Clothing",
    'women-clothing': "Women's Clothing",
    'electronics': "Electronics",
    'jewelery': "Jewels",
}

const ItemListContainer = () => {

    const [state, setState] = useState([])
    const params = useParams()

    useEffect(() => {

        getProducts(params.id)
            .then((result) => {
                setState(result)
            })

    }, [params])

    return (
        <div>
            <h1 className="text-5xl font-mono uppercase font-bold text-center mt-4 mb-4 underline">{params.id == undefined ? "Home" : title[params.id]}</h1>
            <ItemList products={state} />
        </div>
    )

}
export default ItemListContainer