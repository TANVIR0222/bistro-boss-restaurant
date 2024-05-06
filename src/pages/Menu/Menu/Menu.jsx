import { Helmet } from "react-helmet-async";
import menuimg from "../../../assets/menu/menu_bar.png";
import dessertsimg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../useHooks/useMenu";
import SectionTitle from "../../../component/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import './menu.css'

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>bistro-Boss | nemu</title>
      </Helmet>
      <Cover
        img={menuimg}
        subTitle={"would you like to try a dish"}
        title={"OUR MENU"}
      ></Cover>
      {/* main cover */}
      <SectionTitle
        subheading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offer  */}
      <MenuCategory item={offered}></MenuCategory>
      {/* dessert offer menu  */}
      <MenuCategory
        item={desserts}
        coverImg={dessertsimg}
        suTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        title={"Desserts"}
      ></MenuCategory>

      {/* pizz  */}
      <MenuCategory
        item={pizza}
        suTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={pizzaimg}
        title={"pizza"}
      ></MenuCategory>

      {/* salad category */}
      <MenuCategory
        item={salad}
        suTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={saladimg}
        title={"SALAD"}
      ></MenuCategory>

      <MenuCategory
        item={soup}
        title={"soup"}
        suTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={soupimg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;

// subTitle={
//   'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
// }
