// Responsive Menu

document.getElementById('ham').addEventListener('click', () => {
    document.getElementById('menu').style.right = 0;
    document.getElementById('scroll-down').style.display = 'none';
})

document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('menu').style.right = '-100%';
    document.getElementById('scroll-down').style.display = 'flex';
})

document.querySelectorAll(".links a").forEach((e) => {
    e.addEventListener('click', () => {
        document.getElementById('menu').style.right = '-100%';
        document.getElementById('scroll-down').style.display = 'flex';
    })
})

// Custom Cursor

let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
})

// Loading animation

const tl = gsap.timeline({
    defaults:{
        ease: 'power1.out'
    }
});

tl.to('.textw', {
    y: "0%",
    duration: 0.8
})
tl.to('.slider', {
    y: "-100%",
    duration: 1,
    delay: 0.5
})
tl.to('.intro', {
    y: "-100%", 
    duration: 1
}, "-=1")
tl.fromTo('nav', {
    opacity: 0
}, {
    opacity: 1,
    duration: 2
})
tl.fromTo('.wrapper h1', {
    opacity: 0
}, {
    opacity: 1
}, "-=1")