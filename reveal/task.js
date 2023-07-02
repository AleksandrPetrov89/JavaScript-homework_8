document.addEventListener("scroll", manifestationElements);
const revealElements = document.getElementsByClassName("reveal");


function manifestationElements() {
    for (reveal of revealElements) {
        let {top, bottom} = reveal.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            reveal.classList.remove("reveal_active");
        } else {
            reveal.classList.add("reveal_active");
        };
    };
};