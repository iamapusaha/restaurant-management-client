
// import PropTypes from 'prop-types';

import FeatureMenu from "../../FeatureMenu/FeatureMenu";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureMenu></FeatureMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

Home.propTypes = {

};

export default Home;