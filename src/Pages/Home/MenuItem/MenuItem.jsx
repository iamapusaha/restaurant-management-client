

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div className="flex gap-3 items-center">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="md:w-28 w-14" src={image} alt="" />
            <div>
                <h3 className="text-xl text-[#151515] font-normal">{name} -------------------</h3>
                <p className="text-base text-[#737373] font-normal" >{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div >
    );
};

export default MenuItem;