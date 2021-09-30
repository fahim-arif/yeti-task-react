import React from 'react'
import { Link } from 'react-router-dom'

const PagesPage = () => {
    return (
      <div>
        {/* <!-- Pages Link Starts Here --> */}
        <section class="py-5 pages-link">
          <h1 class="text-center text-info">Note Yeti Pages</h1>
          <div class="container">
            <div class="row mt-5">
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="signup">01-Get Started</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="detail">02-Complete Profile</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="login">03-LogIn</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="resetPassword">04-Reset Password</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="forgotPassword">05-Forgot password</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="/">06-Home Screen</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="emptyScreen">07-Empty Screen</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="archives">08-Archives</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="tags">09-Manage Tags</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="subscription">10-Subscription</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="clicking">11-Clicking</Link>
                </h4>
              </div>
              <div class="col-lg-4 mb-3">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="newNote">12-New Note</Link>
                </h4>
              </div>
              <div class="col-lg-4">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="noteScreen">13-Main Note Screen</Link>
                </h4>
              </div>
              <div class="col-lg-4">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="user">14-Profile</Link>
                </h4>
              </div>
              <div class="col-lg-4">
                <h4 class="py-2 m-0 border border-info text-center">
                  <Link to="header">14-Main Header</Link>
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Pages Link Ends Here --> */}
      </div>
    );
}

export default PagesPage
