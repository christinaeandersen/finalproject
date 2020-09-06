$(document).ready(function () {
  setTimeout(() => {
    $("#loading").addClass("hide");
    $(".workshops-container").removeClass("hide");
  }, 1700);

  $(".scroll-circle").click(function () {
    $(window).scrollTo($(".workshop-container"), 1300, { offset: -90 });
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
        console.log(index);
        console.log(element);
        if (index % 2 == 0) {
          console.log("par");
          $(".workshops-container").append(
            `<div class="workshop-container">
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
          </div>`
          );
        } else {
          console.log("impar");
          $(".workshops-container").append(
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
