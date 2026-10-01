// ==============================
// PRODUCTOS BALDOSBUR
// ==============================

const productos = [
  // ==============================
  // BALDOSAS
  // ==============================

  {
    id: 1,
    nombre: "Baldosa Adoquín Recto",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BAR",
    descripcion:
      "Baldosa adoquín recto de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "adoquinrecto1.jpeg",
      "adoquinrecto2.jpeg",
      "adoquinrecto3.jpeg"
    ]
  },

  {
    id: 2,
    nombre: "Baldosa Piedra Brasil",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BPB",
    descripcion:
      "Baldosa Piedra Brasil de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosabrasil2.jpeg",
      "baldosabrasil1.jpeg"
    ]
  },

  {
    id: 3,
    nombre: "Baldosa San Juan",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    precioEspecial: 40500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: [
      "Gris",
      "Rojo",
      "Negro",
      "Amarillo",
      "Colores especiales"
    ],
    codigo: "BSJ",
    descripcion:
      "Baldosa Laja San Juan de 40 × 40 cm, con textura irregular y terminación rústica símil piedra. Disponible en colores especiales.",
    imagenes: [
      "baldosasanjuan1.jpeg",
      "baldosasanjuan2.jpeg",
      "lajasanuanmarron.jpeg"
    ]
  },

  {
    id: 4,
    nombre: "Baldosa Laja San Luis",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BSL",
    descripcion:
      "Baldosa Laja San Luis de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosalajasanluis1.jpeg",
      "baldosalajasanluis2.jpeg"
    ]
  },

  {
    id: 5,
    nombre: "Baldosa Adoquín Recto 64 Panes",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "AR64P",
    descripcion:
      "Baldosa adoquín recto de 64 panes, de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "adoquinrecto64panes1.jpeg",
      "adoquinrecto6panes2.jpeg"
    ]
  },

  {
    id: 6,
    nombre: "Baldosa 36 Panes",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "36P40X40",
    descripcion:
      "Baldosa de 36 panes de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosa36panes1.jpeg",
      "baldosa36panes2.jpeg"
    ]
  },

  {
    id: 7,
    nombre: "Baldosa Gregoriana",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BG",
    descripcion:
      "Baldosa Gregoriana de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosagregoriana1.jpeg",
      "baldosagregoriana2.jpeg"
    ]
  },

  {
    id: 8,
    nombre: "Baldosa Vereda 3 Vainillas",
    categoria: "baldosas",
    precio: 29000,
    precioGris: 27000,
    medida: "20 x 20 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BV3V",
    descripcion:
      "Baldosa Vereda 3 Vainillas de 20 × 20 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosa3vainillas3.jpeg",
      "baldosa3vainillas1.jpeg",
      "baldosa3vainillas2.jpeg"
    ]
  },

  {
    id: 9,
    nombre: "Baldosa Mosaico 9 Panes",
    categoria: "baldosas",
    precio: 29000,
    precioGris: 27000,
    medida: "Consultar medida",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BMV9P",
    descripcion:
      "Baldosa Mosaico de 9 panes para vereda, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosamosaico9panes2.jpeg",
      "baldosamosaico9panes1.jpeg",
      "baldosamosaico9panes3.jpeg"
    ]
  },

  {
    id: 10,
    nombre: "Baldosa Laja Riojana",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BLR",
    descripcion:
      "Baldosa Laja Riojana de 40 × 40 cm, con textura irregular y terminación rústica símil piedra.",
    imagenes: [
      "baldosalajariojana1.jpeg",
      "baldosalajariojana2.jpeg",
      "baldosalajariojana3.jpeg"
    ]
  },

  {
    id: 11,
    nombre: "Baldosa Ladrillo Cruzado",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 x 2 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BLC",
    descripcion:
      "Baldosa Ladrillo Cruzado de 40 × 40 cm, con 2 cm de espesor y terminación rústica.",
    imagenes: [
      "ladrillocruzado1.jpeg",
      "ladrillocruzado2.jpeg"
    ]
  },

  {
    id: 12,
    nombre: "Baldosa Adoquín Circular 5 cm",
    categoria: "baldosas",
    precio: 15500,
    precioGris: 14500,
    medida: "40 x 40 cm",
    unidad: "m²",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "BAC5",
    descripcion:
      "Baldosa adoquín circular de 5 cm, de 40 × 40 cm, con terminación rústica y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "baldosa4.jpeg",
      "baldosa1.jpeg",
      "baldosa2.jpeg"
    ]
  },

  {
    id: 13,
    nombre: "Baldosa Laja Estrella",
    categoria: "baldosas",
    precio: 15500,
    medida: "Consultar",
    unidad: "Consultar",
    colores: [],
    codigo: "",
    descripcion:
      "Baldosa Laja Estrella, ideal para pisos y veredas.",
    imagenes: [
      "lajaestrella.jpeg",
      "lajaestrella1.jpeg"
    ]
  },
  // ==============================
  // ATÉRMICAS
  // ==============================

  {
    id: 14,
    nombre: "Baldosa Atérmica Razzante Oceánico",
    categoria: "atermicas",
    precio: 40200,
    medida: "40 x 40 x 2 cm",
    unidad: "Pack x 6 unidades",
    colores: ["Blanco", "Beige", "Amarillo"],
    codigo: "BARO",
    descripcion:
      "Baldosa atérmica modelo Razzante Oceánico, fabricada con materiales 100% atérmicos.",
    imagenes: [
      "razzanteoceanico.jpeg",
      "razzanteoceanico1.jpeg"
    ]
  },

  {
    id: 15,
    nombre: "Baldosa Atérmica Razzante Oceánico Borde Ballena",
    categoria: "atermicas",
    precio: 80400,
    medida: "40 x 40 cm",
    unidad: "Consultar presentación",
    colores: ["Blanco", "Beige", "Amarillo"],
    codigo: "BABB",
    descripcion:
      "Baldosa atérmica modelo Razzante Oceánico Borde Ballena, fabricada con materiales 100% atérmicos.",
    imagenes: [
      "razzanteborde1.jpeg",
      "razzanteborde.jpeg"
    ]
  },

  {
    id: 16,
    nombre: "Baldosa Atérmica Solarium Borde Ballena",
    categoria: "atermicas",
    precio: 65000,
    medida: "50 x 50 cm",
    unidad: "Pack x 4 unidades",
    colores: ["Blanco", "Beige", "Amarillo"],
    codigo: "LASBB",
    descripcion:
      "Baldosa atérmica modelo Solarium Borde Ballena, fabricada con materiales 100% atérmicos.",
    imagenes: [
      "bordeballena1.jpeg"
    ]
  },

  {
    id: 17,
    nombre: "Baldosa Atérmica Solarium Borde L",
    categoria: "atermicas",
    precio: 62000,
    medida: "50 x 50 cm",
    unidad: "Pack x 4 unidades",
    colores: ["Blanco", "Beige", "Amarillo"],
    codigo: "BABL",
    descripcion:
      "Baldosa atérmica modelo Solarium Borde L, fabricada con materiales 100% atérmicos.",
    imagenes: [
      "bordeL.jpeg"
    ]
  },

  {
    id: 18,
    nombre: "Loseta Atérmica Solarium Rejilla",
    categoria: "atermicas",
    precio: 62000,
    medida: "50 x 20 x 3 cm",
    unidad: "Pack x 9 unidades",
    colores: ["Blanco", "Beige", "Amarillo"],
    codigo: "",
    descripcion:
      "Loseta atérmica modelo Solarium Rejilla, fabricada con materiales 100% atérmicos.",
    imagenes: [
      "loseta1.jpeg",
      "loseta2.jpeg"
    ]
  },

  // ==============================
  // COMPLEMENTOS
  // ==============================

  {
    id: 19,
    nombre: "Guarda Rústica",
    categoria: "complementos",
    precio: 2500,
    precioGris: 2200,
    medida: "40 cm",
    unidad: "unidad",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "GR",
    descripcion:
      "Guarda rústica de 40 cm, con terminación no esmaltada y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "guardarustica1.jpeg",
      "guardarustica.jpeg"
    ]
  },

  {
    id: 20,
    nombre: "Zócalo Rústico 40 cm",
    categoria: "complementos",
    precio: 1650,
    precioGris: 1350,
    medida: "10 x 40 cm",
    unidad: "unidad",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "ZR",
    descripcion:
      "Zócalo rústico de 10 × 40 cm, con terminación no esmaltada y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "zocalo40cm1.jpeg",
      "zocalo40cm2.jpeg"
    ]
  },

  {
    id: 21,
    nombre: "Moldura Rústica 10 x 40",
    categoria: "complementos",
    precio: 6000,
    precioGris: 5000,
    medida: "10 x 40 cm",
    unidad: "unidad",
    colores: ["Gris", "Rojo", "Negro", "Amarillo"],
    codigo: "MRM",
    descripcion:
      "Moldura rústica de 10 × 40 cm, con terminación no esmaltada y disponible en gris, rojo, negro y amarillo.",
    imagenes: [
      "moldurarustica1.jpeg",
      "moldurarustica2.jpeg",
      "moldurarustica3.jpeg"
    ]
  },

  // ==============================
  // MATERIALES
  // ==============================

  {
    id: 22,
    nombre: "Cemento Blanco CIMSA",
    categoria: "materiales",
    precio: 55000,
    medida: "25 kg",
    unidad: "bolsa",
    colores: [],
    codigo: "CBC",
    descripcion:
      "Cemento blanco marca Cerro Blanco - CIMSA, presentado en bolsa de 25 kg.",
    imagenes: [
      "cementocimsa.jpeg"
    ]
  },

  {
    id: 23,
    nombre: "Cemento Blanco OYAC - Super White",
    categoria: "materiales",
    precio: 59000,
    medida: "25 kg",
    unidad: "bolsa",
    colores: [],
    codigo: "CBO",
    descripcion:
      "Cemento blanco OYAC - Super White, presentado en bolsa de 25 kg.",
    imagenes: [
      "oyac.jpeg"
    ]
  },

  {
    id: 24,
    nombre: "Ferrite Amarilla - Roja",
    categoria: "materiales",
    precio: 14000,
    medida: "Fracción de 1 kg",
    unidad: "unidad",
    colores: [],
    codigo: "FA",
    descripcion:
      "Ferrite amarilla y roja, presentada en fracción de 1 kg.",
    imagenes: [
      "ferriteroja.jpeg",
      "ferriteamarilla.jpeg"
    ]
  },

  {
    id: 25,
    nombre: "Ferrite Negra",
    categoria: "materiales",
    precio: 28000,
    medida: "Fracción de 1 kg",
    unidad: "unidad",
    colores: [],
    codigo: "",
    descripcion:
      "Ferrite negra para dosificación de 1,5% a 2,5%, presentada en fracción de 1 kg.",
    imagenes: [
      "ferritenegra.jpeg"
    ]
  }
];


