import React from 'react'

const ClickingComponent = () => {
    return (
        <div>
              {/* <!-- SideBar Starts Here --> */}
  <div class="sidebar-area" style={{display:"none"}} id="mySidebar">
    <div class="sidebar-area-item mb-0">
      <button onclick="w3_close()" class="btn close-btn">Close &times;</button>
    </div>
    <div class="sidebar-area-item">
      <a href="tags.html"><img src="assets/images/icon/01.png" alt="Icon" class="img-fluid"  /> <span>Manage
          tags</span></a>
    </div>
    <div class="sidebar-area-item">
      <a href="archives.html"><img src="assets/images/icon/02.png" alt="Icon" class="img-fluid" />
        <span>Archives</span></a>
    </div>
    <div class="sidebar-area-item">
      <a href="user.html"><img src="assets/images/icon/03.png" alt="Icon" class="img-fluid"  /> <span>Manage
          Profile</span></a>
    </div>
    <div class="sidebar-area-item">

      <a href="reset.html"><img src="assets/images/icon/04.png" alt="Icon" class="img-fluid" /> <span>Change
          password</span></a>
    </div>
    <div class="sidebar-area-item">
      <a href="subscription.html"><img src="assets/images/icon/05.png" alt="Icon" class="img-fluid" />
        <span>Subscription</span></a>
    </div>
    <div class="sidebar-area-item">
      <a href="#"><img src="assets/images/icon/06.png" alt="Icon" class="img-fluid" /><span>Logout</span></a>
    </div>
  </div>
  {/* <!-- SideBar Ends Here -->

  <!-- Main Header Starts Here --> */}
  <header class="main-header" id="main-header">
    <div class="container-fluid">
      <nav>
        <div class="main-header-start">
          <div class="hamburger">
            <button class="btn hamburger-btn" onclick="w3_open()"><img src="assets/images/icon/mainhamburger.png"
                alt="Icon" class="img-fluid" /></button>
          </div>
          <img src="assets/images/logo/small.png" alt="Logo" class="img-fluid" />
        </div>
        <div class="main-header-end">
          <div class="search-field">
            <form action="#">
              <input type="search" placeholder="Search" class="form-control" />
              <img src="assets/images/icon/search.svg" alt="icon" class="img-fluid" />
            </form>
          </div>
          <div class="notification">
            <button type="button" class="btn">
              <img src="assets/images/icon/clock.svg" alt="Clock" class="img-fluid" />
              <div class="notification-circle">
                <span>2</span>
              </div>
            </button>
          </div>
          <a class="nav-link avatar-area d-flex align-items-center justify-content-center" href="user.html">
            <div class="avatar">
              <img src="assets/images/icon/user.svg" alt="User" class="img-fluid" />
            </div>
            <span>Rummy</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
  {/* <!-- Main Header Ends Here -->

  <!-- Home Screen Area Starts Here --> */}
  <section class="note-area home-screen clicking-area mt-0" id="click">
    <div class="container-fluid">
      <div class="row user-profile justify-content-center"
        style={{backgroundImage: `url(assets/images/background/02.jpg);`}}>
        <div class="col-lg-12">
          <div class="home-screen-top">
          </div>
        </div>
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-7">
              <div class="row">
                <div class="col-lg-6">
                  <div class="archives-wizerd">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ?</h6>
                    <p class="archives-wizerd-text">Non amet, iaculis elementum varius sit lacinia. Dolor tristique
                      augue facilisi viverra vitae bibendum. Facilisi justo consequat tempor nisi eget massa consectetur
                      pellentesque. Id eu feugiat id sagittis commodo. Id sit aliquet faucibus metus pulvinar lacinia
                      volutpat eget posuere. Amet, faucibus sed luctus in eget nulla enim. Vulputate turpis tristique et
                      pharetra. Phasellus dictumst semper viverra felis....... </p>
                    <div class="d-flex justify-content-end">
                      <span class="date">September 05, 2021</span>
                    </div>
                    <div class="right-click">
                      <img src="assets/images/icon/click.png" alt="Icon" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="archives-wizerd">
                    <h6 class="archives-wizerd-title">Birthday wish</h6>
                    <span class="archives-wizerd-subtitle">Prepration</span>
                    <form action="#" class="selection-area archives-wizerd-selection" >
                      <div class="selection-area-field">
                        <input type="checkbox" id="one" />
                        <label for="one">Cake</label>
                      </div>
                      <div class="selection-area-field">
                        <input type="checkbox" id="two" />
                        <label for="two">Decoration</label>
                      </div>
                      <div class="selection-area-field">
                        <input type="checkbox" id="three" />
                        <label for="three">Sweets</label>
                      </div>
                      <div class="selection-area-field">
                        <input type="checkbox" id="four" />
                        <label for="four">Gifts</label>
                      </div>
                      <div class="d-flex align-items-center selection-area-btns">
                        <button type="button" class="btn border-button me-2">Reminder</button>
                        <button type="button" class="btn border-button">Birthday</button>
                      </div>
                    </form>
                    <div class="d-flex justify-content-end">
                      <span class="date">September 05, 2021</span>
                    </div>
                    <div class="right-click">
                      <img src="assets/images/icon/click.png" alt="Icon" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="null-wizerd">
                    <div class="null-wizerd-date">
                      <span>july 12, 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="row">
                <div class="col-lg-6">
                  <div class="archives-wizerd">
                    <h6 class="archives-wizerd-title">Vacation</h6>
                    <div class="archives-wizerd-images">
                      <img src="assets/images/card/01.png" alt="Card Image" class="img-fluid d-block" />
                      <img src="assets/images/card/02.png" alt="Card Image" class="img-fluid d-block" />
                    </div>
                    <div class="d-flex justify-content-end">
                      <span class="date">September 05, 2021</span>
                    </div>
                  </div>
                  <div class="archives-wizerd">
                    <h6 class="archives-wizerd-title">Random image</h6>
                    <div class="archives-wizerd-images">
                      <img src="assets/images/card/01.png" alt="Card Image" class="img-fluid d-block" />
                      <img src="assets/images/card/02.png" alt="Card Image" class="img-fluid d-block" />
                    </div>
                    <div class="d-flex justify-content-end">
                      <span class="date">September 05, 2021</span>
                    </div>
                    <div class="right-click">
                      <img src="assets/images/icon/click.png" alt="Icon" class="img-fluid" />
         /Users/codesoftic/Downloads/notesyeti/src/components/Clicking/ClickingComponent.js           </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="null-wizerd null-wizerd-sm">
                    <div class="null-wizerd-date">
                      <span>july 12, 2021</span>
                    </div>
                  </div>
                  <div class="null-wizerd null-wizerd-sm">
                    <div class="null-wizerd-date">
                      <span>july 12, 2021</span>
                    </div>
                  </div>
                  <div class="null-wizerd null-wizerd-sm">
                    <div class="null-wizerd-date">
                      <span>july 12, 2021</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center justify-content-lg-end">
                    <button type="button" class="btn archives-btn me-3">
                      <img src="assets/images/icon/archives.svg" alt="Icon" class="img-fluid" />
                      <div class="tooltip-text">
                        <span>Archive</span>
                      </div>
                    </button>
                    <button type="button" class="btn trash-btn">
                      <img src="assets/images/icon/trash-03.svg" alt="Icon" class="img-fluid" />
                      <div class="tooltip-text">
                        <span>Delete</span>
                      </div>
                    </button>
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
    )
}

export default ClickingComponent
