let ProductCart = ({product,deletefun}) => {
    
    return (
        <div key={product.id} className="w-42 h-86 bg-gray-700 flex flex-col gap-3 m-2 p-2 border-2 border-white rounded-xl">
            <div>
                <img src={product.image} alt="IMage" className="h-40 w-full object-contain " />
            </div>
            <div>
                <h2 className="text-sm text-white">Title : {product.title.substring(0, 15)}</h2>
                <h3 className="text-sm">Description : {product.category}</h3>
                <h3 className="">Price : {product.price}</h3>
            </div>
            <button onClick={() => deletefun(product.id)} className="bg-red-400 rounded p-1">Delete</button>
        </div>
    )
}

export default ProductCart;