// ------- variables mainHombres.js  --------
const url = "../json/inventarioH.json";
const divGaleriaHombres = document.getElementById("galeria__hombres"); 
let carritoDeCompras = [];
let productosH = [];
const opcionTipo = document.getElementById("opcionTipo");
const opcionPrecio = document.getElementById("opcionPrecio");
// ------------------------------------------
// ------- variables mainMujeres.js  --------
const urlMujeres = "../json/inventarioM.json";
let productosM = [];
let carritoComprasEllas = [];
const divGaleriaMujeres = document.getElementById("galeria__mujeres"); // para la seccion de Mujeres
const filtroTalleL = document.getElementById("filtroL-m");
const filtroTalleM = document.getElementById("filtroM-m");
const filtroTalleS = document.getElementById("filtroS-m");
const filtroPrec1 = document.getElementById("filtroP010");
const filtroPrec2 = document.getElementById("filtroP1020");
const filtroPrec3 = document.getElementById("filtroP2030");
const btnBuscarFs = document.getElementById("btnBuscarFs");
const btnLimpiarFs = document.getElementById("btnReiniciarFs");
const btnVerTodo = document.getElementById("btnVerTodo");
// ------------------------------------------
// ---------- variables sec_Inicio.js -------
const intervaloMS = 3000;
let carroVendido = [];
let posActual = 0;
const carouselContenedor = document.getElementById("carouselBox");
const btnAtras = document.getElementById("atras");
const btnSiguiente = document.getElementById("siguiente");
const contImagen = document.getElementById("imagen");
const infoProducto = document.getElementById("infoProducto");
const btnPlay = document.getElementById("play");
const btnStop = document.getElementById("stop");
let intervalo;
// ------------------------------------------
// ---------- variables appCarrito.js -------
let carroDeCompras = [];
const sectionCarrito = document.getElementById("rowCarrito"); // para la galeria en Carrito
const divContenedor = document.getElementById("contieneCantidad");
const cajaValor = document.getElementById("cajaValor"); // contiene a p --
const precioTotalC = document.getElementById("valorTotal"); // p q muestra el importe a abonar
const btnComprar = document.getElementById("realizarCompra");
const mainCarrito = document.getElementById("mainCarrito");
let valor = 0;
// ---------- variables OBJETOS -------------
class Articulo {
    constructor(id, tipo, marca ,modelo, talle, precio, descripcion, alt, img) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talles = talle;
        this.precio = precio;
        this.descripcion = descripcion;
        this.alt = alt;
        this.img = img;
        this.precioConImp = this.precio;
        this.precioPorCantidad = this.precioConImp; // nuevo
        this.cantidad = 0;
    }
    precioFinal(){
        this.precioConImp = this.precio * 1.21;
    }
    cantidadMas(){
        this.cantidad++;
    }
    precioXCant(){
        this.precioPorCantidad = this.precioConImp * this.cantidad;
    }
    cantidadTotal(a){
        this.cantidad += a;
    }
    cantidadReducida(b){
        this.cantidad -= b;
    }
}
class Inventario{
    constructor(talle,stock){
        this.talle = talle;
        this.stock = stock;
        this.cantidad = 0;
        this.vendido = false; // se usa en carrito 
    }
    vendiendo(){
        this.vendido = true;
    }
    quieroUnoMas(){
        this.cantidad++;
    }
}


