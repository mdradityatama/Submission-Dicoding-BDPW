const menuToggle = document.querySelector('.menu-toggle');
const content = document.querySelector('.content');

menuToggle.addEventListener("click", function() {
    const navMenu = document.querySelector("nav ul");
    const nav = document.querySelector("nav");
    const menuToggleSpan = document.querySelectorAll('.menu-toggle span');

    if (navMenu.style.transform === 'translateX(0%)') {
        navMenu.style.transform = 'translateX(100%)';
        menuToggleSpan[0].style.transform = "rotate(0deg)";
        menuToggleSpan[1].style.transform = "scale(1)";
        menuToggleSpan[2].style.transform = "rotate(0deg)";

        setTimeout(() => navMenu.style.display = 'none', 2000);
    } else {
        navMenu.style.transform = 'translateX(100%)';
        navMenu.style.display = 'flex';
        menuToggleSpan[0].style.transform = "rotate(45deg) translate(-1px, -1px)";
        menuToggleSpan[1].style.transform = "scale(0)";
        menuToggleSpan[2].style.transform = "rotate(-45deg) translate(-1px, 0)";

        setTimeout(() => navMenu.style.transform = 'translateX(0%)', 100);
    }
})

fetch('/assets/data.json')
.then(ress => ress.json())
.then(ressponse => ressponse.map(x => article(x)));

function article({title, description}) {
    const article = document.createElement('article');
    article.innerHTML = `
        <h2>${title}</h2>
        <p class="summary">
            ${description}
        </p>
    `
    
    content.appendChild(article);
}