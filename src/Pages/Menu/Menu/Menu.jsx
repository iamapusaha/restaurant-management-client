
// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')



    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={bgImg} title={"Don't miss"} subTitle={'Would you like to try a dish?'}></Cover>
            {/* today's offer */}
            <SectionTitle header={"TODAY'S OFFER"} subHeader={"Don't miss"}></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            {/* DESSERTS */}
            <MenuCategory item={desserts} img={dessertImg} title={'desserts'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the'}></MenuCategory>
            {/* PIZZA */}
            <MenuCategory item={pizza} img={pizzaImg} title={'pizza'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the'}></MenuCategory>

            {/* SALADS */}
            <MenuCategory item={salad} img={saladImg} title={'salads'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the'}></MenuCategory>
            {/* SOUPS */}
            <MenuCategory item={soups} img={soupImg} title={'soups'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the'}></MenuCategory>
        </div >
    );
};

Menu.propTypes = {

};

export default Menu;