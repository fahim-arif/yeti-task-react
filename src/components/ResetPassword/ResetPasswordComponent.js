import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/actions/authActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import qs from "qs";

const ResetPasswordComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newpassword != confirmPass) {
      toast.warn("Password doesn't match ");
      return;
    }

    const data = qs.stringify({
      password,
      newpassword,
    });
    dispatch(resetPassword(data));
  };
  return (
    <div>
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
                <h2 className='text-primary text-center'>Reset Password.</h2>
                <p className='normal-heading text-center mx-auto'>
                  You email is verified, complete your profile by adding a
                  username and phone number (optional)
                </p>
                <div className='signup-form'>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-35'>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        className='form-control custom-input'
                        placeholder='Email'
                      />
                    </div>
                    <div className='mb-3'>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='form-control custom-input'
                        placeholder='Old Password'
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
                    <div className='mb-35'>
                      <input
                        onChange={(e) => setNewpassword(e.target.value)}
                        type='password'
                        className='form-control custom-input'
                        placeholder='New password'
                      />
                    </div>
                    <div className='mb-35'>
                      <input
                        onChange={(e) => setConfirmPass(e.target.value)}
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

export default ResetPasswordComponent;
