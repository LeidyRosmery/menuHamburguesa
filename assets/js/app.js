document.getElementById("toggle").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("nav-header").classList.toggle("open");
    document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById('nav-background').style.display = "none";
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").style.opacity = 0;
    } else {
        document.getElementById('nav-background').style.display = "table";
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        if (currentScroll <= 3) {
            document.getElementById("nav-header").classList.remove("solid");
            document.getElementById("nav-header").classList.remove("header-in");
        }
    }
    lastScrollTop = currentScroll;
}, false);

for (var i = 1; i < 54; i++) {
    var lista = document.createElement("li");
    lista.setAttribute("class", "box");
    var divBox = document.createElement("div");
    divBox.setAttribute("class", "grid");
    var figura = document.createElement("figure");
    var image = document.createElement("img");
    image.setAttribute("class", "img-box");
    image.setAttribute("src", "assets/img/students/" + i + ".png");
    image.setAttribute("alt", i);
    var figCaption = document.createElement("figCaption");
    figura.appendChild(image);
    figura.appendChild(figCaption);
    divBox.appendChild(figura);
    lista.appendChild(divBox);
    document.getElementById("contenedor").appendChild(lista);
}
