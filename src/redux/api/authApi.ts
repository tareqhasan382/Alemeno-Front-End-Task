import { baseApi } from "./baseApi";
// /auth/login
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (data) => ({
        url: "/api/signup",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    login: build.mutation({
      query: (data) => ({
        url: "/api/login",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["auth"],
    }),
    userProfile: build.query({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
    }),
  }),
});
//users
export const { useSignupMutation, useLoginMutation, useUserProfileQuery } =
  authApi;
