// Side Nav bar

const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");

openNav.addEventListener("click", () => (document.querySelector("#sidebar").style.width = "15.5rem"));

closeNav.addEventListener("click", () => (document.querySelector("#sidebar").style.width = "0"));

// Toast

const toastToggle = document.querySelector("#toast-toggle");
const toast = document.querySelector("#toast");
const toastCloseBtn = document.querySelector("#toast-close-btn");

toastToggle.addEventListener("click", () => {
  toast.style.display = "flex";
  setTimeout(() => {
    toast.style.display = "none";
  }, 5000);
});

toastCloseBtn.addEventListener("click", () => (toast.style.display = "none"));

// Modal

const modalToggle = document.querySelector("#modal-toggle");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");

modalToggle.addEventListener("click", () => (modal.style.display = "block"));

modalCloseBtn.addEventListener("click", () => (modal.style.display = "none"));
