
// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={bgImg} title={"Don't miss"} subTitle={'Would you like to try a dish?'}></Cover>
            {/* today's offer */}
            <SectionTitle header={"TODAY'S OFFER"} subHeader={"Don't miss"}></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            {/*  */}
        </div >
    );
};

Menu.propTypes = {

};

export default Menu;