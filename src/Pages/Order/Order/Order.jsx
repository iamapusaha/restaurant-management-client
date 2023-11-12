import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Cover img={orderCover} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default Order;