import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../utils/local-storage";
import { useUserProfileQuery } from "../redux/api/authApi";
const UserProfile = () => {
  const { data } = useUserProfileQuery(undefined);
  const course = data?.data;
  console.log("Course:", course);
  const navigate = useNavigate();
  const userLoggedIn = isLoggedIn();
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }
    setIsLoading(true);
  }, [loading, userLoggedIn, navigate]);

  if (!loading) {
    <div>
      <h1>Loading..........</h1>
    </div>;
  }

  //===========================

  return (
    <div className="flex justify-center items-center py-10">
      <div className=" w-full items-center justify-cente shadow-lg outline outline-gray-300/75 rounded p-5 ">
        <h1 className=" text-center ">User Profile</h1>
        <div className="bg-white flex flex-col items-center justify-center px-5 w-full">
          <h1 className=" text-center "> Name :{course?.name} </h1>
          <h1 className=" text-center "> Email :{course?.email} </h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
