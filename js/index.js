// Your code goes here

//funbus title
const headingLogo = document.querySelector(".logo-heading")
headingLogo.addEventListener('wheel', ()=>{
    headingLogo.style.fontSize='100px';
});

//nav bar



//fun-bus picture
const funBus = document.querySelector('.fun-bus')
funBus.addEventListener("dblclick", ()=>{
    funBus.src="img/funny-bus.jpg";
});

//mapImg edits
const mapImg = document.querySelector(".map-img")
mapImg.addEventListener("mouseenter", ()=> {
    mapImg.style.transform = "scale(1.1,1.1)";
    mapImg.style.transition = 'transform 0.5s';
});
mapImg.addEventListener("mouseleave", ()=>{
    mapImg.style.transform ="scale(1)"
});
window.addEventListener('resize', () => {
    mapImg.src ='img/top-of-world.jpg';
});

mapImg.addEventListener('wheel', ()=>{
    mapImg.style.scale(2,2);
});

//let's go paragraphs
document.addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData('Text', event.target.id);
});
document.addEventListener('drag', (event)=>{
    document.getElementById('demo').innerHTML ="the p element is being dragged";
});
document.addEventListener('dragover', (event)=>{
    event.preventDefault();
});
document.addEventListener('drop', (event)=>{
    event.preventDefault();
    if(event.target.className == 'text-content'){
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById('demo').innerHTML='the p element was dropped';
    }
});

//all h2 titles
document.querySelectorAll('h2').forEach(el =>{
    el.addEventListener('click', ()=>{
        el.style.color ='blue';
    });
});

// all p's
// document.querySelectorAll('select', ()=>{

// });

//body of webpage
const body = document.querySelector('body');
body.addEventListener('click', () =>{
    body.style.backgroundColor ='mistyrose'
});


