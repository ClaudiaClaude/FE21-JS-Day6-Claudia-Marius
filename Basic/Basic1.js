
let JSONsandwich = JSON.parse (sandwiches)
console.log(JSONsandwich)


let JSONfries = JSON.parse(fries)
console.log(JSONfries)


document.getElementById('result').innerHTML = "My favorite sandwich is a " + JSONsandwich.sandwich + " which has approximitely " + JSONsandwich.calories + " calories, along with it I enjoy eating " + JSONfries.fries_size + " which have about " + JSONfries.calories + " calories";