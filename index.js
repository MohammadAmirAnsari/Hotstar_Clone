let movies = [
    {
        image: "Images/slider 1.png",
        name: 'falcon and winter soldier',
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum repudiandae iste?"
        
    },
    {
        name: "loki",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum repudiandae iste?",
        image: "Images/slider 2.png"
    },
    {
        name: "wanda vision",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum repudiandae iste?",
        image: "Images/slider 3.png"
    },
    {
        name: "raya and the dragon",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum repudiandae iste?",
        image: "Images/slider 4.png"
    },
    {
        name: "luca",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cum repudiandae iste?",
        image: "Images/slider 5.png"
    }
];

const crousel=document.querySelector('.crousel');
let sliders=[];

let slideIndex=0; //track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM Elements
    let slide= document.createElement('div');
    var imgElement= document.createElement('img');
    let content= document.createElement('div');
    let h1= document.createElement('h1');
    let p= document.createElement('p');

    //attaching all the Elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    slide.appendChild(content);
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    crousel.appendChild(slide);

    //setting up the images
    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames

    slide.className= 'slider';
    content.className= 'slide-content';
    h1.className= 'movie-title';
    p.className= 'movie-des';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 *  (sliders.length -2)}% - ${30 * (sliders.length - 2)}px)`;
    }  
 }
 
 for(let i=0;i<3;i++){
    createSlide();
 }
 setInterval(()=>{
    createSlide();

 },3000);

//video cards
const videoCards = [...document.querySelectorAll('.video-card')]
videoCards.forEach((item) =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preButton = [...document.querySelectorAll('.pre-button')];
let nxtButton = [...document.querySelectorAll('.nxt-button')];

cardContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtButton[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })
    preButton[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})