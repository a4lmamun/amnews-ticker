let scrollItems = document.querySelectorAll('.news-ticker li');
let bodyWidth = window.innerWidth;
scrollItems[0].parentElement.style.paddingLeft = (bodyWidth-60) + "px";
let itemsWidth = 0;

scrollItems.forEach(item => {
    let style = item.currentStyle || window.getComputedStyle(item);
    itemsWidth += item.clientWidth + parseInt(style.marginLeft.split('px')[0]) + parseInt(style.marginRight.split('px')[0]);
});

let tickerItem = document.querySelector(".news-ticker");

let animation = tickerItem.animate([
    {transform: 'translateX(0px)'},
    {transform: 'translateX(-' + (itemsWidth + bodyWidth - 40)  + 'px)'}
], {
    duration: (itemsWidth * 25) + bodyWidth,
    iterations: Infinity
});

tickerItem.addEventListener("mouseover", () => {
    animation.pause();
});

tickerItem.addEventListener("mouseout", () => {
    animation.play();
});