// Show Navbar
const toggle = document.querySelector('nav .fa-bars'),
    navClose = document.querySelector('nav .fa-xmark'),
    ul = document.querySelector('nav ul');

toggle.addEventListener("click", () => {
    ul.classList.add("show-links");
})
// Close Navbar
navClose.addEventListener('click', () => {
    ul.classList.remove("show-links");
})

//Remove menu onclick
const link = document.querySelectorAll("nav ul li");
link.forEach(link => {
    link.addEventListener("click", () => {
        ul.classList.remove("show-links");
    })
})

// bg header
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (scrollY >= 50)
        header.classList.add('bg-header')
    else
    header.classList.remove('bg-header')
})


// scroll up
window.addEventListener('scroll', () => {
    const up = document.getElementById('fa-arrow-up');
    if (scrollY >= 500) {
        up.classList.add('show-scroll');
    }
    else {
        up.classList.remove('show-scroll');
    }
});