import React from "react";

const Header = () => {
  return (
    <div>
      {/* <!-- Header Starts Here --> */}
      <header>
        <div className='container-fluid second-header'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
              <Link className='navbar-brand back-logo' to='newNote'>
                <>
                  {/* hello world */}
                  <img
                    src='assets/images/icon/back.svg'
                    alt='Back Icon'
                    className='img-fluid me-4'
                  />
                  <img src='assets/images/icon/logo.svg' alt='Logo' />
                </>
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
                    <a
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
                      <span>Rummy</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
