// Your code goes here

//funbus title (wheel)
const headingLogo = document.querySelector(".logo-heading")
headingLogo.addEventListener('wheel', ()=>{
    headingLogo.style.fontSize='100px';
});

//nav bar
const navBar = document.querySelectorAll('.nav-link');
navBar.forEach((element) => {
    element.addEventListener('mouseover', ()=> {
        element.style.color = 'red';
    });

    element.addEventListener('mouseout', () => {
        element.style.fontSize = "40px";
    });
});
//stop link
const stopLink = document.querySelectorAll('.nav-link');
stopLink.forEach((element) =>{
    element.addEventListener('click', (event)=>{
    event.preventDefault();
    })
})

//fun-bus picture (dblclick)
const funBus = document.querySelector('.fun-bus')
funBus.addEventListener("dblclick", ()=>{
    funBus.src="img/funny-bus.jpg";
});

//mapImg edits (mouseenter/mouseleave)
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
//wheel
// mapImg.addEventListener('wheel', ()=>{
//     mapImg.style.scale(2,2);
// });

//let's go paragraphs (drag and drop)
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
//for focus
const desBtn = document.querySelector('.des-btn');
console.log(desBtn);
desBtn.addEventListener('focus',() => {
    desBtn.style.backgroundColor ='yellow';
});

//for keydown
document.getElementById('demo').addEventListener('keydown', myFunction);
function myFunction(){
    document.getElementById('demo').style.backgroundColor = 'blue'
};

//all h2 titles (click)
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
//keydown
document.addEventListener('keydown', (event)=>{
    if (event.key === 'd'){
        document.body.style ='color:yellow';
    }
    if(event.key === 'l'){
        document.body.style ='color: red';
    }
});

//scroll
window.addEventListener('scroll', ()=>{
    body.style.backgroundColor='hotpink'
});

//stop propagation
const endContent1 = document.querySelector('.content-pick');
endContent1.addEventListener('click', ()=>{
    endContent1.style.backgroundColor='green';
});

const endContent2 = document.querySelector('.destination');
endContent2.addEventListener('click', ()=>{
    endContent2.style.backgroundColor='purple';
    event.stopPropagation();
});

const endContent3 = document.querySelector('.btn');
endContent3.addEventListener('click', ()=>{
    endContent3.style.backgroundColor='orange';
})

