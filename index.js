const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeList = document.querySelector(".list-item.active");
const icon = document.getElementById(".list-item-icon");

dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeList = "list-item active";
});


night.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  activeList = "list-item active night";
});
light.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  activeList = "list-item active light";
});
