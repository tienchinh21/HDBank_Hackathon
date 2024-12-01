import axiosClient from "./axiosClient";

export const register = async (data) => {
    return await axiosClient.post("/register", data);
};

export const verify = async (data) => {
    return await axiosClient.post("/verify", data);
};

export const login = async (data) => {
    return await axiosClient.post("/login", data);
};

export const getInfo = async (data) => {
    return await axiosClient.post("/getBalance", data);
};


export const transfer = async (data) => {
    return await axiosClient.post("/transfer", data);
}