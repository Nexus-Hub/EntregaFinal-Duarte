import { Link } from "react-router-dom"

const Item = (props) => {
    const { item } = props
    return (
        <div className="grid grid-flow-col auto-cols-max items-center">
            <h1>{item.title}</h1>
            <img src={item.image} width="100" alt={item.title} />
            <Link to={`/item/${item.id}`}>Ver Detalles</Link>
        </div>
    )
}
export default Item