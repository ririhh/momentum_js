const images = [
    "IMG_0016.JPG",
    "IMG_0026.jpeg",
    "IMG_0048.JPG"
];

const myImg = images[Math.floor(Math.random()*images.length)];

/* console.log(myImg); */


//js에서 html으로
const bgimg=document.createElement("img");
bgimg.src=`img/${myImg}`;

// console.log(bgimg);

document.body.prepend(bgimg); //body에 html을 추가. prepend는 앞에 추가. append는 뒤에