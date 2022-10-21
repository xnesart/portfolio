// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
(function () {
  const header = document.querySelector(".top-header__inner");
  const back = document.querySelector(".top-back");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
      back.classList.remove("top-back__hidden");
    } else {
      header.classList.remove("header_active");
      back.classList.add("top-back__hidden");
    }
  };
})();
