'use strict';

const imgList = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const closeBtnhandler = document.querySelector('.close-btn');
const imgGrande = document.querySelector('.img-grande');


imgList.forEach((eachImg, index) => {
    imgList[index].addEventListener('click', () => {
        lightbox.classList.add('lightbox-active');
        imgGrande.src = imgList[index].src;
    })
})

closeBtnhandler.addEventListener("click", () => {
    lightbox.classList.remove('lightbox-active');
})