function ItemListContainer({ greeting }) {
    return (
        <div>
            <div className="flex-grow">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Welcome to Nexus <span className="text-green-500">PC Store</span>
                </h2>
                <p className="text-xl px-6 font-mono text-center">
                    This will be my ReactJS project + Tailwind for Commission 39665<br /><br />
                    Status: Pre-entrega 1<br /><br /><br /><br />

                    Made by: Carlos Duarte Medina - ReactJS39665
                </p>
                <p className="text-xl mt-8 px-6 font-mono text-center">
                    {greeting}
                </p>
            </div>
        </div>
    );
}

export default ItemListContainer;

