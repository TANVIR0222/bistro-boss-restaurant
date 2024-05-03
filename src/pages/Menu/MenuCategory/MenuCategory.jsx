import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/Menuitem/Menuitem";

const MenuCategory = ({item , title , coverImg , subTitle , suTitle }) => {
    // const {name, image , price , recipe} = item;

    return (
        <div className="py-8 text-center"> 
            {title && <Cover img={coverImg} title={title} subTitle={subTitle} suTitle={suTitle}></Cover>}

            <div className="grid md:grid-cols-2 gap-4 my-16">
                {
                    item.map( item => <Menuitem key={item._id}  item={item}  > </Menuitem> )
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn text-[#BB8506] btn-outline border-0 bg-white border-b-4 uppercase ">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCategory;