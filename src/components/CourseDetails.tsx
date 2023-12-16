/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetCourseQuery } from "../redux/api/courseApi";
const CourseDetails = () => {
  const { id } = useParams();
  const { data } = useGetCourseQuery(id);
  const course = data?.data;
  console.log("Course:", course);
  return (
    <div className="flex justify-center items-center py-10">
      <div className=" items-center justify-cente shadow-lg outline outline-gray-300/75 rounded p-5 ">
        <div className="bg-white flex items-center justify-center px-5">
          <img
            src={course?.thumbnail}
            alt="thumbnail"
            className="w-48 h-48 object-cover mx-auto rounded overflow-hidden"
          />
        </div>
        <h2 className="font-bold text-xl mb-2">{course?.name}</h2>
        <p className=" text-base">{course?.description}</p>
        <p>Instructor: {course?.instructor} </p>
        <p>EnrollmentStatus: {course?.enrollmentStatus} </p>
        <p>Duration : {course?.duration} </p>
        <p>Schedule : {course?.schedule} </p>
        <p>Location : {course?.location} </p>
        {/* <p>Syllabus: {item?.prerequisites} </p> */}
        <div className=" flex flex-wrap items-center">
          <p className=" font-bold pr-2">Pre-requisites: </p>
          {course?.prerequisites?.map((prerequisite: string, index: any) => (
            <div key={index}>
              <p>
                <span className="flex mr-2"> {prerequisite} ,</span>
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold">Syllabus:</h2>
          <div className="list-disc">
            {course?.syllabus?.map((item: any) => (
              <h2 key={item.week} className="mb-4">
                <h3 className="text-lg font-semibold">{`Week ${item.week}: ${item.topic}`}</h3>
                <p className="ml-4">{item.content}</p>
              </h2>
            ))}
          </div>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
