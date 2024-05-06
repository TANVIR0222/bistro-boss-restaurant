import { Link } from "react-router-dom";

const FoodAddCard = ({ food }) => {
  const { name, recipe, image } = food;

  return (
    <div>
      <div className="card  w-96 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <Link to={'/order/category'}>
              <button className="btn text-[#BB8506] btn-outline border-0 bg-slate-600 border-b-4 uppercase ">
                add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAddCard;
