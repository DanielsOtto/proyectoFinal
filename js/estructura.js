const section__hombres = document.getElementById("contenedor-js");
const divRowFiltro__hombres = document.getElementById("zonaFiltro__hombres");
const divRowUp__hombres = document.getElementById("zonaUp_hombres");

const div__galeria__hombres = document.getElementById("galeria__hombres");








function mostrarGaleria (){

    div__galeria__hombres.innerHTML = "" 
        
        productos.forEach( el => {
            let div = document.createElement("div");
            div.getElementsByClassName("columnaGaleria");
            div.innerHTML = `<article class="shirt">
                                <img class="imgRopa img-fluid img-thumbnail" src="${el.img}"
                                alt="remera masculina de manga corta, azul oscuro, con la leyenda: california republic"
                                title="remera estilo california">
                                <article class="shirt__info">
                                    <p>Remera California.</p>
                                    <p>$7.400</p>
                                    <form>
                                        <select class="listaTalles" title="talle" name="talles" required>
                                            <option value="XL">XLarge</option>
                                            <option value="L">Large</option>
                                            <option value="M">Medium</option>
                                            <option value="S">Small</option>
                                        </select>
                                        <input class="btnGeneral" type="button" value="COMPRAR">
                                    </form>
                                </article>
                            </article>`
        })
}




divRowFiltro__hombres.innerHTML = `
<button class="btn btnGeneral btnFiltro" type="button" data-bs-toggle="offcanvas"
data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">filtrar</button>
<div class="offcanvas offcanvas-top filtroFondo" tabindex="-1" id="offcanvasTop"
aria-labelledby="offcanvasTopLabel">
<div class="offcanvas-header">
    <h2 id="offcanvasTopLabel">filtros</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">
    <form>
        <article class="filterArticle">
            <h2 class="tituloFiltro">talle</h2>
            <div class="filterArticle__talle">
                <input class="checkFiltro" type="checkbox" name="talle" value="xlarge"
                    id="filtroXL-h">
                <label form="filtroXL" class="labelFiltro" for="tipoBuzo">xlarge (45)</label>
            </div>
            <div class="filterArticle__talle">
                <input class="checkFiltro" type="checkbox" name="talle" value="large"
                    id="filtroL-h">
                <label form="filtroL" class="labelFiltro" for="tipoBuzo">large (44)</label>
            </div>
            <div class="filterArticle__talle">
                <input class="checkFiltro" type="checkbox" name="talle" value="medium"
                    id="filtroM-h">
                <label form="filtroM" class="labelFiltro" for="tipoBuzo">medium (43)</label>
            </div>
            <div class="filterArticle__talle">
                <input class="checkFiltro" type="checkbox" name="talle" value="small"
                    id="filtroS-h">
                <label form="filtroS" class="labelFiltro" for="tipoBuzo">small (42)</label>
            </div>
        </article>
        <article class="filterArticle">
            <h2 class="tituloFiltro">precio</h2>
            <div class="filterArticle__precio">
                <input class="checkFiltro" type="checkbox" name="precio" value="poco"
                    id="filtroP015-h">
                <label form="filtroP010" class="labelFiltro" for="tipoBuzo">$ 1 a $ 15.000</label>
            </div>
            <div class="filterArticle__precio">
                <input class="checkFiltro" type="checkbox" name="precio" value="medio"
                    id="filtroP1020">
                <label form="filtroP1530-h" class="labelFiltro" for="tipoBuzo">$ 15.001 a
                    $ 30.000</label>
            </div>
            <div class="filterArticle__precio">
                <input class="checkFiltro" type="checkbox" name="precio" value="mucho"
                    id="filtroP30-h">
                <label form="filtroP2030" class="labelFiltro" for="tipoBuzo">$ 30.001 o
                    más</label>
            </div>
        </article>
    </form>
</div>
</div> `;

divRowUp__hombres.innerHTML = `<a href="#upH"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-up-circle" width="48" height="48"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#470147" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="12" y1="8" x2="8" y2="12" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="16" y1="12" x2="12" y2="8" />
                                    </svg> 
                                </a>`;

document.section__hombres.append(divRowFiltro__hombres);
document.section__hombres.append(divRowUp__hombres);
