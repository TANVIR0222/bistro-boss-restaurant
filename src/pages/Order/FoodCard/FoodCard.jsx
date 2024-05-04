const FoodCard = ({ item }) => {
    
    const{name, recipe, image , price} = item;

  return (
    <div>
      <div className="card w-96 bg-base-300 shadow-xl">

        <div className="px-4 justify-end relative pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-body flex items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
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
