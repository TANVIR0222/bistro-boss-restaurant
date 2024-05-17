import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../component/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../useHooks/useAxiosPublic";
import useAxios from "../../../useHooks/useAxios";
import { FaUtensils } from "react-icons/fa";

// image imageBB
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const [name , category , recipe , price , _id] = useLoaderData();
  
  const axiosPublic = useAxiosPublic()
  const axiosSucure = useAxios();
  const { register, handleSubmit , reset } = useForm();
  const onSubmit = async (data) =>{
    console.log(data);
  //img upload 
    const imageFile = {image : data.image[0]}
    const res = await axiosPublic.post(image_hosting_api ,imageFile, {
      headers:{
        'content-Type' : 'multipart/form-data'
      }
    });
    if(res.data.success){
      // now send the menu item data to server with the image BB
      const menuItem = {
        name: data.name,
        category: data.category,
        price : parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url

      }
      //
      const menuRes = await axiosSucure.patch(`/menu/${_id}` , menuItem);
      console.log(menuRes.data);
      if(menuRes.data.modifiedCount > 0 ){
        reset();
        // pop up
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is updatede to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log(res.data);
    
  };


  return (
    <div>
      <SectionTitle
        heading={"UPDATE ITEM"}
        subheading={"update"}
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
                  defaultValue={name}
                  placeholder="Recipe Name"
                  {...register("name", { required: true })}
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
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                  required
                >
                  <option disabled value="default">
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
                  defaultValue={price}
                  placeholder="Product Price"
                  {...register("price", { required: true })}
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
                  defaultValue={recipe}
                  {...register("recipe", { required: true })}
                  required
                ></textarea>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input bottom-2 border-gray-400 my-6 file-input-bordered w-full max-w-xs"
                required
              />
            </div>
            <button className="btn text-black bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-pink-500 hover:to-yellow-500">
              update Items <FaUtensils></FaUtensils>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
