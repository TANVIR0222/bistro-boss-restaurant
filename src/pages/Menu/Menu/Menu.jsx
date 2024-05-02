import { Helmet } from "react-helmet-async";
import menuimg from '../../../assets/menu/menu_bar.png'
import Cover from "../../Shared/Cover/Cover";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>bistro-Boss || nemu</title>
            </Helmet>
            <Cover img={menuimg} title={"OUR MENU"} ></Cover>
            
        </div>
    );
};

export default Menu;