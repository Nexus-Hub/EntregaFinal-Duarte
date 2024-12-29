import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-8">
            {products?.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                );
            })}
        </div>
    );
};

export default ItemList;
