import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-black flex items-center w-1/3 bg-gray-900 bg-opacity-20 font-bold p-2">
                    Nexus React PC Store
                </h1>

                <div className="w-2/3">
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
