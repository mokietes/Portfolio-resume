(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  document.querySelector(function () {
    var btn = document.querySelector(".btn1");

    btn.addEventListener("click", function () {
      document.querySelector(this).classList.add("btn-progress");
      setTimeout(function () {
        btn.classList.add("btn-fill");
      }, 500);

      setTimeout(function () {
        btn.classList.remove("btn-fill");
      }, 4100);

      setTimeout(function () {
        btn.classList.add("btn-complete");
      }, 4100);
    });
  });
})();
