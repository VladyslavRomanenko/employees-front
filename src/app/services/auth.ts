import { api } from "./api";

export type UserData = {
    name: string;
    email: string;
    password: string;
}

type ResponseLoginData = UserData & { token: string };

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/auth/login',
                method: "POST",
                body: userData,
            }),
        }),
        register: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/auth/register',
                method: "POST",
                body: userData,
            }),
        }),
        current: builder.mutation<ResponseLoginData, void>({
            query: () => ({
                url: '/auth/current',
                method: "GET",
            }),
        }),
        logout: builder.mutation<ResponseLoginData, void>({
            query: () => ({
                url: '/auth/logout',
                method: "POST",
            }),
        }),
    })
})

export const { useLoginMutation, useRegisterMutation, useCurrentMutation, useLogoutMutation } = authApi;
export const { endpoints: { login, register, current, logout } } = authApi;