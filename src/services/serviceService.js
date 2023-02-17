import { toast } from "react-toastify";
import API_URL from "../constant/urls";
import { setServiceList } from "../redux/Slices/serviceSlice";
import Api from "./Axiosinterceptor";

export const serviceListApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.GET_SERVICES, data);
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