function CartWidget() {
    return (
        <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M8 14H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m8 0h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2m-6 0v-2a2 2 0 0 0-2-2H8" />
                <circle cx="9" cy="20" r="2" />
                <circle cx="20" cy="20" r="2" />
                <path d="M18 14H6L4 4H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">3</span>
        </div>
    );
}

export default CartWidget;
