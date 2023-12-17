/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import "./App.css";
import { useGetCoursesQuery } from "./redux/api/courseApi";

function App() {
  const { data, isLoading } = useGetCoursesQuery(undefined);
  const course = data?.data;
  // console.log("course:", course);
  // console.log("loading:", isLoading);
  return (
    <>
      <div className=" items-center rounded flex justify-center h-full py-10 ">
        <div>
          <h1 className=" text-xl font-bold text-center py-4 ">All Courses</h1>
          <div className=" flex flex-wrap gap-4 items-center justify-center ">
            {isLoading && (
              <>
                <h1 className="text-xl font-bold text-center ">Loading</h1>
              </>
            )}
            {!isLoading &&
              course?.map((item: any) => (
                <div key={item._id}>
                  <div className=" bg-red-300 items-center justify-cente shadow-lg outline outline-gray-300/75 rounded p-5 ">
                    <div className="bg-white flex items-center justify-center px-5">
                      <img
                        src={item?.thumbnail}
                        alt="thumbnail"
                        className="w-48 h-48 object-cover mx-auto"
                      />
                    </div>
                    <h3 className=" flex text-sm lg:text-xl lg:font-bold font-medium ">
                      Name:
                      <h4 className=" flex text-sm lg:text-xl font-bold ">
                        {item?.name}
                      </h4>
                    </h3>
                    <p>Instructor: {item?.instructor} </p>
                    <p>EnrollmentStatus: {item?.enrollmentStatus} </p>
                    <p>Duration : {item?.duration} </p>
                    <p>Schedule : {item?.schedule} </p>
                    <p>Location : {item?.location} </p>

                    <Link to={`/courseDetails/${item._id}`}>
                      <button className=" px-3 py-1 bg-blue-500 text-white rounded-lg font-bold mt-3 ">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
