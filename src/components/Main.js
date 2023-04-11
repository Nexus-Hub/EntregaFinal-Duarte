import React, { useState } from "react";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <ItemListContainer greeting="Hola desde el prop" />

            <button
                className="bg-green-500 rounded-md text-white font-bold py-2 px-4 my-4 mx-auto"
                onClick={handleClick}
            >
                Gracias!
            </button>
            {showMessage && (
                <p className="text-center text-xl mt-4">
                    Muchas gracias por el curso que están haciendo, unos capos todos, vamos bien!
                </p>
            )}
        </div>
    );
};

export default Main;
