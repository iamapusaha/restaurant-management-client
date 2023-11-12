
// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={bgImg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={bgImg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={bgImg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={bgImg} title={'OUR MENU'} subTitle={'Would you like to try a dish?'}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

Menu.propTypes = {

};

export default Menu;