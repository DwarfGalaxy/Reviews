//Array to store object
let review=[
    {
        image:"image/team1.jpg",
        name:"Yubraj Koirala",
        paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image:"image/team2.jpg",
        name:"Ram Khadka",
        paragraph:"I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen."
    },
    {
        image:"image/team3.jpg",
        name:"Kopila Koirala",
        paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image:"image/team4.jpg",
        name:"Kanchan Koirala",
        paragraph:"I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen."
    },
    {
        image:"image/team5.jpg",
        name:"Mukesh Koirala",
        paragraph:"Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        image:"image/team6.jpg",
        name:"Sijavi Koirala",
        paragraph:"I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen."
    }
];

// console.log(review[0].name);

let newImage=document.getElementById("newImage");
let newName=document.getElementById("newName");
let newParagraph=document.getElementById("newParagraph");

let nextBtn=document.getElementById("nextBtn");
let prevBtn=document.getElementById("prevBtn");

let counter=0;

function display(){
    let card=review[counter];
    newImage.src=card.image;
    newName.innerText=card.name;
    newParagraph.innerText=card.paragraph;
}

// when windows is loaded or opened for the first time
window.addEventListener("DOMContentLoaded",function(){
    display();
});

// when next button is triggered
nextBtn.onclick=()=>{
    counter++;
    if(counter>review.length-1){
        counter=0;
    }
    display();
}

// when Previous button is triggered
prevBtn.onclick=()=>{
    counter--;
    if(counter<0){
        counter=review.length-1;
    }
    display();
}

