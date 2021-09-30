import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/authActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

const LoginComponent = (props) => {
  const history = useHistory();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isAuthenticated) history.push("/");
  }, []);

  async function submitHandler(data) {
    //  event.preventDefault();

    const email = data.email;
    const password = data.password;

    const device_id = "5444";
    const device_token = "ddnddddj44rr";
    const device_platform = "web";

    const user = {
      ...data,
      device_id,
      device_token,
      device_platform,
    };

    console.log("user => ", user);

    dispatch(userLogin(user, props.history));

    //optional  add validtion

    //  AuthService.login(email, password).then(
    //    () => {
    //      toast.success("logged in sucessfully ");

    //      history.push("/");
    //      window.location.reload();
    //    },
    //    (error) => {
    //      toast.warn(`failed login ${error.response.data.message}`);
    //      const resMessage =
    //        (error.response &&
    //          error.response.data &&
    //          error.response.data.message) ||
    //        error.message ||
    //        error.toString();
    //    }
    //  );
  }

  return (
    <div>
      <section className='starting'>
        <ToastContainer />
        <div className='container-fluid ms-0 me-0'>
          <div className='row' style={{ height: "100vh" }}>
            <div
              style={{
                backgroundImage: `url(assets/images/background/01.jpg)`,
              }}
              className='col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0'
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
                <h2 className='text-primary text-center'>Log In.</h2>
                <p className='text-primary sub-heading mb-0 text-center'>
                  Don’t have an account?{" "}
                  <Link to='/signup' className='text-info'>
                    Signup
                  </Link>
                </p>
                <div className='signup-form reg-info'>
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className='mb-35'>
                      <input
                        {...register("email")}
                        type='text'
                        name='email'
                        className='form-control custom-input'
                        placeholder='Email/Username'
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        name=''
                        {...register("password")}
                        type='password'
                        className='form-control custom-input'
                        placeholder='Password'
                      />
                      <div className='mt-2 mt-lg-3 text-end me-4'>
                        <Link
                          to='/forgotPassword'
                          className='form-text text-info'
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>

                    <div className='mb-4 form-check '>
                      <div className='d-flex align-items-center'>
                        <input
                          type='checkbox'
                          className='form-check-input custom-checkbox'
                          id='check'
                        />
                        <label
                          className='form-check-label text-primary fw-500'
                          for='check'
                        >
                          Keep me signed in
                        </label>
                      </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button type='submit' className='btn-submit'>
                        Login
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

export default LoginComponent;
