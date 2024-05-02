import SectionTitle from "../../../component/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item pt-10 my-20 bg-fixed text-white" >
      <SectionTitle subheading={"---Check it out---"} heading={"FROM OUR MENU"}>
        {" "}
      </SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-950 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <h4>March 20, 2023</h4>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline mt-5 border-0 border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
