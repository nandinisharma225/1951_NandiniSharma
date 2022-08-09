function myfunc() {
  var num = document.getElementById("inp1").value;
  if (num.length != 5) {
    alert("Enter a 5 digit number");
  } else {
    var size = 0;

    var bor_rad;
    for (let i = 0; i < num.length; i++) {
      size = size + parseInt(num[i]);
    }
    // console.log(size);

    bor_rad = size / 5;

    document.getElementById("mydiv").style.width = size + "px";
    document.getElementById("mydiv").style.height = size + "px";
    document.getElementById("mydiv").style.borderRadius = bor_rad + "px";

    // var finalNum = parseInt(num);
    var ele = document.getElementById("maindiv");
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
    var myele;

    for (let i = 0; i < size * 5; i++) {
      myele = document.createElement("div");
      // myele.className = "box";
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      myele.style.height = size + "px";
      myele.style.width = size + "px";
      myele.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      // myele.classList.add("animated");
      // myele.style.animationDuration = Math.floor(Math.random() * 13) + "s";
      myele.style.animation =
        Math.floor(Math.random() * 1) +
        " zoomin infinite alternate ease-in-out";
      document.getElementById("maindiv").appendChild(myele);
    }
  }
  ele.style.width = toString(size * 5) + "px";
  ele.style.height = toString(size * 5) + "px";
}