// ==============================
// ELEMENTOS DE LA PÁGINA
// ==============================

const contenedorProductos =
  document.getElementById("productos");

const productosDestacados =
  document.getElementById("productosDestacados");

const buscador =
  document.querySelector(".buscador input");

const botonesFiltro =
  document.querySelectorAll(".filtro");

const categoriasBotones =
  document.querySelectorAll(".categoria-card");


// ==============================
// FORMATEAR PRECIOS
// ==============================

function formatoPrecio(precio) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(precio);
}


// ==============================
// CREAR TARJETA DE PRODUCTO
// ==============================

function crearProducto(producto) {

  const precioInicial =
    producto.precioGris || producto.precio;

  return `
    <article class="producto-card" data-id="${producto.id}">

      <div class="producto-imagen">
        ${
          producto.imagenes &&
          producto.imagenes.length > 0
            ? `<img src="${producto.imagenes[0]}" alt="${producto.nombre}">`
            : `<span>Imagen del producto</span>`
        }
      </div>

      <div class="producto-info">

        <span class="producto-categoria">
          ${nombreCategoria(producto.categoria)}
        </span>

        <h3>${producto.nombre}</h3>

        <p class="producto-medida">
          ${producto.medida}
        </p>

        <div class="producto-precio">
          ${producto.precioGris ? "Desde " : ""}
          ${formatoPrecio(producto.precioGris || producto.precio)}
          <small>${producto.unidad || ""}</small>
        </div>

        <button
          class="boton-ver-producto"
          data-id="${producto.id}">
          Ver producto
        </button>

      </div>

    </article>
  `;
}
// ==============================
// NOMBRE DE CATEGORÍA
// ==============================

