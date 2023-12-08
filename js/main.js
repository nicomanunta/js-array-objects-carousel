const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

// MILESTONE 1 cliccando sui pulsanti va avanti o indietro. All'ultima immagine ed alla prima non va più avanti

let immagineDisplay = ""

images.forEach(element => {
    immagineDisplay += `<div id="item" class="item">
                        <img src="./${element.image}" alt="">
                        <div class="position-absolute bottom-50 text-right color-white padding-text">
                            <h2 id="title">${element.title}</h2>
                            <h5 id="text">${element.text}</h5>
                        </div>
                    </div> ` 
    
  
});
document.querySelector(".images").innerHTML = immagineDisplay

let activeElement = 0
let immagineVisualizzata = document.getElementsByClassName("item");
immagineVisualizzata[activeElement].classList.add("active")


document.querySelector(".next").addEventListener("click", function(){

    immagineVisualizzata[activeElement].classList.remove("active")
    activeElement ++
    immagineVisualizzata[activeElement].classList.add("active")


});
document.querySelector(".prev").addEventListener("click", function(){
    immagineVisualizzata[activeElement].classList.remove("active")
    activeElement --
    immagineVisualizzata[activeElement].classList.add("active")
});








// let item = document.getElementById("item")
// document.querySelector(".next").addEventListener("click", function(){
//     for(let i = 0; i<images.length; i++){
//         document.querySelector(".item").innerHTML = ""
//         console.log(images)
//         document.querySelector(".item").innerHTML = `<img src="./${images[i].image}" alt=""></img>`

//         let div = document.createElement("div")
//         div.classList.add("position-absolute", "bottom-50", "text-right", "color-white", "padding-text")

//         let titolo = `<h2 id="title">${images[i].title}</h2>` 
//         let text = `<h5 id="text">${images[i].text}</h5>` 

//         div.innerHTML = titolo + text
        
//         item.appendChild(div)

//     }
// })


