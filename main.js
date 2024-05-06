// modification for dark-mode
const darkMode = document.querySelector(".darkMode");
const lightMode = document.querySelector(".lightMode");
const modeSwitcher = document.querySelector(".header .modeSwitch");

// adding animation for dark mode
darkMode.style.display = "none";
document.body.style.transition = "0.4s";

// preforming the function on click for dark-mode
modeSwitcher.onclick = () => {
  if (document.body.classList.contains("sun-theme")) {
    document.body.classList.remove("sun-theme");
    darkMode.style.display = "none";
    lightMode.style.display = "block";
  } else {
    document.body.classList.add("sun-theme");
    darkMode.style.display = "block";
    lightMode.style.display = "none";
  }
};

// animating components in page

//create animated left and right on page load
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const isIntersecting = entry.isIntersecting;
//     const target = entry.target;
//     if (isIntersecting) {
//       target.classList.add("left");
//     } else {
//       target.classList.remove("left");
//     }
//   });
// });

// const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
// hiddenElementsLeft.forEach((el) => observer.observe(el));
// animation from left
const observer_for_left = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("left", entry.isIntersecting);
      // if (entry.isIntersecting) observer_for_left.unobserve(entry.target);
    });
  },
  { threshold: 1 }
);
const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
hiddenElementsLeft.forEach((el) => observer_for_left.observe(el));

// animation from right
const observer_for_right = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("right", entry.isIntersecting);
      // if (entry.isIntersecting) observer_for_right.unobserve(entry.target);
    });
  },
  { threshold: 1 }
);

const hiddenElementsRight = document.querySelectorAll(".hidden-right");
hiddenElementsRight.forEach((el) => observer_for_right.observe(el));

//menu button functionalities
let menuBtn = document.querySelector("header .menuBtn");
let navBar = document.querySelector(".header .nav .links");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
//faq show / hide
const faqBtn = document.querySelectorAll(".faqs .faq-box");
const ans = document.querySelectorAll(".faqs .faq-box .faq-body");
const more = document.querySelectorAll(".faqs .faq-box .ques .more");
const quit = document.querySelectorAll(".faqs .faq-box .ques .quit");
faqBtn.forEach((el, i) => {
  el.onclick = () => {
    ans[i].classList.toggle("show");
    quit[i].classList.toggle("show");
    more[i].classList.toggle("remove");
  };
});
