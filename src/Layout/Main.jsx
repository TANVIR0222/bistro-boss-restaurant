import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
    //not going navbar and footer

    const Location = useLocation();
    const noHederFooter = Location.pathname.includes('login')
    const noHederFooters = Location.pathname.includes('singup')


    return (
        <div>
            { noHederFooter || noHederFooters ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHederFooter || noHederFooters || <Footer></Footer>}
        </div>
    );
};

export default Main;