import { Link } from "react-router-dom"

const Item = (props) => {
    const { item } = props
    return (
        <div className="text-center mt-4">
            <h1 className="text-lg font-mono font-bold text-center mb-4">{item.title}</h1>
            <Link to={`/item/${item.id}`}><img className="mx-auto" src={item.image} width="100" alt={item.title} /></Link>
            <Link to={`/item/${item.id}`}><p className="text-sm font-mono underline">View Details</p></Link>
        </div>
    )
}
export default Item