import React from "react";
import { logout } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const HomePageComponent = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.auth);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  const sideBarCloseHandler = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("main-header").style.display = "block";
    document.getElementById("home-screen").style.display = "block";
  };

  const sideBarOpenHandler = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("main-header").style.display = "none";
    document.getElementById("home-screen").style.display = "none";
  };

  const logoutHandler = () => {
    toast.success("Logged out successfully");
    dispatch(logout());
    console.log("logout");
  };
  return (
    <div>
      <div className='sidebar-area' style={{ display: "none" }} id='mySidebar'>
        <div className='sidebar-area-item mb-0'>
          <button onClick={sideBarCloseHandler} className='btn close-btn'>
            Close &times;
          </button>
        </div>
        <div className='sidebar-area-item'>
          <Link to='/tags'>
            <img
              src='assets/images/icon/01.png'
              alt='Icon'
              className='img-fluid'
            />{" "}
            <span>Manage tags</span>
          </Link>
        </div>
        <div className='sidebar-area-item'>
          <a href='archives'>
            <img
              src='assets/images/icon/02.png'
              alt='Icon'
              className='img-fluid'
            />{" "}
            <span>Archives</span>
          </a>
        </div>
        <div className='sidebar-area-item'>
          <Link to='/user'>
            <img
              src='assets/images/icon/03.png'
              alt='Icon'
              className='img-fluid'
            />{" "}
            <span>Manage Profile</span>
          </Link>
        </div>
        <div className='sidebar-area-item'>
          <Link to='/resetPassword'>
            <img
              src='assets/images/icon/04.png'
              alt='Icon'
              className='img-fluid'
            />{" "}
            <span>Change password</span>
          </Link>
        </div>
        <div className='sidebar-area-item'>
          <Link to='/subscription'>
            <img
              src='assets/images/icon/05.png'
              alt='Icon'
              className='img-fluid'
            />{" "}
            <span>Subscription</span>
          </Link>
        </div>
        <div className='sidebar-area-item'>
          <Link onClick={logoutHandler} to='/login'>
            <img
              src='assets/images/icon/06.png'
              alt='Icon'
              className='img-fluid'
            />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      <header className='main-header' id='main-header'>
        <div className='container-fluid'>
          <nav>
            <div className='main-header-start'>
              <div className='hamburger'>
                <button
                  className='btn hamburger-btn'
                  onClick={sideBarOpenHandler}
                >
                  <img
                    src='assets/images/icon/mainhamburger.png'
                    alt='Icon'
                    className='img-fluid'
                  />
                </button>
              </div>
              <img
                src='assets/images/logo/small.png'
                alt='Logo'
                className='img-fluid'
              />
            </div>
            <div className='main-header-end'>
              <div className='search-field'>
                <form action='#'>
                  <input
                    type='search'
                    placeholder='Search'
                    className='form-control'
                  />
                  <img
                    src='assets/images/icon/search.svg'
                    alt='icon'
                    className='img-fluid'
                  />
                </form>
              </div>
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
              <Link
                className='nav-link avatar-area d-flex align-items-center justify-content-center'
                to='/user'
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
            </div>
          </nav>
        </div>
      </header>

      <section className='note-area home-screen mt-0' id='home-screen'>
        <div className='container-fluid'>
          <div
            className='row user-profile justify-content-center'
            style={{
              backgroundImage: `url(assets/images/background/02.jpg)`,
            }}
          >
            <div className='col-lg-12'>
              <div className='home-screen-top'>
                <button type='button' className='btn dark-btn'>
                  All
                </button>
                <button type='button' className='btn info-btn'>
                  Todo
                </button>
                <button type='button' className='btn dark-btn'>
                  News
                </button>
                <button type='button' className='btn info-btn'>
                  Fashion
                </button>
                <button type='button' className='btn dark-btn'>
                  Others
                </button>
                <div className='dropdown'>
                  <button
                    type='button'
                    className='btn filter-bnt dropbtn'
                    onClick={myFunction}
                    style={{
                      backgroundImage: `url(assets/images/icon/filter.svg)`,
                    }}
                  ></button>
                  <div id='myDropdown' className='dropdown-content'>
                    <a href='#'>
                      <img
                        src='assets/images/icon/updown.svg'
                        alt='icon'
                        className='img-fluid'
                      />
                      Date created
                    </a>
                    <a href='#'>
                      <img
                        src='assets/images/icon/updown.svg'
                        alt='icon'
                        className='img-fluid'
                      />
                      Date modified
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='archives-wizerd'>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam ?
                        </h6>
                        <p className='archives-wizerd-text'>
                          Non amet, iaculis elementum varius sit lacinia. Dolor
                          tristique augue facilisi viverra vitae bibendum.
                          Facilisi justo consequat tempor nisi eget massa
                          consectetur pellentesque. Id eu feugiat id sagittis
                          commodo. Id sit aliquet faucibus metus pulvinar
                          lacinia volutpat eget posuere. Amet, faucibus sed
                          luctus in eget nulla enim. Vulputate turpis tristique
                          et pharetra. Phasellus dictumst semper viverra
                          felis.......{" "}
                        </p>
                        <div className='d-flex justify-content-end'>
                          <span className='date'>September 05, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='archives-wizerd'>
                        <h6 className='archives-wizerd-title'>Birthday wish</h6>
                        <span className='archives-wizerd-subtitle'>
                          Prepration
                        </span>
                        <form
                          action='#'
                          className='selection-area archives-wizerd-selection'
                        >
                          <div className='selection-area-field'>
                            <input type='checkbox' id='one' />
                            <label for='one'>Cake</label>
                          </div>
                          <div className='selection-area-field'>
                            <input type='checkbox' id='two' />
                            <label for='two'>Decoration</label>
                          </div>
                          <div className='selection-area-field'>
                            <input type='checkbox' id='three' />
                            <label for='three'>Sweets</label>
                          </div>
                          <div className='selection-area-field'>
                            <input type='checkbox' id='four' />
                            <label for='four'>Gifts</label>
                          </div>
                          <div className='d-flex align-items-center selection-area-btns'>
                            <button
                              type='button'
                              className='btn border-button me-2'
                            >
                              Reminder
                            </button>
                            <button type='button' className='btn border-button'>
                              Birthday
                            </button>
                          </div>
                        </form>
                        <div className='d-flex justify-content-end'>
                          <span className='date'>September 05, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='null-wizerd'>
                        <div className='null-wizerd-date'>
                          <span>july 12, 2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='archives-wizerd'>
                        <h6 className='archives-wizerd-title'>Vacation</h6>
                        <div className='archives-wizerd-images'>
                          <img
                            src='assets/images/card/01.png'
                            alt='Card Image'
                            className='img-fluid d-block'
                          />
                          <img
                            src='assets/images/card/02.png'
                            alt='Card Image'
                            className='img-fluid d-block'
                          />
                        </div>
                        <div className='d-flex justify-content-end'>
                          <span className='date'>September 05, 2021</span>
                        </div>
                      </div>
                      <div className='archives-wizerd'>
                        <h6 className='archives-wizerd-title'>Random image</h6>
                        <div className='archives-wizerd-images'>
                          <img
                            src='assets/images/card/01.png'
                            alt='Card Image'
                            className='img-fluid d-block'
                          />
                          <img
                            src='assets/images/card/02.png'
                            alt='Card Image'
                            className='img-fluid d-block'
                          />
                        </div>
                        <div className='d-flex justify-content-end'>
                          <span className='date'>September 05, 2021</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='null-wizerd null-wizerd-sm'>
                        <div className='null-wizerd-date'>
                          <span>july 12, 2021</span>
                        </div>
                      </div>
                      <div className='null-wizerd null-wizerd-sm'>
                        <div className='null-wizerd-date'>
                          <span>july 12, 2021</span>
                        </div>
                      </div>
                      <div className='null-wizerd null-wizerd-sm'>
                        <div className='null-wizerd-date'>
                          <span>july 12, 2021</span>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center justify-content-lg-end'>
                        <a href='newNote' className='btn accent-btn-sm'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M24 12C24 13.106 23.904 14 22.798 14H14V22.798C14 23.902 13.106 24 12 24C10.894 24 10 23.902 10 22.798V14H1.202C0.0979997 14 0 13.106 0 12C0 10.894 0.0979997 10 1.202 10H10V1.202C10 0.0959997 10.894 0 12 0C13.106 0 14 0.0959997 14 1.202V10H22.798C23.904 10 24 10.894 24 12Z'
                              fill='#1B2330'
                            ></path>
                          </svg>
                          Create
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Home Screen Area Ends Here --> */}
    </div>
  );
};

export default HomePageComponent;