function nombreCategoria(categoria) {

  const nombres = {
    baldosas: "Baldosas",
    atermicas: "Atérmicas",
    complementos: "Complementos",
    materiales: "Materiales"
  };

  return nombres[categoria] || categoria;
}


// ==============================
// MOSTRAR PRODUCTOS
// ==============================

function mostrarProductos(lista = productos) {

  if (!contenedorProductos) return;

  if (lista.length === 0) {

    contenedorProductos.innerHTML = `
      <div class="sin-resultados">
        <h3>No encontramos productos</h3>
        <p>Probá con otro nombre o categoría.</p>
      </div>
    `;

    return;
  }

  contenedorProductos.innerHTML =
    lista
      .map(producto => crearProducto(producto))
      .join("");
}


// ==============================
// PRODUCTOS DESTACADOS
// ==============================

function mostrarDestacados() {

  if (!productosDestacados) return;

  const destacados =
    productos.slice(0, 6);

  productosDestacados.innerHTML =
    destacados
      .map(producto => crearProducto(producto))
      .join("");
}


// ==============================
// NORMALIZAR TEXTO
// ==============================

function normalizarTexto(texto) {

  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}


// ==============================
// FILTRAR CATEGORÍA
// ==============================

function filtrarCategoria(categoria) {

  const categoriaNormalizada =
    normalizarTexto(categoria);

  if (categoriaNormalizada === "todos") {

    mostrarProductos(productos);
    return;
  }

  const filtrados =
    productos.filter(producto =>
      normalizarTexto(producto.categoria) ===
      categoriaNormalizada
    );

  mostrarProductos(filtrados);
}


