import CartWidget from "./CartWidget";

function Navbar() {
    return (
        <nav className="bg-gray-900 p-3">
            <ul className="flex justify-between">

                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CPUs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">GPUs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SSDs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RAMs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Keyboards</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mouse</a></li>

                <li><CartWidget /></li>
            </ul>
        </nav>
    );
}

export default Navbar;

