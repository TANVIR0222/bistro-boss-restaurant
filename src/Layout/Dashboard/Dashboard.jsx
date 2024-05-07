import { BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { TiCalendar, TiHome, TiShoppingCart, TiStar } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";
import useCard from "../../useHooks/useCard";

const Dashboard = () => {
    // card item see 
    const [card] = useCard();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4 text-black uppercase">           
          <li>
            <NavLink to="/dashboard/ourhome">
                <TiHome className="text-4xl"></TiHome>
               Our Home </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
                <TiCalendar className="text-4xl"></TiCalendar>
                reservation
                </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
                <BsCreditCard2Back className="text-4xl"></BsCreditCard2Back>
                payment history
                </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
                <TiShoppingCart className="text-4xl"></TiShoppingCart>
                My Cart( {card.length} )</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
                <TiStar className="text-4xl"></TiStar>
                add review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
                <MdOutlineDateRange className="text-4xl"></MdOutlineDateRange>
                my booking</NavLink>
          </li>

          <div className="divider divider-primary"></div>
          <li>
            <NavLink to="/">
                <TiHome className="text-4xl"></TiHome>
               Our Home </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
