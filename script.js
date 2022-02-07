function openNav() {
  document.getElementById("sidebar").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}

function toastToggle(id) {
  var toast = document.getElementById(id);
  if (toast.style.display === "none") {
    toast.style.display = "flex";
    setTimeout(() => {
      toast.style.display = "none";
    }, 5000);
  } else {
    toast.style.display = "none";
  }
}
