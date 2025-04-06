let menu = document.querySelector(".menu-btn");

menu.addEventListener("click", (e) => {
 if(e.target == menu.querySelector("i"))
  menu.classList.toggle("active");
});

// let tl = gsap.timeline();

tl.from("nav .logo", {
  y: 50,
  duration: 1,
  opacity: 0,
});

tl.from("nav .nav-links li", {
  y: 30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from(
  ".banner .banner-content",
  {
    y: 50,
    duration: 0.35,
    opacity: 0,
  },
  "same"
);

tl.from(
  ".banner .banner-img",
  {
    y: 50,
    duration: 0.7,
    opacity: 0,
  },
  "same"
);
