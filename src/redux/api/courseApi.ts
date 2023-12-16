import { baseApi } from "./baseApi";
export const courseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addCourse: build.mutation({
      query: (payload) => ({
        url: "/api/course",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["auth"],
    }),
    getCourses: build.query({
      query: () => ({
        url: "/api/courses",
        method: "GET",
      }),
    }),

    getCourse: build.query({
      query: (id) => ({
        url: `/api/course/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAddCourseMutation, useGetCoursesQuery, useGetCourseQuery } =
  courseApi;
