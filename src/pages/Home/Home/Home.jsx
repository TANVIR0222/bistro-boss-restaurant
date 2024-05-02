import PopulerMenu from "../../PopulerMenu/PopulerMenu";
import AddCardFood from "../AddCarddFood/AddCardFood";
import Banner from "../Banner/Banner";
import BannerBB from "../BannerBB/BannerBB";
import Callus from "../Callus/Callus";
import Category from "../Catagory/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BannerBB></BannerBB>
            <PopulerMenu></PopulerMenu>
            <Callus></Callus>
            <AddCardFood></AddCardFood>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;