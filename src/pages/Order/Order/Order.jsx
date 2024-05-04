import { Helmet } from "react-helmet-async";
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../useHooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    // index anujayi data see
const categorys = ['pizza ', 'salad' , 'soup' , 'dessert' , 'drinks']
// destination
const {category} = useParams();
const indexby = categorys.indexOf(category)
const [tabidx, settabidx] = useState(indexby);

const [menu] = useMenu();
const desserts = menu.filter((item) => item.category === "dessert");
const soup = menu.filter((item) => item.category === "soup");
const salad = menu.filter((item) => item.category === "salad");
const pizza = menu.filter((item) => item.category === "pizza");
const drinks = menu.filter((item) => item.category === "drinks");



    return (
        <div >
            <Helmet>
                <title> bistro-Boss | order now</title>
            </Helmet>

            <Cover img={orderCover} title={'Our Item'}subTitle={"would you like to try a dish"}></Cover>
            <div className=" py-6 text-center">
                <Tabs defaultIndex={tabidx} onSelect={(index) =>settabidx(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>salad</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
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