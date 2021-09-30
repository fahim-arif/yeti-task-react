import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/authActions";

import axios from "axios";
import qs from "qs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm, Controller } from "react-hook-form";
import { api_url } from "../../utils/api";

const SignUpComponent = () => {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(0);
  const [email, setEmail] = useState("");
  const { register, handleSubmit, control } = useForm();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const history = useHistory();

  const [signupId, setsignupId] = useState();

  // console.log(email);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("");
    }
  });

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, [isAuthenticated]);
  const submitHandler = (data) => {
    // console.log(data);
    //  event.preventDefault();
    console.log("hi sub", signupId);

    const finalData = qs.stringify({
      id: signupId,
      otp: data.otp,
      email: data.email,
      device_id: "fasdf345345345",
      device_token: "asfasdfasdfdas",
      device_platform: "IOS",
    });

    dispatch(createUser(finalData));
    // let config = {
    //   method: "post",
    //   url: "http://dev7.invitocreatives.com//api/verify-otp",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   data: finalData,
    // };

    //  console.log("user =>" , user)
    //console.log("id", signupId)

    // axios(config)
    //   .then((res) => {
    //     console.log(res.data);
    //     // history.push("/detail");
    //     // console.log(res.data.status);
    //     toast.warn(`${res.data.message}`);
    //     if (res.data.status) {
    //     }
    //   })
    //   .catch((err) => {
    //     console.error("err", err);
    //     //  toast.error(`${res.data.message}`);
    //   });
  };

  const emailOtpHandler = (email) => {
    console.log("data", email);
    const data = { email: email };

    console.log("signup", data);

    axios
      .post(`${api_url}/api/signup`, data)
      .then((res) => {
        console.log(res);
        toast.success(`${res.data.message}`);
        console.log(res.data.payload);
        setsignupId(res.data.payload.id);
        localStorage.getItem("userId", JSON.stringify(signupId));
      })
      .catch((err) => {
        console.error("Err", err.message);
        toast.success(`${res.data.message}`);
        toast.warn(`${err.data.message || " something went wrong"}`);
      });
  };

  const resendOTPHandler = () => {
    setSeconds(3);
    emailOtpHandler(email);
  };
  return (
    <div>
      <section classNameName='starting'>
        <ToastContainer />
        <div className='container-fluid ms-0 me-0'>
          <div className='row' style={{ height: "100vh" }}>
            <div
              className='col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0'
              style={{
                backgroundimage: `url(assets/images/background/01.jpg)`,
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
            <div className='col-lg-7 starting-right'>
              <div className='starting-right-content'>
                <h2 className='text-primary text-center'>Get Started.</h2>
                <p className='text-primary sub-heading mb-0 text-center'>
                  Already have an account?{" "}
                  <Link to='/login' className='text-info'>
                    Login
                  </Link>
                </p>
                <div className='signup-form reg-info'>
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className='mb-35'>
                      <Controller
                        control={control}
                        name='email'
                        render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { invalid, isTouched, isDirty, error },
                          formState,
                        }) => (
                          <input
                            type='email'
                            {...register("email")}
                            className='form-control custom-input'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            // onBlur={(e) => {
                            //   const email = e.target.value;
                            //   emailOtpHandler(email);
                            // }}
                          />
                        )}
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        {...register("otp")}
                        type='text'
                        className='form-control custom-input'
                        placeholder='OTP'
                      />
                      <div className='mt-2 mt-lg-3 form-text text-info text-end me-4'>
                        {!seconds && (
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={resendOTPHandler}
                          >
                            {" "}
                            Click to receive OTP
                          </div>
                        )}
                        {seconds && `Resend OTP in ${seconds}`}
                      </div>
                    </div>

                    <div className='mb-4 form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input custom-checkbox'
                        id='check'
                      />
                      <label
                        className='form-check-label text-primary fw-500'
                        for='check'
                        style={{ maxWidth: "345px", lineHeight: "29px" }}
                      >
                        I agree to platform’s{" "}
                        <span className='text-info'>Terms of service</span> and{" "}
                        <span className='text-info'>Privacy policy</span>
                      </label>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button type='submit' className='btn-submit'>
                        Register
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

export default SignUpComponent;
