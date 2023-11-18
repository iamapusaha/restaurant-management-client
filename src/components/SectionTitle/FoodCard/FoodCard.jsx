import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const { image, name, recipe, price, _id } = item;
    const handleAddToCart = (name) => {
        if (user && user.email) {
            const cartInfo = {
                menuId: _id,
                emiala: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartInfo)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "your item added to the cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not loggedin user",
                text: "before adding cart,please login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 border-orange-400">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;