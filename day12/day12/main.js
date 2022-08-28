
const moon = document.querySelector('#moon');
const star = document.querySelector('#star');
const text = document.querySelector('#text');
const explore = document.querySelector('#explore');

function handleWindownScroll(){
    let windowScrollY = window.scrollY;

    moon.style.top = windowScrollY * 1.25 + 'px';

    star.style.left = windowScrollY * 0.25 + 'px';

    text.style.right = windowScrollY * 4 + 'px';

    explore.style.marginTop = windowScrollY * 2.5 +'px';
}

window.addEventListener('scroll',handleWindownScroll);