import React  , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api_url } from '../../utils/api';
import axios from 'axios';

import { connect } from 'react-redux';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const TagsComponent = (props) => {
  
  console.log(props.auth.userData);
  const [Data, setData] = useState([])
  const [TagId, setTagId] = useState()
 const token = props.auth.userData.token;

//get all the tags data
 const getTagsData = () => {
     axios
       .get(`${api_url}/api/tags`, {
         headers: { Authorization: `Bearer ${token}` },
       })
       .then((res) => {
         console.log(res.data.payload);
         setData(res.data.payload);
       })
       .catch((err) => {
         console.error(err);
       });
 }

  useEffect(() => {
  getTagsData()
  }, [])


//delete handler of tags

const deleteHandler = (tagId) => {
  console.log("delete",tagId, token)
      axios
        .delete(`${api_url}/api/tags/${tagId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
             toast.success(`${res.message}`);
        })
        .catch((err) => {
          console.error("Err", err.message);
          toast.warn(`${err.message ||" something went wrong" }`)
        });
};




    return (
      <div>
        {/* <!-- Header Starts Here --> */}
        <header>
          <div className="container-fluid second-header">
            <ToastContainer />
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand back-logo" to="/newNote">
                  <img
                    src="assets/images/icon/back.svg"
                    alt="Back Icon"
                    className="img-fluid me-4"
                  />
                  <img src="assets/images/icon/logo.svg" alt="Logo" />
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
                      <Link
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
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="note-area manage-tags mt-0">
          <div className="container">
            <div
              className="row user-profile justify-content-center"
              style={{
                backgroundImage: `url(assets/images/background/02.jpg)`,
              }}
            >
              <div className="manage-tags-area">
                <h4>Manage tags</h4>
              </div>

              <div className="col-lg-12">
                <div className="row justify-content-between">
                  <div className="col-lg-6 mb-5 mb-md-5 mb-lg-0">
                    {Data.map((tag, tagindx) => {
                      return (
                        <div key={tag.tag_id} className="tags-wizerd">
                          <div className="tags-wizerd-left">
                            <h6>{tag.title}</h6>
                          </div>
                          <button
                            className="btn"
                            type="button"
                            onClick={() => {
                              const tagId = tag.id;
                              deleteHandler(tagId);
                            }}
                          >
                            <img
                              src="assets/images/icon/trash-02.svg"
                              alt="Icon"
                              className="img-fluid"
                            />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="manage-tags-bottom">
                  <div className="text-center text-md-end text-lg-end">
                    <Link to="/newnote" className="btn accent-btn-sm">
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
                        />
                      </svg>
                      Add new
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(TagsComponent);