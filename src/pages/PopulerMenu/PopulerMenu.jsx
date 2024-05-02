import SectionTitle from "../../component/SectionTitle";
import Menuitem from "../Shared/Menuitem/Menuitem";
import useMenu from "../../useHooks/useMenu";

const PopulerMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular' )
    return (
        <div className="mb-12 text-center">
            <section>
                <SectionTitle
                heading={"---Check it out---"}
                subheading={"FROM OUR MENU"}
                >
                </SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <Menuitem key={item._id}  item={item} > </Menuitem> )
                }
            </div>
            <button className="btn btn-outline text-center mt-5 border-0 border-b-4">Read More</button>
        </div>
    );
};

export default PopulerMenu;