const hamBtn = document.querySelector(".ham-btn"),
  closeBtn = document.querySelector(".close-btn"),
  nav = document.querySelector("nav"),
  body = document.querySelector("body"),
  navLinks = document.querySelectorAll("header nav a"),
  ul = document.querySelector("header nav ul");

window.addEventListener("resize", () => {
  if (window.innerWidth > 635) {
    hamBtn.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    closeBtn.style.display = "none";
    hamBtn.style.display = "block";
    nav.classList.remove("open");
  }
});

hamBtn.addEventListener("click", () => {
  hamBtn.style.display = "none";
  closeBtn.style.display = "block";
  nav.classList.add("open");
  body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  hamBtn.style.display = "block";
  nav.classList.remove("open");
  body.classList.remove("no-scroll");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 636) {
      closeBtn.style.display = "none";
      hamBtn.style.display = "block";
    }
    nav.classList.remove("open");
    body.classList.remove("no-scroll");
    let url = item.getAttribute("href");
    window.history.replaceState(null, null, url);
  });
});

nav.onclick = function (e) {
  if (e.target !== ul && nav.className == "open" && window.innerWidth < 636) {
    closeBtn.style.display = "none";
    hamBtn.style.display = "block";
    nav.classList.remove("open");
    body.classList.remove("no-scroll");
  }
};
