import { Helmet } from "react-helmet-async";
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../useHooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
    const [tabidx, settabidx] = useState(0);

const [menu] = useMenu();
const desserts = menu.filter((item) => item.category === "dessert");
const soup = menu.filter((item) => item.category === "soup");
const salad = menu.filter((item) => item.category === "salad");
const pizza = menu.filter((item) => item.category === "pizza");
const drinks = menu.filter((item) => item.category === "drinks");

// destination

    return (
        <div >
            <Helmet>
                <title> bistro-Boss | order now</title>
            </Helmet>

            <Cover img={orderCover} title={'Our Item'}subTitle={"would you like to try a dish"}></Cover>
            <div className=" py-6 text-center">
                <Tabs defaultIndex={tabidx} onSelect={(index) =>settabidx(index)}>
                <TabList>
                    <Tab>Pizz</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default Order;