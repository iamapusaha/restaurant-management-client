import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";


const UseAdmin = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiousSecure();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data?.admin);
            return res.data?.admin;
        }

    })
    return [isAdmin]
};

export default UseAdmin;