import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <div class="bg-dark">
        <div class="bg-primary map-img"></div>
        <div class="container py-5 text-center text-white">
          <h3>
            <strong>
              <i class="fa-solid fa-chevron-up"></i>
            </strong>
          </h3>
          <br />
          <br />
          <p class="m-0">
            Custom Bootstrap Theme based on
            https://www.w3schools.com/bootstrap/trybs_theme_band_full.htm
          </p>
        </div>
      </div>
    );
  }
}
