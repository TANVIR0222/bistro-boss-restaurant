import useCard from "../../../useHooks/useCard";

const Cart = () => {
  //dashbord user data and card deatils
  let num = 1;
  const [card] = useCard();
  const cartTotle = card.reduce(
    (total, currentIten) => total + currentIten.price,
    0
  );
  const rounded = cartTotle.toFixed(2);
  return (
    <div className="">
      <div className="uppercase flex justify-evenly">
        <h2 className="text-3xl"> Total orders : {card.length} </h2>
        <h2 className="text-3xl"> total price : {rounded} </h2>
        <button className="btn btn-primary ">Pay</button>

        <div className="overflow-x-auto"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                card.map(item => <tr key={item._id}>
                    <th>
                      {num++}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }          
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Cart;
