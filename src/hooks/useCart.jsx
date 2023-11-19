import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";


const useCart = () => {
    const axiosSecure = useAxiousSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;