import { Formik } from 'formik'
import React, { useState } from 'react'
import { validateProfile } from '../../constant/validation';

const Profile = () => {
    const [initialValues, setInitialValues] = useState({
        FirstName: "",
        LastName: "",
        MobileNumber:"",
        Gender:"",
        MarrigeDate:"",
        DOB:"",
        Pincode:"",
        EmailId:"",
    });
  return (
    <div className='container'>
        <div className='bg-white-f2 my-3 rounded-2xl'>
            <h6 className='text-black-241 px-5 pt-5 text-base font-bold'>My Profile</h6>
            <div className='p-5 md:px-20 py-5 pb-7'>
                <div className='shadow-form bg-white rounded-2xl overflow-hidden'>
                    <div className='theme-heading-box'>
                        <h6>Contact Details</h6>
                    </div>
                    <div className='p-5'>
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={validateProfile}
                        onSubmit={(val) => {
                            handleSubmit(val);
                        }}
                    >
                        {({ values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-6 gap-6'>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder='First Name' name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values?.FirstName}/>
                                    {errors.FirstName && touched.FirstName &&<div className='error'>{errors.FirstName}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder='Last Name' name="LastName" onChange={handleChange} onBlur={handleBlur} value={values?.LastName}/>
                                    {errors.LastName && touched.LastName &&<div className='error'>{errors.LastName}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder='10 Digit Mobile No.' name="MobileNumber" onChange={handleChange} onBlur={handleBlur} value={values?.MobileNumber}/>
                                    {errors.MobileNumber && touched.MobileNumber &&<div className='error'>{errors.MobileNumber}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Gender</label>
                                    <select className='form-control' name="Gender" onChange={handleChange} onBlur={handleBlur} value={values?.Gender}>
                                        <option>-Select Gender-</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    {errors.Gender && touched.Gender &&<div className='error'>{errors.Gender}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Date of birth</label>
                                    <input type="date" className="form-control" placeholder='dd-mm-yyyy' name="DOB" onChange={handleChange} onBlur={handleBlur} value={values?.DOB}/>
                                    {errors.DOB && touched.DOB &&<div className='error'>{errors.DOB}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Marriage Anniversary(For Promotional offers)</label>
                                    <input type="date" className="form-control" placeholder='dd-mm-yyyy' name="MarrigeDate" onChange={handleChange} onBlur={handleBlur} value={values?.MarrigeDate}/>
                                    {errors.MarrigeDate && touched.MarrigeDate &&<div className='error'>{errors.MarrigeDate}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" placeholder='Email Address' name="EmailId" onChange={handleChange} onBlur={handleBlur} value={values?.EmailId}/>
                                    {errors.EmailId && touched.EmailId &&<div className='error'>{errors.EmailId}</div>}
                                </div>
                                <div className='col-span-6 md:col-span-3'>
                                    <label className="form-label">Pin Code</label>
                                    <input type="text" className="form-control" placeholder='Pin Code' name="Pincode" onChange={handleChange} onBlur={handleBlur} value={values?.Pincode}/>
                                    {errors.Pincode && touched.Pincode &&<div className='error'>{errors.Pincode}</div>}
                                </div>
                            </div>
                            <div className='text-center mt-6'>
                                <button type="submit" className='custom_button'>Save Address & Continue</button>
                            </div>
                        </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile