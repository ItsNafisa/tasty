let ham=document.getElementById('ham');
let headnav=document.getElementById('headnav');
let myul=document.getElementById('myul');
ham.onclick=function(){
    headnav.classList.toggle('myheig');
    myul.classList.toggle('show');
}
//about section
let servicesection=document.querySelector('.service .container .main-head');
let imgone=document.querySelector('.service .container .one .imgs img');
let imgtwo=document.querySelector('.service .container .two .imgs img');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= (servicesection.offsetTop-300)){
        console.log('reach');
        imgone.classList.add('anime');
        imgtwo.classList.add('anime2');
    }
})