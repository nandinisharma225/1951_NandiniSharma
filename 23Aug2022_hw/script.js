var employees = [];

function myfunc() {
  let nameinp = document.getElementById("myinp").value;

  employees.push({ name: "George", age: 32, retiredate: "March 12, 2014" });
  employees.push({ name: "Edward", age: 17, retiredate: "June 2, 2023" });
  employees.push({
    name: "Christine",
    age: 58,
    retiredate: "December 20, 2036",
  });
  employees.push({ name: "Sarah", age: 62, retiredate: "April 30, 2020" });

  employees.sort(function (a, b) {
    return a.age - b.age;
  });

  let flag = false;

  // console.log(nameinp);
  try {
    for (let i = 0; i < 4; i++) {
      if (employees[i].age == nameinp) {
        console.log(
          employees[i].name +
            " " +
            employees[i].age +
            " " +
            employees[i].retiredate
        );
        flag = true;
      }
    }
    if (flag == false) {
      throw "Record not found";
    }
  } catch (err) {
    console.log(err);
  }
}
