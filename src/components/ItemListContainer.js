import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import products from "../products.json"
import { useParams } from "react-router-dom"

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

        const fetch = new Promise((res, rej) => {
            setTimeout(() => {
                if (params.id == undefined) {
                    res(products)
                } else {
                    res(products.filter((product) => product.category === params.id))
                }
            }, 2000)
        })

        fetch
            .then((res) => {
                setState(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [params.id])

    return (
        <div>
            <h1>{params.id == undefined ? "Home" : title[params.id]}</h1>
            <ItemList products={state} />
        </div>
    )

}
export default ItemListContainer