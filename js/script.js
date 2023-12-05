// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika fitur menu di klik
document.querySelector("#fitur-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const fitur = document.querySelector("#fitur-menu");

document.addEventListener("click", function (e) {
  if (!fitur.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function showTask(task) {
  var taskDisplay = document.getElementById("task-display");
  taskDisplay.innerHTML = "Anda memiliki tugas: " + task;
  taskDisplay.style.display = "block";
}

function toggleTugas(tugasType) {
  var tugasElement = document.getElementById(tugasType);
  var pertemuanElement = document.getElementById(
    "pertemuan" + tugasType.charAt(tugasType.length - 1)
  );

  tugasElement.style.display =
    tugasElement.style.display === "block" ? "none" : "block";
  pertemuanElement.style.display = "block";
}
