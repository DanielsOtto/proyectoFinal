const productos = [];  // este arreglo va a tener los objetos en venta
let cantidad = 0;
let precioXCant = 0;

class Articulo {
    constructor(id, tipo, marca ,modelo, talle, color, stock, precio, descripcion, img) {
        this.id = id;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.finalPrice = precio;
        this.newPrice = precio;
    }
    hayStock() {
        this.stock = this.stock - cantidad;
    }
    precioFinal() {
        this.finalPrice = Math.round(this.precio * 1.21);
    }
    multiplePriceE() {
        precioXCant = this.finalPrice * cantidad;
    }
    fifteenOff() {
        this.newPrice = Math.round(precioXCant - (precioXCant * 0.10));
    }
    threeWithoutI() {
        this.newPrice = Math.round(precioXCant / 3);
    }
    twelveWithI() {
        this.newPrice = Math.round((precioXCant * 1.10) / 12);
    }
}

class Inventario{
    constructor(id, talle, color, stock){
        this.id = id;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
    }
}

productos.push(new Articulo('1h',"REMERA", "CALIFORNIA REPUBLIC", "MANGA CORTA", 'L', "AZUL OSCURA", 10, 7400,"Remera California","../assets/images/hombre/remera_california.jpg"));
productos.push(new Articulo('2h',"REMERA", "FIVE BORO", "MANGA CORTA", 'M', "NEGRA", 8, 7300,"Remera skater","../assets/images/hombre/remera_skate.jpg"));
productos.push(new Articulo('3h',"REMERA", "FUTBOL", "MANGA CORTA", 'S', "BLANCA", 0, 6200,"Remera Brasil 2014","../assets/images/hombre/remera_ball.jpg"));
productos.push(new Articulo('4h',"REMERA", "MOON", "MANGA CORTA", 'S', "AZUL OSCURO", 4, 8200,"Remera con un gran diseño de un astronauta en la luna","../assets/images/hombre/remera_moon.jpg"));
productos.push(new Articulo('5h',"REMERA", "SKREEP", "MANGA LARGA", 'XL', "CREMA", 4, 7500,"Remera lisa","../assets/images/hombre/remera_bird.jpg"));
productos.push(new Articulo('6h',"CAMPERA", "SKREEP", "MANGA LARGA", 'L', "AZUL", 12, 37000,"Campera de microfibia, ideal para entrenar en climas templados o con fuertes viento","../assets/images/hombre/Campera-microfibra-deportiva.jpg"));
productos.push(new Articulo('7h',"REMERA", "SKREEP", "MANGA CORTA", 'M', "NEGRA", 6, 6350,"Remera con tabla de skate fantasmagórica","../assets/images/hombre/remera_ghost.jpg"));
productos.push(new Articulo('8h',"ZAPATILLAS", "SKREEP", "RUNNING", 'M', "ROJAS", 4, 30000,"Estas zapatillas de running tienen una mediasuela Jetboost que proporciona el increíble retorno de energía de Boost","../assets/images/hombre/ellos_tennis.jpg"));
productos.push(new Articulo('1m',"REMERA", "CHESIRE", "MANGA LARGA", 'L', "GRIS", 7, 8000));
productos.push(new Articulo('2m',"REMERA", "DBZ", "MANGA CORTA", 'L', "NEGRA", 17, 6500));
productos.push(new Articulo('3m',"REMERA", "BASEBALL", "MANGA CORTA", 'M', "AZUL", 1, 6200));
productos.push(new Articulo('4m',"REMERA", "RUFFIAN", "MANGA CORTA", 'S', "CELESTE", 3, 5250));
productos.push(new Articulo('5m',"REMERA", "MOON", "MANGA CORTA", 'L', "NEGRA", 7, 5800));
productos.push(new Articulo('6m',"CAMPERA", "SKREEP", "MANGA LARGA", 'L', "ROJA", 17, 57000));
productos.push(new Articulo('7m',"ZAPATILLAS", "SKREEP", "RUNNING", 'M', "AZUL", 1, 28000));
productos.push(new Articulo('8m',"ZAPATILLAS", "SKREEP", "RUNNING", 'S', "GRIS", 3, 35000));

