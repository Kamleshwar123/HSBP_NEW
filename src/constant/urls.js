const BASEURL = 'https://homeservicebeautyparlour.com/';
const MID = 'api/v1';
const API_URL = {
  API_BASEURL: BASEURL+MID,
  IMAGE_URL: BASEURL,
  LOGIN: `/login`,
  VERIFY_OTP: `/verifyOTP`,
  GET_CITY: `/getCities`,
  UPDATE_CITY: `/updateCity`,
  GET_BANNER: `/banner`,
  GET_SERVICES: `/getServicesNew`,
  GET_PACKAGES: `getPackageList`,
  GET_ORDER_LIST: `/getOrderList`,
  UPDATE_ORDER_STATUS: `/updateOrderStatus`,
  GET_CUSTOMER_ADDRESS_LIST: `/getCustomerAddressList`,
  ADD_ADDRESS: `/addCustomerAddress`,
  UPDATE_ADDRESS: `/updateCustomerAddress`,
  UPDATE_PROFILE: `/updateProfile`,
  ADD_TO_CART: `/addtocart`,
  APPLY_COUPEN: `/applyCoupon`,
};
export default API_URL;