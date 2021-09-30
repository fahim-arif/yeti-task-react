import React from "react";
import { Link } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

const CardElementContainer = styled.div`
  height: 40px;
  display:flex;
  align-items:center;
`;

const SubscriptionComponent = () => {
  return (
    <div>
      {/* <!-- Header Starts Here --> */}
      <header>
        <div className='container-fluid second-header'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container-fluid'>
              <Link className='navbar-brand back-logo' to='newNote'>
                <>
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

      <section class='note-area mt-0 subscription-area'>
        <div class='container'>
          <div
            class='row user-profile justify-content-center'
            style={{
              backgroundImage: `url(assets/images/background/02.jpg)`,
            }}
          >
            <div class='col-lg-6'>
              <div class='subscription-area-row'>
                <div class='subscription-wizerd'>
                  <img
                    src='assets/images/icon/badge.svg'
                    alt='Icon'
                    class='img-fluid subscription-wizerd-badge'
                  />
                  <h6>Currently you are using a free version</h6>
                  <svg
                    width='69'
                    height='106'
                    viewBox='0 0 69 106'
                    fill='current-color'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g>
                      <path
                        d='M27.8735 0.672363V13.7876H17.7775C13.385 13.7788 9.16377 15.4899 6.01829 18.5543C2.87281 21.6187 1.05331 25.7926 0.949676 30.1816V36.7392C0.938893 41.0272 2.38483 45.1918 5.05079 48.5513C7.71675 51.9108 11.4448 54.2663 15.6247 55.2321L50.0868 63.8884C51.2537 64.4186 52.2774 65.219 53.0731 66.2234C53.8688 67.2278 54.4136 68.4072 54.6624 69.6639V76.2215C54.6612 76.659 54.5726 77.0918 54.402 77.4946C54.2313 77.8975 53.9819 78.2622 53.6685 78.5676C53.3551 78.8729 52.9838 79.1127 52.5765 79.2728C52.1692 79.433 51.7341 79.5103 51.2965 79.5003H17.6374C16.4702 79.4967 15.3191 79.2275 14.2715 78.7131V66.38H0.816406V79.4952C0.861607 81.561 1.42832 83.5818 2.46392 85.3702C3.49951 87.1585 4.97042 88.6562 6.74007 89.7244C10.0061 91.7445 13.7991 92.7491 17.6374 92.6105H27.7334V105.726H41.1954V92.6105H51.2965C55.7025 92.6647 59.9498 90.9685 63.1051 87.8944C66.2605 84.8204 68.0658 80.6201 68.1243 76.2164V69.6639C68.1352 65.3762 66.6895 61.2118 64.0239 57.8523C61.3583 54.4928 57.6306 52.1372 53.451 51.1711L18.9889 42.5113C17.8225 41.9815 16.799 41.1816 16.0034 40.1778C15.2077 39.1741 14.6626 37.9954 14.4133 36.7392V30.1816C14.4146 29.7442 14.5031 29.3114 14.6738 28.9085C14.8444 28.5057 15.0938 28.1409 15.4072 27.8356C15.7207 27.5303 16.0919 27.2905 16.4992 27.1303C16.9065 26.9702 17.3417 26.8928 17.7792 26.9028H51.4383C52.6032 26.9253 53.7503 27.1936 54.8042 27.6901V40.018H68.2662V26.9028C68.2209 24.8371 67.6542 22.8162 66.6186 21.0279C65.583 19.2396 64.1121 17.7418 62.3425 16.6736C59.0745 14.6522 55.279 13.6476 51.4383 13.7876H41.3355V0.672363H27.8735Z'
                        fill='#1B2330'
                      />
                    </g>
                  </svg>
                  <h6 style={{ color: "#B6B9BE" }}>
                    Subscribe to our paid version to avail some cool features
                  </h6>
                </div>
                <h5>Subscription charges $ 20 /yr</h5>
                <div class='paid-features-area'>
                  <h6 class='small-heading'>Paid features</h6>
                  <div class='d-flex paid-features'>
                    <span class='circle-icon'></span>
                    <p>SMS notifications and reminders</p>
                  </div>
                  <div class='d-flex paid-features my-2'>
                    <span class='circle-icon'></span>
                    <p>Email notifications and reminders</p>
                  </div>
                  <div class='d-flex paid-features'>
                    <span class='circle-icon'></span>
                    <p>Beautiful notes design templates</p>
                  </div>
                </div>
                <CardElement></CardElement>
                <div class='d-flex justify-content-center'>
                  <a href='#' class='btn accent-btn-sm'>
                    Make Payment
                  </a>
                  {/* <script src='http://js.stripe/com/v3/'></script>
                  <script>var stripe = Stripe()</script> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionComponent;
