// let a = 0;
// a += 1;
// try {
//   alert("Hi");
// } catch (err) {
//   document.write(err.message);
// }
// a += 1;
// document.write(a);

function myfunc() {
  let a = document.getElementById("myinp").value;
  try {
    function hh() {
      if (!isNaN(a)) {
        a = Number(a);
        if (a < 18) {
          throw "Its too low";
        }
        if (a > 60) {
          throw "Its too high";
        }
      } else {
        throw "Its not a number";
      }
    }
    hh();
  } catch (err) {
    console.log(err);
  }
}
