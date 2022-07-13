const main__inicio = document.getElementById("contenedor__inicio");

const section__carousel = document.getElementById("seccion__carousel");


section__carousel.innerHTML = `<div class="col-lg-12">
                                    <article class="carouselTitle">
                                        <h2>Lo más vendido:</h2>
                                    </article>
                                </div>
                                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
                                    <aside class="aside-carl">
                                        <div id="carouselExampleDark" class="carousel carousel-dark slide aside-carl__cont"
                                            data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                                    aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                                    aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner aside-carl__cont-img">
                                                <div class="carousel-item active" data-bs-interval="10000">
                                                    <img src="assets/images/hombre/remera_moon.jpg" class="d-block w-100"
                                                        alt="remera masculina de manga corta, azul oscuro, con un hombre colgado de la luna">
                                                </div>
                                                <div class="carousel-item" data-bs-interval="2000">
                                                    <img src="assets/images/mujer/cheshire.jpg" class="d-block w-100"
                                                        alt="remera femenina de manga larga, femenina, a dos tonos, con un gato cheshire">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="assets/images/hombre/Campera-microfibra-deportiva.jpg" class="d-block w-100"
                                                        alt="campera masculina, azul oscuro, de microfibia">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                                data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                                data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </aside>
                                </div>`;


main__inicio.append(section__carousel);
