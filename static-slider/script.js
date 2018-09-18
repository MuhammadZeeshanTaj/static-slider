// catch the targeted elements in DOM:
const imgContainer = document.getElementById('img-container');
const leftBtn = document.getElementsByClassName('btn-left')[0];
const rightBtn = document.getElementsByClassName('btn-right')[0];
var counter = 0;

// when clicking on the left and right buttons:
leftBtn.addEventListener('click', prevImg);
rightBtn.addEventListener('click', nextImg);

function nextImg(){
    imgContainer.animate(
        // keyframes
        [{opacity: 0},
        {opacity: 1}],
        // duration and fill:
        {duration: 1000,
        fill: "forwards"}
    );
    if(counter === 3){
        counter = -1;
    }
    counter++
    imgContainer.style.backgroundImage = `url('images/pic-${counter}.jpeg')`;
}



function prevImg(){
    imgContainer.animate(
        // keyframes
        [{opacity: 0},
        {opacity: 1}],
        // duration and fill:
        {duration: 1000,
        fill: "forwards"}
    );
    if(counter === 0){
        counter = 4;
    }
    counter--
    imgContainer.style.backgroundImage = `url('images/pic-${counter}.jpeg')`;
}
