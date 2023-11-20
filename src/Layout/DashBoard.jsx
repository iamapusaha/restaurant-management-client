import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalculator, FaCartArrowDown, FaCcMastercard, FaHome, FaSearch } from 'react-icons/fa';

const DashBoard = () => {
    return (
        <div className="container mx-auto flex gap-10">
            <div className="w-72 h-screen bg-orange-400">
                <ul className="menu bg-base-200 rounded-box mt-2 uppercase">
                    <li className="mb-3 "><NavLink to='/dashboard'>
                        <FaHome></FaHome>
                        user home
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/dashboard'>
                        <FaCalculator></FaCalculator>
                        reservation
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/dashboard'>
                        <FaCcMastercard></FaCcMastercard>
                        payment history
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/dashboard/cart'>
                        <FaCartArrowDown></FaCartArrowDown>
                        Cart
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/dashboard'>
                        <FaAd></FaAd>
                        add review
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/dashboard'>
                        <FaBook></FaBook>
                        my booking
                    </NavLink></li>
                    <div className="divider"></div>
                    <li className="mb-3"><NavLink to='/'>
                        <FaHome></FaHome>
                        home
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/order/salads'>
                        <FaSearch></FaSearch>
                        menu
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;