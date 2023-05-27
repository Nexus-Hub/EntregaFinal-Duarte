import { Link } from "react-router-dom"

const Item = (props) => {
    const { item } = props
    return (
        <div className="flex-1 mt-4 border-2 rounded-md shadow-lg relative">
            <h1 className="ml-4 mt-4 text-lg text-gray-700 font-mono">{item.title}</h1>
            <img className="ml-12 px-8 py-8" src={item.image} width="160" alt={item.title} />
            <Link to={`/item/${item.id}`}><button className="rounded-full bg-green-200 text-sm font-mono absolute right-10 bottom-4 px-8 py-8 hover:bg-green-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button></Link>

        </div>
    )

}
export default Item