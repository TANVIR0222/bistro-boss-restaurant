import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle";
import FoodAddCard from "../FoodAddCard/FoodAddCard";

const AddCardFood = () => {
  const [addCard, setaddCard] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setaddCard(data));
  }, []);

  return (
    <section className="py-10">
      <SectionTitle
        subheading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4">
        {addCard.map((food) => (
          <FoodAddCard key={food._id} food={food}></FoodAddCard>
        ))}
      </div>
    </section>
  );
};

export default AddCardFood;
