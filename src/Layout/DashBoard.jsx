import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalculator, FaCartArrowDown, FaCcMastercard, FaHome, FaList, FaShoppingBag, FaUsers, FaUtensils } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="container mx-auto flex gap-10">
            <div className="w-72 h-screen bg-orange-400">
                <ul className="menu p-4 rounded-box mt-2 uppercase">
                    {
                        isAdmin ? <>
                            <li className="mb-3 "><NavLink to='/dashboard'>
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>
                            <li className="mb-3"><NavLink to='/dashboard/addi-tems'>
                                <FaUtensils></FaUtensils>
                                Add Items
                            </NavLink></li>
                            <li className="mb-3"><NavLink to='/dashboard/manage-items'>
                                <FaList></FaList>
                                manage items
                            </NavLink></li>
                            <li className="mb-3"><NavLink to='/dashboard/manage-bookings'>
                                <FaBook></FaBook>
                                Manage bookings
                            </NavLink></li>
                            <li className="mb-3"><NavLink to='/dashboard/all-users'>
                                <FaUsers></FaUsers>
                                all users
                            </NavLink></li>
                        </>
                            : <>
                                <li className="mb-3 "><NavLink to='/dashboard/user-home'>
                                    <FaHome></FaHome>
                                    user home
                                </NavLink></li>
                                <li className="mb-3"><NavLink to='/dashboard/resservation'>
                                    <FaCalculator></FaCalculator>
                                    reservation
                                </NavLink></li>
                                <li className="mb-3"><NavLink to='/dashboard/payment-history'>
                                    <FaCcMastercard></FaCcMastercard>
                                    payment history
                                </NavLink></li>
                                <li className="mb-3"><NavLink to='/dashboard/cart'>
                                    <FaCartArrowDown></FaCartArrowDown>
                                    Cart
                                </NavLink></li>
                                <li className="mb-3"><NavLink to='/dashboard/add-review'>
                                    <FaAd></FaAd>
                                    add review
                                </NavLink></li>
                                <li className="mb-3"><NavLink to='/dashboard/my-booking'>
                                    <FaBook></FaBook>
                                    my booking
                                </NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li className="mb-3"><NavLink to='/'>
                        <FaHome></FaHome>
                        home
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/order/salads'>
                        <IoMdMenu></IoMdMenu>
                        menu
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/shop'>
                        <FaShoppingBag></FaShoppingBag>
                        shop
                    </NavLink></li>
                    <li className="mb-3"><NavLink to='/contact'>
                        <IoMail></IoMail>
                        contact
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