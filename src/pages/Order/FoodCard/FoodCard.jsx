const FoodCard = ({ item }) => {
    
    const{name, recipe, image} = item;

  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn text-[#BB8506] btn-outline border-0 bg-slate-600 border-b-4 uppercase ">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
