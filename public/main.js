const options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
};
const dots = document.querySelectorAll('.box-line-3__dot-box');
const callback = (entries, observer) => {

    entries.forEach((entry, index) => {
        entry.target.classList.add("opacity-0")
        if (entry.isIntersecting) {   // Sprawdzamy, czy element jest widoczny
            console.log("Element jest widoczny!", entry);
            entry.target.classList.add("opacity-1")
            observer.unobserve(entry.target);  // Przestajemy obserwować element
        }
    });
};
const boxline2 = document.querySelector('.box-line-2');
const h2 = document.querySelector('h2');
const observer = new IntersectionObserver(callback, options);
const mapa = document.querySelector('#map-section');
const maph3 = document.querySelector('#map-section h3');
const statemantBox = document.querySelector('.box');
const contactPage = document.querySelector('.contact');

dots.forEach(dot => {
    observer.observe(dot)
})
observer.observe(h2)
observer.observe(boxline2)
observer.observe(mapa)
observer.observe(maph3)
observer.observe(statemantBox)
observer.observe(contactPage)

