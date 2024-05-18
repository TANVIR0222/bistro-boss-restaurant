import useAuth from "../../../useHooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
  return (
    <div>
      <h1 className="text-4x">
        <samp>Hi Wellcome </samp>
        {
            user?.displayName ? user.displayName : 'Back'
        }
      </h1>
    </div>
  );
};

export default UserHome;
