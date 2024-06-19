function navabr() {
    const togglebtn = document.querySelector('.toggle_btn');
    const togglebtnicon = document.querySelector('.toggle_btn i');
    const dropdownmenu = document.querySelector('.dropdown_menu');
    togglebtn.onclick = function(){
        dropdownmenu.classList.toggle('open')
        const isopen = dropdownmenu.classList.contains('open')

        togglebtnicon.classList = isopen 
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars' 
    }
}
navabr();


// try link active
let linkactive = document.querySelector('.link')
linkactive.onclick = function(){
    linkactive.classList.add('linkactive')
    linkactive.classList.remove('link')
}

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnails');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');


thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
//let runNextAuto = setTimeout(() => {
//    next.click();
//}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnails .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        linkactive.classList.add('linkactive')
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    /*clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)*/
}