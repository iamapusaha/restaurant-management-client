import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(0);
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')

    return (
        <div className='my-7'>
            <Cover img={orderCover} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></Cover>
            <Tabs className='my-5' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;