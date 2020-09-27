// select all ticker items to calculate total width
let scrollItems = document.querySelectorAll('.news-ticker li');
// device width
let bodyWidth = window.innerWidth;
// adding padding left to the first item
scrollItems[0].parentElement.style.paddingLeft = (bodyWidth-60) + "px";
//total width
let itemsWidth = 0;

// calculating total width using individual item clientWidth
scrollItems.forEach(item => {
    let style = item.currentStyle || window.getComputedStyle(item);
    itemsWidth += item.clientWidth + parseInt(style.marginLeft.split('px')[0]) + parseInt(style.marginRight.split('px')[0]);
});

// selecting scrollable section
let tickerItem = document.querySelector(".news-ticker");

//adding animation, duration and inifinite times loop
let animation = tickerItem.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-' + (itemsWidth + bodyWidth - 40)  + 'px)'}
], {
    duration: (itemsWidth * 25) + bodyWidth,
    iterations: Infinity
});

// controlling animation pause on mouse over
tickerItem.addEventListener("mouseover", () => {
    animation.pause();
});

// enable of animation on mouse out
tickerItem.addEventListener("mouseout", () => {
    animation.play();
});