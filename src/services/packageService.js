import { toast } from "react-toastify";
import API_URL from "../constant/urls";
import { setPackageList } from "../redux/Slices/packageSlice";
import Api from "./Axiosinterceptor";

export const packageListApi = (data) => async (dispatch) => {
    try {
        const res = await Api.post(API_URL.GET_PACKAGES, data);
        if (res.status === 200) {
            dispatch(setPackageList(res?.data?.Result));
        }
        return res;
    } catch (err) {
        if (err.response?.data?.Message) {
            toast.error(err.response.data.Message || "");
        }
        return err
    }
};