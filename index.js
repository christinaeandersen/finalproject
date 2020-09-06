$(document).ready(function () {
  // $(".navBar-sticky").hide(); //Hide the navigation bar first

  $(".scroll-circle").click(function () {
    $(window).scrollTo($(".second-chance-container"), 1300, { offset: 0 });
  });

  $("#menu-icon").click(function () {
    $(".menu-mobile").removeClass("hide");
  });

  $("#close-menu").click(function () {
    $(".menu-mobile").addClass("hide");
  });

  fetch("https://www.hindbaerbrus.com/wp-json/wp/v2/wair")
    .then((res) => res.json())
    .then((jsonRes) => {
      jsonRes.forEach((element, index) => {
        if (index == 0) {
          $(".workshop-section").append(
            `
          <div class="workshop-container">
            <div class="workshop-info">
              <h4>` +
              element.acf.title +
              `</h4>
              <p>` +
              element.acf.date +
              `</p>
              <button class="button">REGISTER</button>
            </div>
            <div class="workshop-img-container">
              <img
                src=` +
              element.acf.image.url +
              `
              />
            </div>
          </div>
          `
          );
        } else if (index == 1) {
          $(".workshop-section").append(
            `<div class="workshop-container">
            <div class="workshop-img-container second">
              <img
                src=` +
              element.acf.image.url +
              `
              />
            </div>
            <div class="workshop-info second">
              <h3>BE AWAIR.</h3>
              <h4>` +
              element.acf.title +
              `</h4>
              <p>` +
              element.acf.date +
              `</p>
              <button class="button">REGISTER</button>
            </div>
          </div>`
          );
        }
      });
    });
});
