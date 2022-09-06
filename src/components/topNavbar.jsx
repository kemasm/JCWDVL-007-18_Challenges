import React from "react";

export class TopNavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <a class="navbar-brand" href="#">
          LOGO
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                HOME
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                BAND
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                TOUR
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                CONTACT
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                MORE
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Merchandise
                </a>
                <a class="dropdown-item" href="#">
                  Extras
                </a>
                <a class="dropdown-item" href="#">
                  Media
                </a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link gl" href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
