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
var nombres = ['Fiorella Quispe', 'Lourdes Vilchez', 'Rosmery Maldonado', 'Yessenia Huamán',
    'Miriam Mendoza', 'Elizabeth Condori', 'Arantza Burga', 'Grecia Rayme',
    'Janine Vega', 'Rosario Félix', 'Daguiana Revolledo', 'Jenny Velasquez',
    'Nadia Cuadros', 'Michelle More', 'Marilu Llamoca', 'Mariel García',
    'Fiorella Cisneros', 'Geraldine Chauca', 'Yelitza Choque',
    'Stephanie Hiyagon', 'Rocio Tapia', 'Dana Franco', 'Flor Retamozo',
    'Nathaly Pacheco', 'Ericka Vidal', 'Katherine Ortega', 'Brilly Majuan',
    'Flor Tello', 'Leslie Avendaño', 'Cindy Mendoza', 'Annia Flores',
    'Betsi Loayza', 'Ayda Sulca', 'Milagros Gutierrez', 'Nakarid Jave',
    'Angie Condor', 'Maricarmen Rojas', 'Ariana Cabana', 'Flor Condori',
    'Mitchell Rodríguez', 'Naomi Villanueva', 'Mary Castillo', 'Miriam Peralta',
    'Karin Alejo', 'Liliana Peña', 'Ruth Salvador', 'Marilu Llamoca', 'Wendy Reyes',
    'Cinthya Quispe', 'Maria Grecia Cutipa', 'Ana Durand', 'Glisse Jorge', 'Neiza Nuñez',
    'Sandra Solorzano'
];
for (var i = 1; i < 54; i++) {
    var lista = document.createElement("li");
    lista.setAttribute("class", "box");
    var divBox = document.createElement("div");
    divBox.setAttribute("class", "grid");
    var figura = document.createElement("figure");
    var image = document.createElement("img");
    image.setAttribute("class", "img-box");
    image.setAttribute("src", "assets/img/students/" + i + ".png");
    image.setAttribute("alt", nombres[i]);
    var nombre = document.createElement("span");
    nombre.setAttribute("class", "text");
    nombre.innerHTML = nombres[i - 1];
    figura.appendChild(image);
    figura.appendChild(nombre);
    divBox.appendChild(figura);
    lista.appendChild(divBox);
    document.getElementById("contenedor").appendChild(lista);
}
