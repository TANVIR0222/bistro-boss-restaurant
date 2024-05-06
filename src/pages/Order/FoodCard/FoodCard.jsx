import Swal from "sweetalert2";
import useAuth from "../../../useHooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price , _id } = item;

  // add to card 
  const location = useLocation();
  const {user} = useAuth();
  const navigate = useNavigate();

  const handleAddToCard = (food) => {

    if(user && user.email){
      console.log(user.email , food);
      //data base 
      const cartItem ={
        menuId: _id,
        email:user.email,
        name,
        image,
        price
      }

      axios.post('http://localhost:5000/cards' , cartItem )
      .then(res => {
        console.log(res.data);
      })
    }
    else{
      
      Swal.fire({
        title: "You ar not logged in",
        text: "Please login to add to  the card? ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in !"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state :{form : location}});
        }
      });
    }

  }

  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <div className=" px-4 justify-end relative pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <p className="absolute  right-0 mr-4 mt-4 px-4 bg-slate-700 rounded-sm ">
          {price}
        </p>
        <div className="card-body flex items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>${recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCard(item) }
              className="btn text-[#BB8506] btn-outline border-0 bg-slate-600 border-b-4 uppercase ">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
