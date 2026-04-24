
function login(){

let email=
document.getElementById("email").value;

let password=
document.getElementById("password").value;

if(email==="admin" && password==="1234"){

document.getElementById("loginPage").style.display="none";

document.getElementById("app").style.display="block";

}
else{
alert("Invalid Login");
}

}



function logout(){

document.getElementById("app").style.display="none";

document.getElementById("loginPage").style.display="flex";

document.getElementById("email").value="";
document.getElementById("password").value="";

closeTrailer();

}



/* TRAILER */

function openTrailer(videoID){

document.getElementById("trailerModal").style.display="flex";

document.getElementById("trailer").src=
"https://www.youtube.com/embed/"+videoID+"?autoplay=1";

}


function closeTrailer(){

document.getElementById("trailerModal").style.display="none";

document.getElementById("trailer").src="";

}



/* SEARCH */

function searchMovies(){

let input=
document.getElementById("searchBar")
.value
.toLowerCase();

let cards=
document.querySelectorAll(".card");


cards.forEach(function(card){

let title=
card.dataset.title.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}



/* close modal if outside clicked */

window.onclick=function(event){

let modal=
document.getElementById("trailerModal");

if(event.target==modal){
closeTrailer();
}

}
