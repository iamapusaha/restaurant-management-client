import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover";
import orderCover from '../../../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [menu] = useMenu()


    const [tabIndex, setTabIndex] = useState(initialIndex);
    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')

    return (

        <div className='my-7'>
            <Helmet>
                <title>Bistro Boss || Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'}></Cover>
            <Tabs className='my-5' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salads</Tab>
                    <Tab>pizzas</Tab>
                    <Tab>soups</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;