
// import PropTypes from 'prop-types';

import FeatureMenu from "../../FeatureMenu/FeatureMenu";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureMenu></FeatureMenu>
        </div>
    );
};

Home.propTypes = {

};

export default Home;