
const Menuitem = ({item}) => {
    const {name, image , price , recipe} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}--------</h3>
                <h4>{recipe}</h4>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default Menuitem;