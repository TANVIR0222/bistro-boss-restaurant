import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../useHooks/useAuth";
import useAxiosPublic from "../../../useHooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocalLogin = () => {
  const { googleSingin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate(); 

  const handleGoogleSingup = () => {
    console.log('ok');
    googleSingin()
    .then((res) => {
      console.log(res.user);
      const userInfo ={
        email : res.user?.email,
        name : res.user?.displayName,
      }
      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
    })
    
    
  };
  return (
    <div>
      <div
       
        className="divider divider-accent"
      ></div>
      <button  onClick={handleGoogleSingup} className="btn">
        <FcGoogle />
        Google
      </button>
    </div>
  );
};

export default SocalLogin;
