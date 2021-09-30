import React from 'react'
import { Link } from 'react-router-dom'

const NewNoteComponent = () => {
    return (
        <div>
             {/* <!-- Header Starts Here --> */}
  <header>
    <div className="container-fluid second-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand back-logo" to="/">
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
                <Link className="nav-link avatar-area d-flex align-items-center justify-content-center" to="/user">
                  <div className="avatar">
                    <img src="assets/images/icon/user.svg" alt="User" className="img-fluid" />
                  </div>
                  <span>Rummy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/* <!-- Header Ends Here --> */}
 
  {/* <!-- Note Area Starts Here --> */}
  <section className="note-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="note-area-heading">
            <div className="mt-0 mt-lg-4">
              <form action="#" className="title-text">
                <textarea placeholder="Title" className="form-control"></textarea>
              </form>
              {/* <!-- <span className="sub-heading">Desciption</span> --> */}
            </div>
            <div className="note-area-right d-flex align-items-center mt-0">
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
      <div className="row note-area-content">
        <div className="col-lg-12">
          <form action="#" className="desciption-text">
            <textarea placeholder="Desciption" className="form-control"></textarea>
          </form>
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

export default NewNoteComponent
