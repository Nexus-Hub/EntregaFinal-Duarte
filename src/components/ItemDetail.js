export const ItemDetail = ({ product }) => {
    return (
        <div>
            {product &&
                (<div>
                    <h2>{product.title}</h2>
                    <br></br>
                    <img src={product.image} width="300" alt={product.title} />
                    <p>Rating: {product.rating.rate} out of {product.rating.count} reviews.</p>
                    <br></br>
                    <p>Description: {product.description}</p>
                    <br></br>
                    <h3>Price: $ {product.price}</h3>
                </div>)
            }
        </div>
    )
}

export default ItemDetail;