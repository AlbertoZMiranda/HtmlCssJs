window.onload = cargarImagenes;

function cargarImagenes(){
    for(var i; i < document.images.length; i++){
        // Si la imagen se encuentra en nodo padre que es un hipervinculo
        if (document.images[i].parentNode.tagName == "A"){
            configuraRollover(document.images[i]);
        }
    }
}

function configuraRollover(imagen){
    imagen.imagenOff = new Image();
    imagen.imagenOff.src = "boton_off.jpg";
    imagen.onmouseout = cambiaOff;

    imagen.imagenOn = new Image();
    imagen.imagenOn.src = "boton_on.jpg";
    imagen.onmouseover = cambiaOn;
}

/*
 * Estas funciones se ejecutan segun el evento que se dispare
 * pero no es al iniciar la pagina, sino depende del
 * boton que se presione, son conocidas como handlers 
 */

// Se asocio al evento onmouseout
function cambiaOff(){
    this.src = this.imagenOff.src; // tomamos los valores ya asociados
}

// se asocio al evento onmouseover
function cambiaOn(){
    this.src = this.imagenOn.src; // tomamos los valores ya asociados
}