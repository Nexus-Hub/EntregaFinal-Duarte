import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <nav className="bg-gray-900 p-4 flex justify-between">
            <NavLink to="/">
                <h1 className="text-3xl font-bold font-mono italic text-center">
                    <span className="text-white">NEXU</span><span className="text-green-500">SHOP</span>
                </h1>
            </NavLink>
            <ul className="flex justify-between">

                <NavLink to="/category/men-clothing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Men's clothing</NavLink>
                <NavLink to="/category/jewelery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Jewelery</NavLink>
                <NavLink to="/category/electronics" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Electronics</NavLink>
                <NavLink to="/category/women-clothing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Women's clothing</NavLink>
                <NavLink to="/cart" ><CartWidget /></NavLink>

            </ul>
        </nav>
    );
}

export default Navbar;

