import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("");
    }
  });
  const resendHandler = () => {
    console.log("click");
    toast.success("OTP was sent");
  };

  const onSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <ToastContainer />
      <section className='starting'>
        <div className='container-fluid ms-0 me-0'>
          <div className='row' style={{ height: "100vh" }}>
            <div
              className='col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0'
              style={{
                backgroundImage: `url(assets/images/background/01.jpg)`,
              }}
            >
              <div className='starting-left'>
                <img
                  src='assets/images/logo/logo.png'
                  alt='Logo'
                  className='img-fluid mx-auto d-block'
                />
                <div className='starting-left-text'>
                  <h6 className='text-center lead text-secondary'>
                    Keep youself manged and
                  </h6>
                  <h6 className='text-center lead text-secondary mb-0'>
                    organized
                  </h6>
                </div>
              </div>
            </div>
            <div className='col-lg-7 starting-right sub-pages'>
              <div className='starting-right-content'>
                <h2 className='text-primary text-center'>Forgot password.</h2>
                <p className='normal-heading text-center mx-auto'>
                  You email is verified, complete your profile by adding a
                  username and phone number (optional)
                </p>
                <div className='signup-form'>
                  <form onSubmit={onSubmit}>
                    <div className='mb-35'>
                      <input
                        type='email'
                        className='form-control custom-input'
                        placeholder='Email'
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        type='text'
                        className='form-control custom-input'
                        placeholder='OTP'
                      />
                      <div className='mt-2 mt-lg-3 form-text text-info text-end me-4'>
                        {/* Resend OTP in 00:53s */}
                        {seconds && `Resend OTP in ${seconds}`}
                        {seconds.length === 0 && (
                          <div
                            onClick={resendHandler}
                            style={{ cursor: "pointer" }}
                          >
                            Get OTP
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='mb-35'>
                      <input
                        type='password'
                        className='form-control custom-input'
                        placeholder='New password'
                      />
                    </div>
                    <div className='mb-35'>
                      <input
                        type='password'
                        className='form-control custom-input'
                        placeholder='Confirm Password'
                      />
                    </div>
                    <div className='d-flex justify-content-end mt-5 submit-area'>
                      <button type='submit' className='btn-submit'>
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
