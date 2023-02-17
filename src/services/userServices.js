import { Router } from "next/router";
import { toast } from "react-toastify";
import API_URL from "../constant/urls";
import { setCustomerData, setCustomerId } from "../redux/Slices/userSlice";
import { setToken } from "../utils";
import Api from "./Axiosinterceptor";

export const loginApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.LOGIN, data);
        if (res.status === 200) {
            dispatch(setCustomerId(res?.data?.Result?.CustomerId));
            toast.success(res?.data?.Message || "");
        }
        return res;
    } catch (err) {
        if (err.response?.data?.Message) {
            toast.error(err.response.data.Message || "");
        }
        return err
    }
};
export const verifyOtpApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.VERIFY_OTP, data);
        if (res.status === 200) {
            dispatch(setCustomerData(res?.data?.Result));
            Router.push('/')
            toast.success(res?.data?.Message || "");
        }
        return res;
    } catch (err) {
        if (err.response?.data?.Message) {
            toast.error(err.response.data.Message || "");
        }
        return err
    }
};