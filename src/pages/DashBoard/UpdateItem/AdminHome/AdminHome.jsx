import useAuth from "../../../../useHooks/useAuth";

const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="text-4xl">
                <span>Hi , Wellcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
        </div>
    );
};

export default AdminHome;