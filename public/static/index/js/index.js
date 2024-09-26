const animateCSS = (element, animation, duration = 1, prefix = 'animate__') =>
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    node.style.setProperty('--animate-duration', duration + 's');

    function handleAnimationEnd() {
        node.classList.remove(`${prefix}animated`, animationName);
        node.removeEventListener('animationend', handleAnimationEnd);
    }

    node.addEventListener('animationend', handleAnimationEnd);
});
