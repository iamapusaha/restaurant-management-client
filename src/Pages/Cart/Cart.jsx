import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <div>
            <SectionTitle header='WANNA ADD MORE?' subHeader='My Cart'></SectionTitle>
            <div className="flex justify-evenly">
                <h1 className="text-3xl font-bold uppercase">Total orders: {cart.length}</h1>
                <h1 className="text-3xl font-bold uppercase">Total orders: {totalPrice}</h1>
                <button className="btn btn-primary">Pay</button>
            </div>
        </div>
    );
};

export default Cart;