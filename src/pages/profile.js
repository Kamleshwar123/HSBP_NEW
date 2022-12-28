import React from 'react'

const profile = () => {
    return (
        <div className='container bg-gray'>
            <h6>My Profile</h6>
            <div className='profile_page'>
                <div className='profile_form_box'>
                    <div className='form_heading'>
                        <h6>Contact Details</h6>
                    </div>
                    <div className='profile_form'>
                        <form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder='Enter First Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder='Enter First Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder='Enter First Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder='Enter First Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mb-3'>
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-3'>
                                <button className='custom_button'>Save Address & Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile