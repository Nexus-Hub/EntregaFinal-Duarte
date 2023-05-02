import React, { useState } from "react";

const Main = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (

        <div className="flex-grow">
            <h2 className="text-3xl font-bold text-center mb-4">
                Welcome to Nexus <span className="text-green-500">Store</span>
            </h2>
        </div>

    );
};

export default Main;
