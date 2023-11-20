import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiousSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;