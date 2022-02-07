const openNav = () => document.getElementById("sidebar").style.width = "250px";

const closeNav = () => document.getElementById("sidebar").style.width = "0";

const toastToggle = (id) => {
  var toast = document.getElementById(id);
  if (toast.style.display === "none") {
    toast.style.display = "flex";
    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
  } else {
    toast.style.display = "none";
  }
};
