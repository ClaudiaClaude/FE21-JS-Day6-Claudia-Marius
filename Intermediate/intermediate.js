var myEmployees = JSON.parse(employee);
console.log(myEmployees[1].fName);

for (let val of myEmployees) {
    document.getElementById("result").innerHTML += `<tr>
    <td>${val.Id}</td>
    <td>${val.fName}</td>
    <td>${val.lName}</td>
    <td>${val.email}</td>
    <td>${val.job}</td>
    <td>${val.sal}</td>
  </tr>`

}