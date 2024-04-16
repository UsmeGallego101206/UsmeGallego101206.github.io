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