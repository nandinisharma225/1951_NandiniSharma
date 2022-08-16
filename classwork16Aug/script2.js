window.onload = function () {
  document.getElementById("p1").innerHTML = localStorage.getItem("name");
  document.getElementById("p2").innerHTML = localStorage.getItem("num");
};