// ==============================
// FILTROS DEL CATÁLOGO
// ==============================

botonesFiltro.forEach(boton => {

  boton.addEventListener("click", () => {

    botonesFiltro.forEach(btn => {
      btn.classList.remove("activo");
    });

    boton.classList.add("activo");

    const categoria =
      boton.dataset.filtro || "";

    filtrarCategoria(categoria);
  });

});


// ==============================
// CATEGORÍAS
// ==============================

categoriasBotones.forEach(boton => {

  boton.addEventListener("click", () => {

    const categoria =
      boton.dataset.categoria || "";

    const filtroCorrespondiente =
      [...botonesFiltro].find(filtro =>
        normalizarTexto(filtro.dataset.filtro || "") ===
        normalizarTexto(categoria)
      );

    if (filtroCorrespondiente) {
      filtroCorrespondiente.click();
    }

    const catalogo =
      document.getElementById("catalogo");

    if (catalogo) {

      catalogo.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// ==============================
// BUSCADOR
// ==============================

if (buscador) {

  buscador.addEventListener("input", () => {

    const texto =
      normalizarTexto(
        buscador.value.trim()
      );

    const resultados =
      productos.filter(producto =>

        normalizarTexto(producto.nombre)
          .includes(texto) ||

        normalizarTexto(producto.categoria)
          .includes(texto) ||

        normalizarTexto(producto.codigo || "")
          .includes(texto)

      );

    mostrarProductos(resultados);

  });

}
// ==============================
// MENÚ MOBILE
// ==============================

const botonMenu =
  document.getElementById("abrirMenu");

const menuMobile =
  document.getElementById("menuMobile");

const cerrarMenu =
  document.getElementById("cerrarMenu");


if (botonMenu && menuMobile) {

  botonMenu.addEventListener("click", () => {
    menuMobile.classList.add("abierto");
  });

}


if (cerrarMenu && menuMobile) {

  cerrarMenu.addEventListener("click", () => {
    menuMobile.classList.remove("abierto");
  });

}


if (menuMobile) {

  menuMobile
    .querySelectorAll("a")
    .forEach(enlace => {

      enlace.addEventListener("click", () => {
        menuMobile.classList.remove("abierto");
      });

    });

}


// ==============================
// MODAL DE PRODUCTO
// ==============================

const modalProducto =
  document.getElementById("modalProducto");

const cerrarModal =
  document.getElementById("cerrarModal");

const modalCategoria =
  document.getElementById("modalCategoria");

const modalNombre =
  document.getElementById("modalNombre");

const modalMedida =
  document.getElementById("modalMedida");

const modalPrecio =
  document.getElementById("modalPrecio");

const modalDescripcion =
  document.getElementById("modalDescripcion");

const modalMaterial =
  document.getElementById("modalMaterial");

const modalTerminacion =
  document.getElementById("modalTerminacion");

const modalCodigo =
  document.getElementById("modalCodigo");

const modalImagen =
  document.getElementById("modalImagen");

const modalOpciones =
  document.getElementById("modalOpciones");


// ==============================
// CARRUSEL DE IMÁGENES
// ==============================

const imagenProducto =
  document.getElementById("imagenProducto");

const imagenAnterior =
  document.getElementById("imagenAnterior");

const imagenSiguiente =
  document.getElementById("imagenSiguiente");

let imagenActual = 0;

let imagenesProductoActual = [];


// ==============================
// CANTIDAD
// ==============================

const menosCantidad =
  document.getElementById("menosCantidad");

const masCantidad =
  document.getElementById("masCantidad");

const cantidadProductoTexto =
  document.getElementById("cantidadProducto");

let cantidadProducto = 1;


// ==============================
// MOSTRAR IMAGEN
// ==============================

function mostrarImagenProducto() {

  if (!imagenProducto) return;

  if (imagenesProductoActual.length === 0) {

    imagenProducto.removeAttribute("src");

    imagenProducto.alt =
      "Imagen del producto";

    if (imagenAnterior) {
      imagenAnterior.style.display = "none";
    }

    if (imagenSiguiente) {
      imagenSiguiente.style.display = "none";
    }

    return;
  }

  imagenProducto.src =
    imagenesProductoActual[imagenActual];

  imagenProducto.alt =
    "Imagen del producto";

  const mostrarFlechas =
    imagenesProductoActual.length > 1;

  if (imagenAnterior) {

    imagenAnterior.style.display =
      mostrarFlechas
        ? "flex"
        : "none";
  }

  if (imagenSiguiente) {

    imagenSiguiente.style.display =
      mostrarFlechas
        ? "flex"
        : "none";
  }

}


// ==============================
// ABRIR PRODUCTO
// ==============================

function abrirProducto(id) {

  const producto =
    productos.find(
      p => p.id === Number(id)
    );

  if (!producto || !modalProducto) return;


  modalProducto.dataset.productoId =
    producto.id;


  // ==============================
  // DATOS PRINCIPALES
  // ==============================

  if (modalCategoria) {
    modalCategoria.textContent =
      nombreCategoria(producto.categoria);
  }

  if (modalNombre) {
    modalNombre.textContent =
      producto.nombre;
  }

  if (modalMedida) {
    modalMedida.textContent =
      producto.medida || "Consultar";
  }


  // ==============================
  // PRECIO INICIAL
  // ==============================

  if (modalPrecio) {

    modalPrecio.textContent =
      formatoPrecio(
        producto.precioGris ||
        producto.precio
      );

  }


  // ==============================
  // DATOS
  // ==============================

  if (modalCodigo) {

    modalCodigo.textContent =
      producto.codigo || "Consultar";

  }

  if (modalMaterial) {

    modalMaterial.textContent =
      "Consultar";

  }

  if (modalTerminacion) {

    modalTerminacion.textContent =
      "Consultar";

  }


  // ==============================
  // DESCRIPCIÓN
  // ==============================

  if (modalDescripcion) {

    modalDescripcion.textContent =
      producto.descripcion ||
      "Producto disponible en nuestro catálogo.";

  }


  // ==============================
  // COLORES
  // ==============================

  if (
    producto.colores &&
    producto.colores.length > 0
  ) {

    modalOpciones.innerHTML = `

      <div class="modal-label">

        <span>Color</span>

        <div class="modal-colores">

          ${producto.colores.map((color, index) => `

            <button
              type="button"
              class="boton-color ${
                index === 0
                  ? "seleccionado"
                  : ""
              }"
              data-color="${color}">

              ${color}

            </button>

          `).join("")}

        </div>

      </div>

    `;


    const botonesColor =
      modalOpciones.querySelectorAll(
        ".boton-color"
      );


    botonesColor.forEach(boton => {

      boton.addEventListener(
        "click",
        () => {

          botonesColor.forEach(btn => {
            btn.classList.remove(
              "seleccionado"
            );
          });

          boton.classList.add(
            "seleccionado"
          );

          const colorSeleccionado =
            boton.dataset.color;
            // ==============================
          // PRECIO SEGÚN COLOR
          // ==============================

          if (
            colorSeleccionado &&
            colorSeleccionado.toLowerCase() ===
              "gris" &&
            producto.precioGris
          ) {

            modalPrecio.textContent =
              formatoPrecio(
                producto.precioGris
              );

          } else if (
            colorSeleccionado &&
            colorSeleccionado.toLowerCase() ===
              "colores especiales" &&
            producto.precioEspecial
          ) {

            modalPrecio.textContent =
              formatoPrecio(
                producto.precioEspecial
              );

          } else {

            modalPrecio.textContent =
              formatoPrecio(
                producto.precio
              );

          }

        }
      );

    });


  } else {

    modalOpciones.innerHTML = "";

  }


  // ==============================
  // CANTIDAD
  // ==============================

  cantidadProducto = 1;

  if (cantidadProductoTexto) {

    cantidadProductoTexto.textContent =
      cantidadProducto;

  }


  // ==============================
  // IMÁGENES
  // ==============================

  imagenesProductoActual =
    producto.imagenes || [];

  imagenActual = 0;

  mostrarImagenProducto();


  // ==============================
  // MOSTRAR MODAL
  // ==============================

  modalProducto.classList.add("abierto");

  document.body.style.overflow =
    "hidden";

}


// ==============================
// CAMBIAR IMAGEN
// ==============================

if (imagenAnterior) {

  imagenAnterior.addEventListener(
    "click",
    () => {

      if (
        imagenesProductoActual.length <= 1
      ) return;

      imagenActual--;

      if (imagenActual < 0) {

        imagenActual =
          imagenesProductoActual.length - 1;

      }

      mostrarImagenProducto();

    }
  );

}


if (imagenSiguiente) {

  imagenSiguiente.addEventListener(
    "click",
    () => {

      if (
        imagenesProductoActual.length <= 1
      ) return;

      imagenActual++;

      if (
        imagenActual >=
        imagenesProductoActual.length
      ) {

        imagenActual = 0;

      }

      mostrarImagenProducto();

    }
  );

}


// ==============================
// CERRAR MODAL
// ==============================

function cerrarVentanaProducto() {

  if (!modalProducto) return;

  modalProducto.classList.remove(
    "abierto"
  );

  document.body.style.overflow = "";
}


if (cerrarModal) {

  cerrarModal.addEventListener(
    "click",
    cerrarVentanaProducto
  );

}


if (modalProducto) {

  modalProducto.addEventListener(
    "click",
    e => {

      if (e.target === modalProducto) {
        cerrarVentanaProducto();
      }

    }
  );

}


document.addEventListener(
  "keydown",
  e => {

    if (e.key === "Escape") {
      cerrarVentanaProducto();
    }

  }
);


// ==============================
// CLICK EN VER PRODUCTO
// ==============================

document.addEventListener(
  "click",
  e => {

    const boton =
      e.target.closest(
        ".boton-ver-producto"
      );

    if (!boton) return;

    abrirProducto(
      boton.dataset.id
    );

  }
);


// ==============================
// BOTONES DE CANTIDAD
// ==============================

if (
  menosCantidad &&
  masCantidad &&
  cantidadProductoTexto
) {

  menosCantidad.addEventListener(
    "click",
    () => {

      if (cantidadProducto > 1) {

        cantidadProducto--;

        cantidadProductoTexto.textContent =
          cantidadProducto;

      }

    }
  );


  masCantidad.addEventListener(
    "click",
    () => {

      cantidadProducto++;

      cantidadProductoTexto.textContent =
        cantidadProducto;

    }
  );

}


// ==============================
// CARRITO
// ==============================

let carrito = [];

const carritoContenedor =
  document.querySelector(".carrito");

const carritoProductos =
  document.getElementById(
    "carritoProductos"
  );

const carritoTotal =
  document.getElementById(
    "totalCarrito"
  );

const cantidadCarrito =
  document.getElementById(
    "cantidadCarrito"
  );

const abrirCarrito =
  document.getElementById(
    "abrirCarrito"
  );

const cerrarCarrito =
  document.getElementById(
    "cerrarCarrito"
  );

const overlay =
  document.getElementById("overlay");

const enviarWhatsApp =
  document.getElementById(
    "enviarWhatsApp"
  );


// ==============================
// ABRIR CARRITO
// ==============================

function abrirVentanaCarrito() {

  if (!carritoContenedor) return;

  carritoContenedor.classList.add(
    "abierto"
  );

  if (overlay) {
    overlay.classList.add("activo");
  }

  document.body.style.overflow =
    "hidden";
}


// ==============================
// CERRAR CARRITO
// ==============================

function cerrarVentanaCarrito() {

  if (!carritoContenedor) return;

  carritoContenedor.classList.remove(
    "abierto"
  );

  if (overlay) {
    overlay.classList.remove("activo");
  }

  document.body.style.overflow = "";
}


if (abrirCarrito) {

  abrirCarrito.addEventListener(
    "click",
    abrirVentanaCarrito
  );

}


if (cerrarCarrito) {

  cerrarCarrito.addEventListener(
    "click",
    cerrarVentanaCarrito
  );

}


if (overlay) {

  overlay.addEventListener(
    "click",
    cerrarVentanaCarrito
  );

}


// ==============================
// AGREGAR AL CARRITO
// ==============================

function agregarAlCarrito() {

  if (!modalProducto) return;


  const productoId =
    Number(
      modalProducto.dataset.productoId
    );


  const producto =
    productos.find(
      p => p.id === productoId
    );


  if (!producto) return;


  // ==============================
  // COLOR SELECCIONADO
  // ==============================

  const botonColorSeleccionado =
    modalOpciones
      ? modalOpciones.querySelector(
          ".boton-color.seleccionado"
        )
      : null;


  const color =
    botonColorSeleccionado
      ? botonColorSeleccionado.dataset.color
      : null;


  // ==============================
  // CANTIDAD
  // ==============================

  const cantidad =
    cantidadProducto;


  // ==============================
  // PRECIO
  // ==============================

  let precio =
    producto.precio;


  // Gris
  if (
    color &&
    color.toLowerCase() === "gris" &&
    producto.precioGris
  ) {

    precio =
      producto.precioGris;

  }


  // Colores especiales
  if (
    color &&
    color.toLowerCase() === "colores especiales" &&
    producto.precioEspecial
  ) {

    precio =
      producto.precioEspecial;

  }


  // ==============================
  // PRODUCTO EXISTENTE
  // ==============================

  const productoExistente =
    carrito.find(item =>
      item.id === producto.id &&
      item.color === color
    );


  if (productoExistente) {

    productoExistente.cantidad +=
      cantidad;

  } else {

    carrito.push({

      id: producto.id,

      nombre: producto.nombre,

      color: color,

      cantidad: cantidad,

      precio: precio,

      unidad: producto.unidad

    });

  }


  actualizarCarrito();

  cerrarVentanaProducto();

  abrirVentanaCarrito();

}
// ==============================
// BOTÓN AGREGAR DEL MODAL
// ==============================

const botonAgregarModal =
  document.getElementById(
    "agregarDesdeModal"
  );


if (botonAgregarModal) {

  botonAgregarModal.addEventListener(
    "click",
    agregarAlCarrito
  );

}


// ==============================
// MOSTRAR CARRITO
// ==============================

function actualizarCarrito() {

  if (!carritoProductos) return;


  if (carrito.length === 0) {

    carritoProductos.innerHTML = `
      <p class="carrito-vacio">
        Todavía no agregaste productos.
      </p>
    `;

  } else {

    carritoProductos.innerHTML =
      carrito.map((item, index) => `

        <div class="carrito-item">

          <div class="carrito-item-info">

            <strong>
              ${item.nombre}
            </strong>

            ${
              item.color
                ? `<span>Color: ${item.color}</span>`
                : ""
            }

            <span>
              ${formatoPrecio(item.precio)}
              ${item.unidad}
            </span>

          </div>

          <div class="carrito-item-abajo">

            <div class="carrito-cantidad">

              <button
                type="button"
                class="cambiar-cantidad"
                data-index="${index}"
                data-accion="menos">
                −
              </button>

              <span>
                ${item.cantidad}
              </span>

              <button
                type="button"
                class="cambiar-cantidad"
                data-index="${index}"
                data-accion="mas">
                +
              </button>

            </div>

            <strong class="carrito-subtotal">
              ${formatoPrecio(
                item.precio *
                item.cantidad
              )}
            </strong>

            <button
              type="button"
              class="eliminar-carrito"
              data-index="${index}">
              Eliminar
            </button>

          </div>

        </div>

      `).join("");

  }


  // ==============================
  // TOTAL
  // ==============================

  const total =
    carrito.reduce(
      (suma, item) =>
        suma +
        item.precio *
        item.cantidad,
      0
    );


  // ==============================
  // CANTIDAD TOTAL
  // ==============================

  const cantidadTotal =
    carrito.reduce(
      (suma, item) =>
        suma +
        item.cantidad,
      0
    );


  if (carritoTotal) {

    carritoTotal.textContent =
      formatoPrecio(total);

  }


  if (cantidadCarrito) {

    cantidadCarrito.textContent =
      cantidadTotal;

  }

}


// ==============================
// CONTROLES DEL CARRITO
// ==============================

if (carritoProductos) {

  carritoProductos.addEventListener(
    "click",
    e => {

      // ==============================
      // SUMAR / RESTAR
      // ==============================

      const botonCantidad =
        e.target.closest(
          ".cambiar-cantidad"
        );


      if (botonCantidad) {

        const index =
          Number(
            botonCantidad.dataset.index
          );


        const accion =
          botonCantidad.dataset.accion;


        if (!carrito[index]) return;


        if (accion === "mas") {

          carrito[index].cantidad++;

        }


        if (
          accion === "menos" &&
          carrito[index].cantidad > 1
        ) {

          carrito[index].cantidad--;

        }


        actualizarCarrito();

        return;
      }


      // ==============================
      // ELIMINAR
      // ==============================

      const botonEliminar =
        e.target.closest(
          ".eliminar-carrito"
        );


      if (botonEliminar) {

        const index =
          Number(
            botonEliminar.dataset.index
          );


        carrito.splice(index, 1);

        actualizarCarrito();

      }

    }
  );

}


// ==============================
// WHATSAPP
// ==============================

if (enviarWhatsApp) {

  enviarWhatsApp.addEventListener(
    "click",
    () => {

      if (carrito.length === 0) {

        alert(
          "Todavía no agregaste productos al carrito."
        );

        return;
      }


      let mensaje =
        "Hola! Quisiera consultar por el siguiente pedido:\n\n";


      carrito.forEach(item => {

        mensaje +=
          `• ${item.nombre}\n`;


        if (item.color) {

          mensaje +=
            `  Color: ${item.color}\n`;

        }


        mensaje +=
          `  Cantidad: ${item.cantidad}\n`;


        mensaje +=
          `  Precio: ${formatoPrecio(
            item.precio
          )}\n\n`;

      });


      const total =
        carrito.reduce(
          (suma, item) =>
            suma +
            item.precio *
            item.cantidad,
          0
        );


      mensaje +=
        `Total estimado: ${formatoPrecio(
          total
        )}\n\n`;


      mensaje +=
        "Quisiera consultar disponibilidad y coordinar la compra.";


      const numeroWhatsApp =
        "543364349826";


      const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
          mensaje
        )}`;


      window.open(
        url,
        "_blank"
      );

    }
  );

}


// ==============================
// INICIO
// ==============================

mostrarProductos();

mostrarDestacados();

actualizarCarrito();
