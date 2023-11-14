

const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="card min-w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <p className="bg-black text-white absolute right-4 top-4 px-3">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;