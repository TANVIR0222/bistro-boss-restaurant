import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/NavBar";

const Main = () => {
    const Location = useLocation();
    const noHederFooter = Location.pathname.includes('login')
    return (
        <div>
            { noHederFooter ||  <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHederFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;