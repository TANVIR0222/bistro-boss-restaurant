import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle";
import { FaUtensils } from "react-icons/fa";

// using React From
const Additems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subheading={"what's new?"}
      ></SectionTitle>

      <div className="border-2 rounded-md border-red-300">
        <div className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Recipe Name*</span>
                </div>
                <input
                  type="text"
                  placeholder="Recipe Name"
                  {...register("name" , { required: true})}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            {/* category */}

            <div className="flex gap-6">
              {/* category */}
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">category*</span>
                </div>
                <select
                  {...register("category", { required: true} )}
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled selected>
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
              {/* Price  */}
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="text"
                  placeholder="Product Price"
                  {...register("price" , { required: true})}
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            {/* text area */}
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Recipe Details*</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Bio"
                  {...register("recipe", { required: true} )}
                  required
                ></textarea>
              </label>
              <input
                {...register("image" , { required: true})}
                type="file"
                className="file-input bottom-2 border-gray-400 my-6 file-input-bordered w-full max-w-xs"
                required
              />
            </div>
            <button className="btn text-black bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-pink-500 hover:to-yellow-500">
              Add Items <FaUtensils></FaUtensils>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Additems;
