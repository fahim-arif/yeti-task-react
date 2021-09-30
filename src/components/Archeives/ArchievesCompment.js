import React from 'react'
import { Link } from 'react-router-dom';

const ArchievesComponent = () => {
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

        {/* <!-- Archives Area Starts Here --> */}
        <section className="note-area archives-area mt-0">
          <div className="container">
            <div
              className="row user-profile justify-content-center"
              style={{
                backgroundImage: ` url(assets/images/background/02.jpg);`,
              }}
            >
              <div className="col-lg-12">
                <h4>Archives</h4>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="archives-wizerd">
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam ?
                      </h6>
                      <p className="archives-wizerd-text">
                        Non amet, iaculis elementum varius sit lacinia. Dolor
                        tristique augue facilisi viverra vitae bibendum.
                        Facilisi justo consequat tempor nisi eget massa
                        consectetur pellentesque. Id eu feugiat id sagittis
                        commodo. Id sit aliquet faucibus metus pulvinar lacinia
                        volutpat eget posuere. Amet, faucibus sed luctus in eget
                        nulla enim. Vulputate turpis tristique et pharetra.
                        Phasellus dictumst semper viverra felis.......{" "}
                      </p>
                      <div className="d-flex justify-content-end">
                        <span className="date">September 05, 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="archives-wizerd">
                      <h6 className="archives-wizerd-title">Birthday wish</h6>
                      <span className="archives-wizerd-subtitle">
                        Prepration
                      </span>
                      <form
                        action="#"
                        className="selection-area archives-wizerd-selection"
                      >
                        <div className="selection-area-field">
                          <input type="checkbox" id="one" />
                          <label for="one">Cake</label>
                        </div>
                        <div className="selection-area-field">
                          <input type="checkbox" id="two" />
                          <label for="two">Decoration</label>
                        </div>
                        <div className="selection-area-field">
                          <input type="checkbox" id="three" />
                          <label for="three">Sweets</label>
                        </div>
                        <div className="selection-area-field">
                          <input type="checkbox" id="four" />
                          <label for="four">Gifts</label>
                        </div>
                        <div className="d-flex align-items-center selection-area-btns">
                          <button
                            type="button"
                            className="btn border-button me-2"
                          >
                            Reminder
                          </button>
                          <button type="button" className="btn border-button">
                            Birthday
                          </button>
                        </div>
                      </form>
                      <div className="d-flex justify-content-end">
                        <span className="date">September 05, 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="archives-wizerd">
                      <h6 className="archives-wizerd-title">Vacation</h6>
                      <div className="archives-wizerd-images">
                        <img
                          src="assets/images/card/01.png"
                          alt="Card Image"
                          className="img-fluid d-block"
                        />
                        <img
                          src="assets/images/card/02.png"
                          alt="Card Image"
                          className="img-fluid d-block"
                        />
                      </div>
                      <div className="d-flex justify-content-end">
                        <span className="date">September 05, 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Archives Area Ends Here --> */}
      </div>
    );
}

export default ArchievesComponent;
