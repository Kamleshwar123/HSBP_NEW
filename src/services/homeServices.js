import { toast } from "react-toastify";
import API_URL from "../constant/urls";
import { setCityList } from "../redux/Slices/homeSlice";
import { setServiceList } from "../redux/Slices/serviceSlice";
import Api from "./Axiosinterceptor";

export const getCityListApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.GET_CITY, data);
        if (res.status === 200) {
            dispatch(setCityList(res?.data?.Result));
        }
        return res;
    } catch (err) {
        if (err.response?.data?.Message) {
            toast.error(err.response.data.Message || "");
        }
        return err
    }
};
export const bannerListApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.GET_BANNER, data);
        if (res.status === 200) {
            dispatch(setServiceList(res?.data?.Result));
        }
        return res;
    } catch (err) {
        if (err.response?.data?.Message) {
            toast.error(err.response.data.Message || "");
        }
        return err
    }
};