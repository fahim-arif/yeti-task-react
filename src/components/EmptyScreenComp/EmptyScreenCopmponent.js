import React from 'react'
import { Link } from 'react-router-dom';



const EmptyScreenCopmponent = () => {  

    return (
      <div>
        {/* <!-- Header Starts Here --> */}
        <header>
          <div className="container-fluid second-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand back-logo" to="newNote">
                  <>
                    <img
                      src="assets/images/icon/back.svg"
                      alt="Back Icon"
                      className="img-fluid me-4"
                    />
                    <img src="assets/images/icon/logo.svg" alt="Logo" />
                  </>
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                    <li className="last-item nav-item">
                      <div className="search-box">
                        <form action="#">
                          <input
                            type="search"
                            id="search"
                            placeholder="Search"
                            className="form-control"
                          />
                          <button className="btn">
                            <img
                              src="assets/images/icon/search.svg"
                              alt="Search"
                            />
                          </button>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="notification">
                        <button type="button" className="btn">
                          <img
                            src="assets/images/icon/clock.svg"
                            alt="Clock"
                            className="img-fluid"
                          />
                          <div className="notification-circle">
                            <span>2</span>
                          </div>
                        </button>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link avatar-area d-flex align-items-center justify-content-center"
                        href="user.html"
                      >
                        <div className="avatar">
                          <img
                            src="assets/images/icon/user.svg"
                            alt="User"
                            className="img-fluid"
                          />
                        </div>
                        <span>Rummy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section class="note-area mt-0 empty-screen" id="empty">
          <div class="container">
            <div
              class="row user-profile justify-content-center align-items-center"
              style={{
                backgroundImage: `url(assets/images/background/02.jpg)`,
              }}
            >
              <div class="col-lg-6 text-center">
                <img
                  src="assets/images/screen/empty.png"
                  alt="Image"
                  class="img-fluid"
                />
              </div>
              <div class="d-flex justify-content-center justify-content-lg-end">
                <Link to="/newnote" class="btn accent-btn-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12C24 13.106 23.904 14 22.798 14H14V22.798C14 23.902 13.106 24 12 24C10.894 24 10 23.902 10 22.798V14H1.202C0.0979997 14 0 13.106 0 12C0 10.894 0.0979997 10 1.202 10H10V1.202C10 0.0959997 10.894 0 12 0C13.106 0 14 0.0959997 14 1.202V10H22.798C23.904 10 24 10.894 24 12Z"
                      fill="#1B2330"
                    ></path>
                  </svg>
                  Create
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default EmptyScreenCopmponent
