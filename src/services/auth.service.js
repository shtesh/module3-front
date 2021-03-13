import axios from "axios";

const authApi = axios.create({
    baseURL: `${process.env.REACT_APP_API}/auth`,
    withCredentials: true,
});

export const signup = (user) => authApi.post("/signup", user);

export const login = (user) => authApi.post("/login", user);

export const logout = () => authApi.post("/logout");

export const getUser = () => authApi.get("/");

