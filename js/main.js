const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    interval:300,
});
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay:40,
});
ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".about-content", {
    ...scrollRevealOption,
    interval: 50,
    delay: 40,
    easing: 'ease-in-out',
});
ScrollReveal().reveal(".about-img", {
    ...scrollRevealOption,
    delay: 50,
});
ScrollReveal().reveal(".card-container", {
    ...scrollRevealOption,
    interval: 50,
    origin:"left",
});
ScrollReveal().reveal(".card-content", {
    ...scrollRevealOption,
    delay: 0,
});
ScrollReveal().reveal(".feature_list li", {
    ...scrollRevealOption,
    interval: 50,
    origin: "left",
});
