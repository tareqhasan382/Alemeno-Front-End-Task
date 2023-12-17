import { baseApi } from "./baseApi";
export const enrollApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    enrollCourse: build.mutation({
      query: (payload) => ({
        url: "/api/enroll",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["enroll"],
    }),
    getEnroll: build.query({
      query: () => ({
        url: "/api/enroll",
        method: "GET",
      }),
      providesTags: ["enroll"],
    }),
  }),
});

export const { useEnrollCourseMutation, useGetEnrollQuery } = enrollApi;
