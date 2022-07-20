// Variables archivo  main.js
const url = "../json/inventarioH.json";
const urlMujeres = "../json/inventarioM.json";
let carritoDeCompras = [];
// let productosH = []; no lo estoy usando
//----------------------------------
const divGaleriaHombres = document.getElementById("galeria__hombres"); 
const divGaleriaMujeres = document.getElementById("galeria__mujeres"); // para la seccion de Mujeres
// --------- ellas ----------------- 
// -- faltan los filtros
const filtroTalleL = document.getElementById("filtroL-m");
const filtroTalleM = document.getElementById("filtroM-m");
const filtroTalleS = document.getElementById("filtroS-m");
const filtroPrec1 = document.getElementById("filtroP010");
const filtroPrec2 = document.getElementById("filtroP1020");
const filtroPrec3 = document.getElementById("filtroP2030");
//-- btnBuscarFiltros
const btnBuscarFs = document.getElementById("btnBuscarFs");
const btnLimpiarFs = document.getElementById("btnReiniciarFs");
const btnVerTodo = document.getElementById("btnVerTodo");
//-----------------
// Variables archivo appCarrito.js
let carroDeCompras = [];

const sectionCarrito = document.getElementById("rowCarrito"); // para la galeria en Carrito
const divContenedor = document.getElementById("contieneCantidad");
const cajaValor = document.getElementById("cajaValor"); // contiene a p --
const precioTotalC = document.getElementById("valorTotal"); // p q muestra el importe a abonar
const btnComprar = document.getElementById("realizarCompra");
const mainCarrito = document.getElementById("mainCarrito");

let valor = 0;

// ----- OBJETOS -----
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


