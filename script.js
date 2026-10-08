```javascript
const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {

    elementos.forEach((elemento) => {

        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add("active");
        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();
```
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const links = mobileMenu.querySelectorAll("a");

links.forEach((link) => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});