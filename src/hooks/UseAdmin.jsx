import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";


const UseAdmin = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiousSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data?.admin);
            return res.data?.admin;
        }

    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;