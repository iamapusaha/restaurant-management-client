
// import PropTypes from 'prop-types';

import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ item, img, title, subTitle }) => {
    return (
        <div className='my-9'>
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-7">
                {
                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {

};

export default MenuCategory;