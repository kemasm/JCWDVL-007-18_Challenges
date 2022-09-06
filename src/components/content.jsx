import React from "react";

export class Carousel extends React.Component {
  render() {
    return (
      <div id="main-carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#main-carousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#main-carousel" data-slide-to="1"></li>
          <li data-target="#main-carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.w3schools.com/bootstrap/ny.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>New York</h5>
              <p>The atmosphere in New York is lorem ipsum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.w3schools.com/bootstrap/chicago.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Chicago</h5>
              <p>Thank you, Chicago - A night we won't forget.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.w3schools.com/bootstrap/la.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>L A</h5>
              <p>
                Even though the traffic was a mess, we had the best time playing
                at Venice Beach!
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#main-carousel"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#main-carousel"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <div class="bg-white">
        <div class="container p-5">
          <div class="section-header">
            <h1>THE BAND</h1>
            <h6>We love music!</h6>
            <p>
              We have created a fictional band website. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div class="row">
            <div class="col d-flex flex-column align-items-center mt-3 mb-5">
              <h6 class="mb-5">
                <strong>Name</strong>
              </h6>
              <div class="rounded-circle bg-primary band-member"></div>
            </div>

            <div class="col d-flex flex-column align-items-center mt-3 mb-5">
              <h6 class="mb-5">
                <strong>Name</strong>
              </h6>
              <div class="rounded-circle bg-primary band-member"></div>
            </div>

            <div class="col d-flex flex-column align-items-center mt-3 mb-5">
              <h6 class="mb-5">
                <strong>Name</strong>
              </h6>
              <div class="rounded-circle bg-primary band-member"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class TourDates extends React.Component {
  render() {
    return (
      <div class="bg-dark">
        <div class="container p-5">
          <div class="section-header text-light">
            <h1 class="text-light">TOUR DATES</h1>
            <h6>
              Lorem ipsum we'll play you some music.
              <br />
              Remember to book your tickets!
            </h6>
          </div>

          <ul class="list-group mt-5 mb-3 px-4 rounded-0">
            <li class="list-group-item d-flex justify-content-start align-items-center">
              September
              <span class="badge badge-danger">Sold out!</span>
            </li>
            <li class="list-group-item d-flex justify-content-start align-items-center">
              October
              <span class="badge badge-danger">Sold out!</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              November
              <span class="badge badge-secondary badge-pill">4</span>
            </li>
          </ul>

          <div class="row mb-5">
            <div class="col-12 col-md-4 mb-2">
              <div class="card rounded-0 border-0 mx-auto tour-card">
                <img
                  src="https://www.w3schools.com/bootstrap/paris.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-title">Paris</p>
                  <p class="card-text">Friday 27 November 2015</p>
                  <a href="#" class="btn btn-dark rounded-0 px-4 py-3 tour-cta">
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-2">
              <div class="card rounded-0 border-0 mx-auto tour-card">
                <img
                  src="https://www.w3schools.com/bootstrap/newyork.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-title">New York</p>
                  <p class="card-text">Friday 28 November 2015</p>
                  <a href="#" class="btn btn-dark rounded-0 px-4 py-3 tour-cta">
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4 mb-2">
              <div class="card rounded-0 border-0 mx-auto tour-card">
                <img
                  src="https://www.w3schools.com/bootstrap/sanfran.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-title">San Fransisco</p>
                  <p class="card-text">Friday 29 November 2015</p>
                  <a href="#" class="btn btn-dark rounded-0 px-4 py-3 tour-cta">
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Contact extends React.Component {
  render() {
    return (
      <div class="bg-white">
        <div class="container p-5">
          <div class="section-header">
            <h1>Contact</h1>
            <h6>We love out fans!</h6>
          </div>

          <div class="row">
            <div class="col-12 col-md-4">
              <ul class="list-group border-0">
                <li class="list-group-item border-0 p-0">Fan? Drop a note.</li>
                <li class="list-group-item border-0 p-0">
                  <i class="fa-solid fa-location-dot"></i> Chicago, US
                </li>
                <li class="list-group-item border-0 p-0">
                  <i class="fa-solid fa-mobile-screen-button"></i> Phone: +00
                  1515151515
                </li>
                <li class="list-group-item border-0 p-0">
                  <i class="fa-sharp fa-solid fa-envelope"></i> Email:
                  mail@mail.com
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-8">
              <div class="form-group form-row">
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Comment"
                ></textarea>
              </div>

              <div class="form-group d-flex justify-content-end">
                <button type="submit" class="btn btn-dark mb-2">
                  Confirm identity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class Blog extends React.Component {
  render() {
    return (
      <div class="bg-white">
        <div class="container p-5">
          <div class="section-header">
            <h1>From the Blog</h1>
          </div>

          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                data-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Mike
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                data-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Chandler
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                data-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Peter
              </button>
            </div>
          </nav>

          <div class="tab-content mt-3" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <h2>Mike Ross, Manager</h2>
              <p>
                Man, we've been on the road for some time now. Looking forward
                to lorem ipsum.
              </p>
            </div>

            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <h2>Chandler Bing, Guitarist</h2>
              <p>
                Always a pleasure people! Hope you enjoyed it as much as I did.
                Could I BE.. any more pleased?
              </p>
            </div>

            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <h2>Peter Griffin, Bass player</h2>
              <p>
                I mean, sometimes I enjoy the show, but other times I enjoy
                other things.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
