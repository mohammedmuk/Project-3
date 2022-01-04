
//  Start List Menu Function

let menuIcon = document.querySelector('.landing-page .menu-icon'),
    listMenu = document.querySelector('.landing-page .list-menu'),
    close = document.querySelector('.landing-page .close'),
    header = document.querySelector('.landing-page header'),
    pageLogo = document.querySelector('.landing-page .logo ');

menuIcon.onclick = function(){
    listMenu.classList.add('active');
    header.style.marginTop = 0;
    menuIcon.style.display = 'none';
    pageLogo.style.display = 'none';
}
close.onclick = function(){
    listMenu.classList.remove('active');
    header.style.marginTop = '30px';
    menuIcon.style.display = 'block';
    pageLogo.style.display = 'block';
}

window.onresize = function(){
    if(window.innerWidth >= 768){
        menuIcon.style.display = 'none'
    }else{
        menuIcon.style.display = 'block'
    }
}

// End List Menu Function

// Start Featrues Function

let listFeatrues = document.querySelectorAll('.tabs ul li'),

    listOne = document.querySelector('.tabs ul li:first-of-type'),

    listTwo = document.querySelector('.tabs ul li:nth-of-type(2)'),

    listThree = document.querySelector('.tabs ul li:nth-of-type(3)'),

    imgFeatrues = document.querySelector('.tabs .img-box img'),

    headerFeatrues = document.querySelector('.tabs h1'),

    textFeatrues = document.querySelector('.tabs p')

listFeatrues.forEach((el) => {
    el.onclick = function(){
        listFeatrues.forEach((e) => {
            e.classList.remove('active')
        })
    el.classList.add('active');
    if(listThree.classList.contains('active')){
        imgFeatrues.setAttribute('src', 'images/illustration-features-tab-3.svg');
        headerFeatrues.textContent = 'Share your bookmarks';
    }
    if(listTwo.classList.contains('active')){
        imgFeatrues.setAttribute('src', 'images/illustration-features-tab-2.svg');
        headerFeatrues.textContent = 'Intelligent seaech';

    }
    if(listOne.classList.contains('active')){
        imgFeatrues.setAttribute('src', 'images/illustration-features-tab-1.svg');
        headerFeatrues.textContent = 'Bookmarck in one click';
    }
    }
})

// End Featrues Function


// Start Asked Function

 let qAsk = document.querySelectorAll('.asked .questions .question');

 qAsk.forEach((el) => {
     el.onclick = function(){
         el.classList.toggle('focus')
     }
 })

// End Asked Function


// Start Contact Function
let theInput = document.querySelector('.contact-us form input:first-of-type'),
    theButton = document.querySelector('.contact-us form > input'),
    inputParent = document.querySelector('.contact-us form .email'),
    errorText = document.querySelector('.contact-us form .error'),
    errorImg = document.querySelector('.contact-us form .email img')
theButton.onclick = function(e){
  
    if(theInput.value == ""){
        e.preventDefault();
        theInput.style.border = '1px solid hsl(0, 94%, 66%)';
        theButton.style.backgroundColor = '#fff';
        theButton.style.color = '#f00';
        theButton.style.border = '1px solid hsl(0, 94%, 66%)';
        errorText.style.display = 'block';
        errorImg.style.display = 'block';

    }else{
        theInput.style.borderColor = '#fff';
        errorText.style.display = 'none';
        errorImg.style.display = 'none'
    }
}
// End Contact Function


// Start Animation
let landingImg = document.querySelector('.landing .img-box'),
    landingText = document.querySelector('.landing .text-box');
window.onload = function(){
    landingImg.style.marginLeft = 0;
    landingImg.style.opacity = 1;
    landingText.style.marginTop = 0;
    landingText.style.opacity = 1
}
// End Animation
