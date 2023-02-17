import * as Yup from 'yup';
export const email = (data) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data
    );
export const password = (data) => /^(?=.*\d).{6,20}$/.test(data);
export const validateLogin = Yup.object().shape({
    Mobile: Yup.string()
        .required("Mobile is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
})
export const validateProfile = Yup.object().shape({
    FirstName: Yup.string()
        .required("First Name is required")
        .min(2, 'Min 2 character required'),
    LastName: Yup.string()
        .required("Last Name is required")
        .min(2, 'Min 2 character required'),
    MobileNumber: Yup.string()
        .required("Mobile Number is required")
        .min(10, 'Enter only 10 Digit')
        .max(10, 'Enter only 10 Digit'),
    Gender: Yup.string()
        .required("Gender is required")
        .min(2, 'Min 2 character required'),
    DOB: Yup.string()
        .required("DOB is required")
        .min(2, 'Min 2 character required'),
    MarrigeDate: Yup.string()
        .required("Marrige Date is required")
        .min(2, 'Min 2 character required'),
    Pincode: Yup.string()
        .required("Pincode is required")
        .min(2, 'Min 2 character required'),
    EmailId: Yup.string()
        .required("Email is required")
        .email("Invalid Email address")
})