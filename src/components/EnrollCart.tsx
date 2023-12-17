/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetEnrollQuery } from "../redux/api/enrollApi";

const EnrollCart = () => {
  const { data: getEnroll, isLoading } = useGetEnrollQuery(undefined);
  const enrollData = getEnroll?.data;
  //console.log("enrollData:", enrollData);
  return (
    <div className=" items-center rounded flex justify-center h-full py-10 ">
      <div>
        <h1 className=" text-xl font-bold text-center py-4 ">Enroll Courses</h1>
        <div className=" flex flex-wrap gap-4 items-center justify-center ">
          {!isLoading &&
            enrollData?.map((item: any) => (
              <div key={item._id}>
                <div className=" bg-red-300 items-center justify-cente shadow-lg outline outline-gray-300/75 rounded p-5 ">
                  <div className="bg-white flex items-center justify-center px-5">
                    <img
                      src={item?.courseId?.thumbnail}
                      alt="thumbnail"
                      className="w-48 h-48 object-cover mx-auto"
                    />
                  </div>
                  <h4 className=" flex text-sm lg:text-xl font-bold ">
                    {item?.courseId?.name}
                  </h4>
                  <h4 className=" flex text-sm lg:text-xl font-bold ">
                    Instructor: {item?.courseId?.instructor}
                  </h4>
                  <h4 className=" flex text-sm lg:text-xl font-bold ">
                    Schedule: {item?.courseId?.schedule}
                  </h4>
                </div>
                {/* <p>Schedule : {item?.schedule} </p>*/}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EnrollCart;
