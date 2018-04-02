const jsonComentarios = "data/comentarios.json";
const jsonAmazingWork = "data/amazingWork.json";
const jsonSmallImages = "data/smallImages.json";
const jsonBandaImagenes = "data/bandaImagenes.json";


function json(url) {
    return $.get(url);

}

json(jsonComentarios).then(function (comentarios) {
    comentarios.forEach(comentario => {
        $("#comentarios").append(`
        <div class="grid--two-parter-columns">
            <img src="${comentario.imagen}" alt="${comentario.nombre}">
            <div>
                <h3>${comentario.nombre}</h3>
                <h4>${comentario.cargo}</h4>
                <p>${comentario.comentario}</p>
            </div>
        </div>
        `)
    });
})

json(jsonAmazingWork).then(function (amazingWork) {
    amazingWork.forEach(amazing => {
        $("#amazing-work").append(`
        <div class="contenedor-imagen">
        <img src="${amazing.imagen}" alt="">
            <div class="info">
                <div class="grid--quarter-past-columns">
                    <p>${amazing.titulo}</p>
                    <p>${amazing.likes}</p>
                    <i class="icon_heart_alt"></i>
                </div>
                <div class="sombreado">
                
                </div>
            </div>     
        </div>
        `)
    });
})

json(jsonSmallImages).then(function (smallImages) {
    smallImages.forEach(images => {
        $("#small-images").append(`
        <div class="grid--three-columns">
            <img src="${images.imagen}" alt="">
        </div>
        `)
    });
})

json(jsonBandaImagenes).then(function (bandaImagenes) {
    bandaImagenes.forEach(banda => {
        $("#banda-imagenes").append(`
        <div>
        <img src="${banda.imagen}" alt="">
            <div class="banda--imagenes-texto">
            <h3>${banda.titulo}</h3>
                <div class="grid--two-columns">
                    <p>${banda.fecha}</p>
                    <p>${banda.categoria}</p>
                </div>
            </div>     
        </div>
        `)
    });
})

// Acordeon

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// ---------------------------------------- hover -------------------------------

index.html.getElementById("nav a").onmouseover = function () {
    mouseOver()
};
index.html.getElementById("nav a").onmouseout = function () {
    mouseOut()
};

function mouseOver() {
    index.html.getElementById("nav a").style.color = "red";
}

function mouseOut() {
    index.html.getElementById("nav a").style.color = "black";
}