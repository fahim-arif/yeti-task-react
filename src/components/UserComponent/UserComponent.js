import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserComponent = () => {

  const { userData } = useSelector((state) => state.auth);

  const ProfileHandler = () => {
    axios
      .post(url, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      {/* <!-- Header Starts Here --> */}
      <header>
        <div className='container-fluid second-header'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
              <Link className='navbar-brand back-logo' to='/newNote'>
                <img
                  src='assets/images/icon/back.svg'
                  alt='Back Icon'
                  className='img-fluid me-4'
                />
                <img src='assets/images/icon/logo.svg' alt='Logo' />
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center'>
                  <li className='last-item nav-item'>
                    <div className='search-box'>
                      <form action='#'>
                        <input
                          type='search'
                          id='search'
                          placeholder='Search'
                          className='form-control'
                        />
                        <button className='btn'>
                          <img
                            src='assets/images/icon/search.svg'
                            alt='Search'
                          />
                        </button>
                      </form>
                    </div>
                  </li>
                  <li className='nav-item'>
                    <div className='notification'>
                      <button type='button' className='btn'>
                        <img
                          src='assets/images/icon/clock.svg'
                          alt='Clock'
                          className='img-fluid'
                        />
                        <div className='notification-circle'>
                          <span>2</span>
                        </div>
                      </button>
                    </div>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link avatar-area d-flex align-items-center justify-content-center'
                      href='user.html'
                    >
                      <div className='avatar'>
                        <img
                          src='assets/images/icon/user.svg'
                          alt='User'
                          className='img-fluid'
                        />
                      </div>

                      <span>{userData.username && userData.username}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- Header Ends Here -->

  <!-- Note Area Starts Here --> */}
      <section className='note-area mt-0'>
        <div className='container'>
          <div
            className='row user-profile justify-content-center'
            style={{ backgroundImage: `url(assets/images/background/02.jpg);` }}
          >
            <div className='col-lg-8'>
              <div className='user-profile-area'>
                <div className='d-flex justify-content-center'>
                  <div className='user-icon'>
                    <img
                      src='assets/images/icon/userlg.svg'
                      alt='Icon'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <h4 className='text-center'>Edit profile</h4>
                <form action='#'>
                  <div className='user-field'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Rummy'
                    />
                  </div>
                  <div className='user-field'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Rummy@email.com'
                    />
                  </div>
                  <div className='user-field'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='91929 39495 '
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn accent-btn' type='submit'>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Note Area Ends Here --> */}
    </div>
  );
};

export default UserComponent;
