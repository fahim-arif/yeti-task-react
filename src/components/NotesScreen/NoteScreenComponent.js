import React from 'react'
import { Link } from 'react-router-dom'

const NoteScreenComponent = () => {
    return (
        <div>
              {/* <!-- Header Starts Here --> */}
  <header>
    <div className="container-fluid second-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand back-logo" href="newNote">
              <>
            <img src="assets/images/icon/back.svg" alt="Back Icon" className="img-fluid me-4" />
            <img src="assets/images/icon/logo.svg" alt="Logo" />
            </>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="last-item nav-item">
                <div className="search-box">
                  <form action="#">
                    <input type="search" id="search" placeholder="Search" className="form-control" />
                    <button className="btn"><img src="assets/images/icon/search.svg" alt="Search" /></button>
                  </form>
                </div>
              </li>
              <li className="nav-item">
                 <div className="notification">
                   <button type="button" className="btn">
                     <img src="assets/images/icon/clock.svg" alt="Clock" className="img-fluid" />
                     <div className="notification-circle">
                       <span>2</span>
                     </div>
                   </button>
                 </div>
              </li>
              <li className="nav-item">
                <a className="nav-link avatar-area d-flex align-items-center justify-content-center" href="user.html">
                  <div className="avatar">
                    <img src="assets/images/icon/user.svg" alt="User" className="img-fluid" />
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
  {/* <!-- Header Ends Here -->

  <!-- Note Area Starts Here --> */}
  <section className="note-area">
    <div className="container">
      <div className="row h-100">
        <div className="col-lg-12">
          <div className="note-area-heading">
            <div className="mt-4">
              <h3>Birthday wish</h3>
              <span style={{fontWeight: '500', fontSize: '18px', color: '#465A7C'}}>12 july 2021</span>
              <span className="main-lead d-block">Prepration</span>
              <form action="#" className="selection-area">
                <div className="selection-area-field">
                  <input type="checkbox" id="one" />
                  <label for="one">Sweets</label>
                </div>
                <div className="selection-area-field">
                  <input type="checkbox" id="two" />
                  <label for="two">Cake</label>
                </div>
                <div className="selection-area-field">
                  <input type="checkbox" id="three" />
                  <label for="three">Gifts</label>
                </div>
                <div className="selection-area-field">
                  <input type="checkbox" id="four" />
                  <label for="four">Decorations</label>
                </div>
                <div className="d-flex align-items-center selection-area-btns">
                  <button type="button" className="btn border-button">Reminder</button>
                  <button type="button" className="btn border-button">Birthday</button>
                </div>
              </form>
            </div>
            <div className="note-area-right d-flex align-items-center mt-4 mt-md-0 mt-lg-0">
              <button type="button" className="btn">
                <img src="assets/images/icon/share.svg" alt="Icon" className="img-fluid" />
                <div className="tooltip-text">
                  <span>Share</span>
                </div>
              </button>
              <button type="button" className="btn">
                <img src="assets/images/icon/file.svg" alt="Icon" className="img-fluid" />
                <div className="tooltip-text">
                  <span>Archive</span>
                </div>
              </button>
              <button type="button" className="btn">
                <img src="assets/images/icon/trash.svg" alt="Icon" className="img-fluid" />
                <div className="tooltip-text">
                  <span>Delete</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="note-area-footer d-flex align-items-center">
            <button type="button" className="btn"><img src="assets/images/icon/tick.svg" alt="Icon" className="img-fluid" /></button>
            <button type="button" className="btn"><img src="assets/images/icon/image.svg" alt="Icon" className="img-fluid" /></button>
            <button type="button" className="btn"><img src="assets/images/icon/save.svg" alt="Icon" className="img-fluid" /></button>
            <button type="button" className="btn"><img src="assets/images/icon/clock.svg" alt="Icon" className="img-fluid" /></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Note Area Ends Here --> */}

        </div>
    )
}

export default NoteScreenComponent
