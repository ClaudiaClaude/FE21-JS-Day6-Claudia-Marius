let books = JSON.parse(booklist);



for (let i = 0; i < books.length; i++) {
   document.getElementById("output").innerHTML += `
     <img src = "${books[i].Image}">
     <p>${books[i].Title}</p>
     <p>${books[i].Author}</p>
     <p>${books[i].Read}</p>

`
    colorChange(i);

}


function colorChange(i) {    
if (books[i].Read == false) {
    document.getElementById("output").style.color = "red"

    
} else {
    document.getElementById("output").style.color = "green"


}

}

