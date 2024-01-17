import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://employees-back.onrender.com/api',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = 
    //     (getState() as RootState).
    // }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
    reducerPath: "splitApi",
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: ()=>({}),
})