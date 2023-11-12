
// import PropTypes from 'prop-types';

import { Helmet } from "react-helmet-async";

import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Testimonials from "../Testimonials/Testimonials";
import FeatureMenu from "../Banner/FeatureMenu/FeatureMenu";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Home
                </title>
            </Helmet>
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