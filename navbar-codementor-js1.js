
let menuList = document.querySelector('.menuList');

    menuList.style.maxHeight = '0px';

function toggleMenu(){
    console.log('clicked bar')
    if(menuList.style.maxHeight =='0px'){
        menuList.style.maxHeight = '300px';
    }
    else{
        menuList.style.maxHeight = '0px';
    }
}