// Handle the Responsive Nav
function respondNav() {
    let x = document.getElementsByTagName("nav");
    if (x[0].className === "topBar") {
      x[0].className += " responsive";
    } else {
      x[0].className = "topBar";
    }
  }


const cards = document.getElementsByClassName("card");

const about = document.getElementById("about");
const aboutText = about.getElementsByTagName("div")
const projects = document.getElementById("projects");
const projectTitle = projects.getElementsByTagName("h2")
const solving = document.getElementById("solving");
const solvingTitle = solving.getElementsByTagName("h2")
const solvingImg = solving.getElementsByTagName("img")
const creating = document.getElementById("creating");
const creatingTitle = creating.getElementsByTagName("h2")
const creatingImg = creating.getElementsByTagName("img")
const learning = document.getElementById("learning");
const learningCards = learning.getElementsByClassName("card");

for(let i=0; i < cards.length; i++){
    cards[i].addEventListener('mouseover', function (){
        let image = cards[i].getElementsByTagName("img")
        image[0].style.width = "110%";
    })
}

for(let i=0; i < cards.length; i++){
    cards[i].addEventListener('mouseout', function (){
        let image = cards[i].getElementsByTagName("img")
        image[0].style.width = "100%";
    })
}


window.addEventListener('scroll', (event) => {
    const aboutPosition = about.getBoundingClientRect();
    const projectPosition = projects.getBoundingClientRect();
    const solvingPosition = solving.getBoundingClientRect();
    const creatingPosition = creating.getBoundingClientRect();
    const learningPosition = learning.getBoundingClientRect();

    if(aboutPosition.top < (window.innerHeight-250) && aboutPosition.top > -150){
        aboutText[0].style.transform = 'scale(1.1)';
    } else {
        aboutText[0].style.transform = 'scale(1)';
    }

    if(projectPosition.top < (window.innerHeight-250) && projectPosition.top > -50){
        projectTitle[0].style.transform = 'scale(1.2)';
    } else {
        projectTitle[0].style.transform = 'scale(1)';
    }

    if(solvingPosition.top < (window.innerHeight-350) && solvingPosition.bottom > 200){
        solvingTitle[0].style.left = '0%';
        solvingImg[0].style.right = '0%';
    } else {
        solvingTitle[0].style.left = '-100%';
        solvingImg[0].style.right = '-100%';
    }

    if(creatingPosition.top < (window.innerHeight-450) && creatingPosition.bottom > 200){
        creatingImg[0].style.left = '0%';
        creatingImg[0].style.transform = 'scale(1)'
        creatingTitle[0].style.letterSpacing = 'normal'
    } else {
        creatingImg[0].style.left = '-100%';
        creatingImg[0].style.transform = 'scale(0)'
        creatingTitle[0].style.letterSpacing = '40px'
    }

    if(learningPosition.top < (window.innerHeight-650) && learningPosition.bottom>200){
        for(let i=0; i < learningCards.length; i++){
            learningCards[i].style.transform = ('rotatey(0deg)')
        }
    } else {
        for(let i=0; i < learningCards.length; i++){
            learningCards[i].style.transform = ('rotatey(90deg)')
        }
    }
})