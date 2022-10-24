const primaryHeader = document.querySelector(".primary-header");
const navTogle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navTogle.addEventListener('click', ()=>{
  primaryNav.hasAttribute("data-visible")
  ? navTogle.setAttribute('aria-expanded', false) 
  :navTogle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
})

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    }
  }
});
