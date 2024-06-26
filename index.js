let libros = [
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel Garcia Marquez',
    genero: 'Literatura Colombiana',
    idioma: 'Español',
    precio: 47000,
    formato: 'Libro',
    isbn: 9789588886213,
    descripcion: 'Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.',
    estado: 'nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '05/06/1967',
    editorial: 'Editorial 2',
    paginas: 93,
    dimensiones: 'ancho: 13cm - alto: 19cm',
    peso: '50grs'
  },
  {
    titulo: 'El color de las cosas',
    autor: 'Martin Panchaud',
    genero: 'comics',
    idioma: 'Español',
    precio: 89000,
    formato: 'Libro',
    isbn: 9788419437716,
    descripcion: 'Simon Hope es un muchacho inglés de 14 años, un poco rollizo, del que los chavales del barrio se burlan a menudo. Un día, después de que una adivina le revele cuál será el caballo ganador de la Royal Ascot, decide apostar ingenuamente todos los ahorros familiares... ¡y gana 16 millones de libras! Pero, al volver a casa, Simon descubre que, al contrario de lo que pensaba, sus problemas no han hecho más que empezar...',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '25/01/2024',
    editorial: 'Editorial 2',
    paginas: 85,
    dimensiones: 'Ancho: 18cm - Alto: 24cm',
    peso: '50grs'
  },
  {
    titulo: 'MITOS Y LEYENDAS DE LA ANTIGUA GRECIA',
    autor: 'Joaquin Arias',
    genero: 'Mitologia',
    idioma: 'Español',
    precio: 100000,
    formato: 'Libro',
    isbn: 9788419599353,
    descripcion: 'Descubre los mitos y leyendas de la Grecia clásica que han sentado las bases de la identidad de la cultura occidental: el poder de Zeus, la fuerza de Heracles, el drama de Antígona, la voracidad del Minotauro o la audacia de Prometeo, gracias a esta completa selección de relatos ilustrados.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '22/01/2024',
    editorial: 'Editorial 2',
    paginas: 99,
    dimensiones: 'Ancho: 19cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: 'EVA MORDIO LA MANZANA',
    autor: 'Flavia Dos Santos',
    genero: 'Sexologia',
    idioma: 'Español',
    precio: 49900,
    formato: 'Libro',
    isbn: 9786287667723,
    descripcion: 'En una sociedad que ha avanzado tanto en las últimas décadas, la discriminación y los dobles estándares siguen existiendo con respecto a las mujeres de más de cincuenta años y continúan haciéndoles un daño irreparable que no les permite vivir plenas y liberadas en lo que debería ser la mejor época de sus vidas. ',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '12/07/2023',
    editorial: 'Editorial 2',
    paginas: 153,
    dimensiones: 'Ancho: 19cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: 'ANATOMIA DEL MAL',
    autor: 'JORDI WILD',
    genero: 'Crónica y testimonio',
    idioma: 'Español',
    precio: 55000,
    formato: 'libro',
    isbn: 9786287634411,
    descripcion: 'Un viaje inquietante por el oscuro y tenebroso mundo del crimen y la maldad. Los secretos más oscuros de los criminales más crueles y salvajes.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '11/03/2024',
    editorial: 'Editorial 2',
    paginas: 300,
    dimensiones: 'Ancho: 15cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: 'PERPENDICULAR AL SOL',
    autor: 'VALENTINE CUNY LE CALLET',
    genero: 'Comics',
    idioma: 'Español',
    precio: 189000,
    formato: 'libro',
    isbn: 9788419409140,
    descripcion: 'En 2016, con tan solo diecinueve años, Valentine Cuny-Le Callet inicia un intercambio epistolar con Renaldo McGirth. Condenado a muerte por un crimen cometido a sus dieciocho años, Renaldo lleva encerrado más de una década en el corredor de la muerte en una prisión de Florida. De todas sus cartas, de las imágenes que intercambian nace este relato de sus vidas paralelas.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '12/04/2024',
    editorial: 'Editorial 3',
    paginas: 437,
    dimensiones: 'Ancho: 19cm - Alto: 25cm',
    peso: '50grs'
  },
  {
    titulo: 'LA VERDADERA HISTORIA DE COLOMBIA',
    autor: 'HERNANDO GOMEZ BUENDIA',
    genero: 'Historia colombiana',
    idioma: 'Español',
    precio: 90000,
    formato: 'libro',
    isbn: 9786287589124,
    descripcion: 'Este libro es una crónica, una radiografía y una guía para entender al país.  La verdadera historia de Colombia es un libro apasionante y retador, resultado de toda una vida de investigación y trabajo, que recoge los hechos más importantes de la historia de Colombia para entender con perspectiva los grandes dilemas de nuestro presente. Una revisión y ampliación rigurosa de lo presentado en Entre la independencia y la pandemia',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '04/04/2024',
    editorial: 'Editorial 3',
    paginas: 819,
    dimensiones: 'Ancho: 13cm - Alto: 20cm',
    peso: '50grs'
  },
  {
    titulo: 'TECNOLOGIA Y BARBARIE',
    autor: 'MICHEL NIEVA',
    genero: 'Sociología',
    idioma: 'Español',
    precio: 74000,
    formato: 'libro',
    isbn: 9788433922137,
    descripcion: 'La tecnología ha sido siempre documento de civilización, pero también de barbarie. Este libro expone algunos casos, como el del zoológico fundado en Hamburgo por Carl Hagenbeck, que en 1875 exhibió indígenas porque resultaban más económicos de importar que los animales; o el de Eduardo Kac, que en 2001 utilizó la ingeniería genética como lenguaje plástico en su obra Génesis, al encriptar una frase traducida a morse en pares de ADN e inocularla en bacterias. Según Michel Nieva, la historia de la literatura argentina se funda sobre esa fricción: la tecnología como cruce entre civilización y barbarie',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '02/22/2022',
    editorial: 'Editorial 3',
    paginas: 50,
    dimensiones: 'Ancho: 14cm - Alto: 21cm',
    peso: '50grs'
  },
  {
    titulo: 'DERROTA MUNDIAL EDICION Nº48',
    autor: 'BORREGO SALVADOR',
    genero: '--',
    idioma: 'Español',
    precio: 90000,
    formato: 'libro',
    isbn: 9789588220970,
    descripcion: 'Hace 53 años se publicó la primera edición de este libro. No es usual que un libro se mantenga por tanto tiempo en la atención del público, ni menos cuando es objeto de acérrimo boicot.Tal vigencia se debe a que su tesis ha resultado exacta, comprobada por los acontecimientos desde 1945 hasta la fecha',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '10/10/2023',
    editorial: 'Editorial 3',
    paginas: 627,
    dimensiones: 'Ancho: --cm - Alto: --cm',
    peso: '50grs'
  },
  {
    titulo: 'EL RESPLANDOR',
    autor: 'STEPHEN KING',
    genero: 'Suspenso y terror',
    idioma: 'Español',
    precio: 49000,
    formato: 'libro',
    isbn: 9789588789774,
    descripcion: 'REDRUM. Esa es la palabra que Danny había visto en el espejo. Y aunque no sabía leer, entendió que era un mensaje de horror. Tenía cinco años, y a esa edad pocos niños son conscientes de que los espejos invierten las imágenes, y menos aún diferencian entre realidad e ilusión. Pero Danny tenía pruebas de que sus fantasías relacionadas con la imagen del espejo acabarían cumpliéndose: REDRUM.. MURDER, asesinato. Su madre estaba pensando en el divorcio, y su padre, obsesionado con algo muy malo, tan malo como la muerte y el suicidio, necesitaba aceptar la propuesta de hacerse cargo de aquel hotel de leju, de más de cien habitaciones y aislado por la nieve, durante seis meses. Hasta el deshielo iban a estar solos. ¿Solos?...',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '12/11/2023',
    editorial: 'Editorial 3',
    paginas: 651,
    dimensiones: 'Ancho: 12cm - Alto: 19cm',
    peso: '50grs'
  },
  {
    titulo: 'DE MI PARA MI LA TORMENTA PASARA',
    autor: 'NACARID PORTAL ARRAEZ CHRISS BRAUND',
    genero: 'Autoayuda y superación',
    idioma: 'Español',
    precio: 75500,
    formato: 'libro',
    isbn: 9786287606456,
    descripcion: 'Nunca es tarde para otorgarte una segunda oportunidad. Por mucho tiempo te has juzgado, y en este viaje, uno de los destinos será el perdón. Mereces cerrar los ojos abrazando tus logros, aunque te sientas muy lejos de la meta, estás avanzando por la escalera de la vida, donde cada peldaño ya es un triunfo. Si estás leyendo esto, es porque vamos a intentarlo. Vamos a trabajar por volver a estar bien. Vamos a dejar de juzgarnos por cada error y entender que los problemas, aunque traten de derrumbarnos, no lo lograrán.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '11/11/2023',
    editorial: 'Editorial 4',
    paginas: 282,
    dimensiones: 'Ancho: 15cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: 'COMETAS EN EL CIELO',
    autor: 'KHALED HOSSEINI',
    genero: 'Literatura universal',
    idioma: 'Español',
    precio: 85000,
    formato: 'libro',
    isbn: 9788419346599,
    descripcion: 'Un relato inolvidable. Una historia conmovedora que se nos prende al corazón. Nos llena y nos habita para siempre la memoria del alma.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '25/02/2024',
    editorial: 'Editorial 4',
    paginas: 382,
    dimensiones: 'Ancho: 16cm - Alto: 24cm',
    peso: '50grs'
  },
  {
    titulo: 'LA LEALTAD DE LOS CANIBALES',
    autor: 'DIEGO TRELLES PAZ',
    genero: 'Literatura latinoamericana',
    idioma: 'Español',
    precio: 90000,
    formato: 'libro',
    isbn: 9788433922090,
    descripcion: 'Al igual que en La colmena de Camilo José Cela, que retrata la España dictatorial de los años cuarenta a través de las peripecias de los clientes de un café madrileño, el epicentro de esta extraordinaria obra es una taberna en el centro de Lima, en la que confluyen numerosos personajes cuyos destinos trágicos se entrelazan a un ritmo vertiginoso, hasta conformar un enorme conjunto de vidas cruzadas.',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '28/03/2024',
    editorial: 'Editorial 4',
    paginas: 378,
    dimensiones: 'Ancho: 14cm - Alto: 21cm',
    peso: '50grs'
  },
  {
    titulo: 'LA FORMA EN QUE SUENAS',
    autor: 'JUAN MARTIN FIERRO',
    genero: 'Música',
    idioma: 'Español',
    precio: 69000,
    formato: 'libro',
    isbn: 9786287715226,
    descripcion: 'El autor de este libro lleva más de 25 años escribiendo sobre música en varios medios de comunicación y, por supuesto, ha tenido acceso a grandes figuras de distintos géneros, como los salseros Rubén Blades, Cheo Feliciano, Papo Lucca o Issac Delgado',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '29/01/2024',
    editorial: 'Editorial 4',
    paginas: 351,
    dimensiones: 'Ancho: 15cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: 'GLOBALISMO',
    autor: 'AGUSTIN LAJE',
    genero: 'Política general',
    idioma: 'Español',
    precio: 72900,
    formato: 'libro',
    isbn: 9781400331864,
    descripcion: 'En su libro "Globalismo: Ingeniería social y control total en el siglo XXI", Agustín Laje desafía las ideas convencionales al ofrecer una visión más profunda sobre los nuevos métodos de dominación global',
    estado: 'Nuevo',
    ubicacion: 'Armenia',
    fecha_publicacion: '13/03/2023',
    editorial: 'Editorial 4',
    paginas: 285,
    dimensiones: 'Ancho: 15cm - Alto: 23cm',
    peso: '50grs'
  },
  {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    genero: "Ficción",
    idioma: "Español",
    precio: 80000,
    formato: "Tapa dura",
    isbn: "9781234567890",
    descripcion: "Una novela clásica de la literatura española.",
    estado: "Nuevo",
    ubicacion: "Madrid, España",
    fecha_publicacion: "1605-01-16",
    editorial: "Editorial 5",
    paginas: 1200,
    dimensiones: "15x5x20 cm",
    peso: "1.2 kg"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ciencia ficción",
    idioma: "Inglés",
    precio: 40000,
    formato: "Tapa blanda",
    isbn: "9789876543210",
    descripcion: "Una novela distópica sobre un futuro totalitario.",
    estado: "Usado",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1949-06-08",
    editorial: "Editorial 5",
    paginas: 328,
    dimensiones: "13x2x20 cm",
    peso: "0.5 kg"
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    idioma: "Español",
    precio: 47000,
    formato: "Tapa dura",
    isbn: "9788497592208",
    descripcion: "Una obra maestra de la literatura latinoamericana.",
    estado: "Nuevo",
    ubicacion: "Bogotá, Colombia",
    fecha_publicacion: "1967-06-05",
    editorial: "Editorial 5",
    paginas: 417,
    dimensiones: "14x4x21 cm",
    peso: "0.8 kg"
  },
  {
    titulo: "Matar a un ruiseñor",
    autor: "Harper Lee",
    genero: "Ficción",
    idioma: "Inglés",
    precio: 65000,
    formato: "Tapa blanda",
    isbn: "9780061120084",
    descripcion: "Una novela sobre la injusticia racial en el sur de Estados Unidos.",
    estado: "Nuevo",
    ubicacion: "Nueva York, Estados Unidos",
    fecha_publicacion: "1960-07-11",
    editorial: "Editorial 5",
    paginas: 324,
    dimensiones: "14x2x21 cm",
    peso: "0.6 kg"
  },
  {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    idioma: "Inglés",
    precio: 60000,
    formato: "Tapa dura",
    isbn: "9780261102385",
    descripcion: "Una épica saga de aventuras en la Tierra Media.",
    estado: "Nuevo",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1954-07-29",
    editorial: "Editorial 5",
    paginas: 1178,
    dimensiones: "16x6x24 cm",
    peso: "2.0 kg"
  },

]


//Constante para el nuevo libro el cual sera agregado
const libroNuevo = {
  titulo: "LA GRANJA DEL BORREGO",
  autor: "CARLOS ALBERTO DIAZ",
  genero: "Literatura juvenil",
  idioma: "Español",
  precio: 52000,
  formato: "Tapa blanda",
  isbn: "9786287675100",
  descripcion: '¡Bienvenid@s a la Granja del Borrego! En este libro conocerán la historia del granjero más divertido de todos: ¿sí saben quién es? ¡Nada más y nada menos que el hijo favorito de "La mamá de las recetas"! Además, descubrirán todas las herramientas que necesitan para vivir en una granja y los secretos más asombrosos de la naturaleza. Y no solo eso, también se convertirán en l@s mejores amig@s de las gallinas empoderadas, de la vaca Rosalía y del cerdo Lolo. ¿Están list@s para empezar a sembrar sus propios alimentos en casa? ¿A hacer su propio compost, a identificar las expresiones de los caballos (eso es importante, granjer@s), a reconocer si un huevo está viejo o fresco y a ser más amigables con el entorno que los rodea? No esperen más, ¡alisten sus botas, sus sombreros y únanse al movimiento granjero!',
  estado: "Nuevo",
  ubicacion: "Cali",
  fecha_publicacion: "29/04/2024",
  editorial: "LIBRO NUEVO",
  paginas: 188,
  dimensiones: "Ancho: 15cm - Alto: 23cm",
  peso: "50grs"
};




function showMainMenu() {
  //Mensaje Primer Menu
  let message = "Elige un Menu:\n";
  message += "1. Menu Libros\n";
  message += "2. Menu iteraciones\n";
  message += "3. Menu spreed \n";
  message += "4. Menu Filter \n";
  message += "5. Menu Sort \n";
  message += "6. Menu Encadenados \n";
  message += "7. Menu Find \n";
  message += "8. Salir";

  // Mensaje y Opcion del Usuario
  let choice = prompt(message);


  switch (choice) {
    case '1':

      showSubMenu();
      break;
    case '2':
      //SUBMENU 2 'ITERACIONES'
      showSubMenu2();
      break;
    case '3':
      showSubMenu3();
      break;
    case '4':
      showSubMenu4();
      break;
    case '5':
      showSubMenu5();
      break;
    case '6':
      showSubMenu6();
      break;
    case '7':
      showSubMenu7();
      break;
    case '8':
      alert("Saliendo del menú...");
      break;
    default:
      alert("Opción no válida");
      showMainMenu(); // Volver al menú principal en caso de opción no válida
  }
}

function showSubMenu() {
  // Definir el mensaje con las opciones del submenú

  let subMessage = "Elige una  opcion :\n";
  subMessage += "1. Mostrar Pila de libros\n";
  subMessage += "2. Añadir un libro a la pila\n";
  subMessage += "3. Quitar El ultmo libro de la Pila\n";
  subMessage += "4. Mostrar la longitud de la pila\n";
  subMessage += "5. Regresar al menú principal";

  //FUNCION MOSTRAR 
  function mostrarLibros(libros) {
    console.table(libros);
  }
  //FUNCION AÑADIR
  function añadirLibro(libros, libro) {
    libros.push(libro);
    console.log(`Libro añadido: ${libro.titulo}`);
  }
  //FUNCION QUITAR
  function quitarLibro(libros) {
    const libroQuitado = libros.pop();
    if (libroQuitado) {
      console.log(`Libro quitado: ${libroQuitado.titulo}`);
    } else {
      console.log("No hay libros para quitar.");
    }
  }
  //FUNCION LONGITUD
  function mostrarLongitud(libros) {
    console.log(`Longitud del array: ${libros.length}`);
  }

  // Mostrar el mensaje y capturar la elección del usuario
  let subChoice = prompt(subMessage);



  switch (subChoice) {
    case '1':
      mostrarLibros(libros);
      showSubMenu();
      break;
    case '2':
      añadirLibro(libros, libroNuevo);
      showSubMenu();
      break;
    case '3':
      quitarLibro(libros);
      showSubMenu();
      break;
    case '4':
      mostrarLongitud(libros);
      showSubMenu();
      break;
    case '5':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu();
  }
}

//SUBMENU2

function showSubMenu2() {


  let subMessage = "Elige una  opcion :\n";
  subMessage += "1. Mostrar 1 iteracion\n";
  subMessage += "2. Mostrar 10 iteraciones\n";
  subMessage += "3. Regresar al menú principal";

  //MOSTRAR ITERACION

  const LibroMethod = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      autor: libros.autor,
      editorial: libros.editorial,
      precio: libros.precio
    }
  });

  //MOSTRAR 10 ITERACIONES

  const iteraciones = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      autor: libros.autor,
      paginas: libros.paginas

    }
  });


  const iteraciones2 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      dimensiones: libros.dimensiones,
      precio: libros.precio

    }
  });

  const iteraciones3 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Estado: libros.estado,
      Genero: libros.genero

    }
  });

  const iteraciones4 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Fecha: libros.fecha_publicacion,
      Isbn: libros.isbn

    }
  });

  const iteraciones5 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Ubicacion: libros.ubicacion,
      Editorial: libros.editorial

    }
  });

  const iteraciones6 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Descripcion: libros.descripcion,
      Idioma: libros.idioma

    }
  });

  const iteraciones7 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Formato: libros.formato,
      Peso: libros.peso

    }
  });

  const iteraciones8 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Paginas: libros.paginas,
      Precio: libros.precio

    }
  });

  const iteraciones9 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Idioma: libros.idioma,
      Isbn: libros.isbn

    }
  });

  const iteraciones10 = libros.map((libros) => {
    return {
      titulo: libros.titulo,
      Editorial: libros.editorial,
      Autor: libros.autor

    }
  });

  let subChoice2 = prompt(subMessage);

  switch (subChoice2) {
    case '1':
      console.table(LibroMethod);
      showSubMenu2();
      break;
    case '2':
      console.table(iteraciones);
      console.table(iteraciones2);
      console.table(iteraciones3);
      console.table(iteraciones4);
      console.table(iteraciones5);
      console.table(iteraciones6);
      console.table(iteraciones7);
      console.table(iteraciones8);
      console.table(iteraciones9);
      console.table(iteraciones10);
      showSubMenu2();
    case '3':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu();
  }
}


//SUBMENU 3

function showSubMenu3() {


  let subMessage = "Elige una  opcion :\n";
  subMessage += "1. Agregar descuento a todos los libros\n";
  subMessage += "2. Lista de libros\n";
  subMessage += "3. Regresar al menú principal";


  //METHODS + SPREED OPERATOR

  const descuento = libros.map((libros) => {
    return {
      ...libros,
      descuento: 20
    }
  });
  const descuento1 = libros.map((libros) => {
    return {
      ...libros,
      descuento: 20
    }
  })
    .map((libros) => {
      return {
        titulo: libros.titulo,
        Autor: libros.autor,
        Editorial: libros.editorial,
        Precio: libros.precio,
        Descuento: libros.descuento
      }
    });


  let subChoice3 = prompt(subMessage);



  switch (subChoice3) {
    case '1':
      console.table(descuento);
      showSubMenu3();
      break;
    case '2':
      console.table(descuento1);
      showSubMenu3();
      break;
    case '3':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu();
  }
}

//FUNCION SUBMENU4
function showSubMenu4() {


  let subMessage = "Elige una  opcion :\n";
  subMessage += "1. Libros con un precio mayor a $50,000\n";
  subMessage += "2. Resumen de libros Mayor numero de paginas\n";
  subMessage += "3. Regresar al menú principal";


  //METHODS FILTER

  const LibroCaro = libros.filter((libros) => {
    return libros.precio > 50000
  })

  const paginasLibro = libros
    .filter((libros) => {
      return libros.paginas > 400;
    })
    .map((titulo) => {
      return {
        titulo: titulo.titulo,
        autor: titulo.autor,
        editorial: titulo.editorial,
        Paginas: titulo.paginas
      }
    })



  let subChoice4 = prompt(subMessage);


  switch (subChoice4) {
    case '1':
      console.table(LibroCaro);
      showSubMenu4();
      break;
    case '2':
      console.table(paginasLibro);
      showSubMenu4();
      break;
    case '3':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu();
  }
}

//FUNCION SUBMENU5

function showSubMenu5() {


  let subMessage = "Elige una  opcion :\n";
  subMessage += "1. Resumen de libros Mayor numero de paginas\n";
  subMessage += "2. Regresar al menú principal";


  //METHODS SORT

  const librosMayorMenor = libros.sort((a, b) => b.paginas - a.paginas)
    .map((titulo) => {
      return {
        titulo: titulo.titulo,
        Paginas: titulo.paginas
      }
    })


  let subChoice5 = prompt(subMessage);



  switch (subChoice5) {
    case '1':
      console.table(librosMayorMenor);
      showSubMenu5();
      break;
    case '2':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu();
  }
}


//FUNCION SUBMENU6

function showSubMenu6() {
  let subMessage = "Elige una opción:\n";
  subMessage += "1. Mostrar libros precio mayor a 60000 pesos\n";
  subMessage += "2. Mostrar libros menos de 100 paginas\n";
  subMessage += "3. Mostrar libros precio mayor a 70000 pesos\n";
  subMessage += "4. Mostrar libros mayor numero de paginas\n";
  subMessage += "5. Regresar al menú \n";


  function librosCaros() {
    return libros.filter(libro => libro.precio > 60000)
      .map(libro => ({ titulo: libro.titulo, autor: libro.autor, precio: libro.precio }));
  }

  function librosMenosDe100Paginas() {
    return libros.filter(libro => libro.paginas < 100)
      .map(libro => ({ titulo: libro.titulo, autor: libro.autor, editorial: libro.editorial, paginas: libro.paginas }));
  }

  function librosCarosOrdenados() {
    return libros.filter(libro => libro.precio > 70000)
      .sort((a, b) => b.precio - a.precio)
      .map(libro => ({ titulo: libro.titulo, autor: libro.autor, precio: libro.precio }));
  }

  function librosMayorMenorPaginas() {
    return libros.filter(libro => libro.paginas > 0)
      .sort((a, b) => b.paginas - a.paginas)
      .map(libro => ({ titulo: libro.titulo, autor: libro.autor, editorial: libro.editorial, paginas: libro.paginas }));
  }
  let subChoice = prompt(subMessage);

  switch (subChoice) {
    case '1':
      console.table(librosCaros());
      showSubMenu6();
      break;
    case '2':
      console.table(librosMenosDe100Paginas());
      showSubMenu6();
      break;
    case '3':
      console.table(librosCarosOrdenados());
      showSubMenu6();
      break;
    case '4':
      console.table(librosMayorMenorPaginas());
      showSubMenu6();
      break;
    case '5':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu4();
  }



}
//SUBMENU7
function showSubMenu7() {
  let subMessage = "Elige una opción:\n";
  subMessage += "1. Buscar Libro por Titulo\n";
  subMessage += "2. Buscar Libro por Autor\n";
  subMessage += "3. Buscar Libro por Fecha_Publicacion\n";
  subMessage += "4. Buscar Libro por Genero\n";
  subMessage += "5. Buscar Libro por Idioma\n";
  subMessage += "6. 10 Iteraciones diferentes\n";
  subMessage += "7. Regresar al menú \n";

//Buscar un objeto por titulo

  function tituloLibro(){
    return libros.find(libros => libros.titulo === 'ANATOMIA DEL MAL');
  }

  //Buscar un objeto por autor

  function tituloAutor(){
    return libros.find(libros => libros.autor === 'Joaquin Arias');
  }

  //Buscar un objeto por fecha

  function tituloFecha(){
    return libros.find(libros => libros.fecha_publicacion === '1954-07-29');
  }

  //Buscar un objeto por genero

  function tituloGenero(){
    return libros.find(libros => libros.genero === 'Ficción');
  }

  //Buscar un objeto por idioma

  function tituloIdioma(){
    return libros.find(libros => libros.idioma === 'Inglés');
  }

  //10 iteraciones FIND

  let iteracion = libros.find((libros) => {
    return libros.titulo === "Harper Lee";
  });

  let iteracion2 = libros.find((libros) => {
    return libros.paginas === "328";
  });

  let iteracion3 = libros.find((libros) => {
    return libros.dimensiones === "14x4x21 cm";
  });

  let iteracion4 = libros.find((libros) => {
    return libros.peso === "1.2 kg";
  });

  let iteracion5 = libros.find((libros) => {
    return libros.ubicacion === "Londres, Reino Unido";
  });

  let iteracion6 = libros.find((libros) => {
    return libros.estado === "Usado";
  });

  let iteracion7 = libros.find((libros) => {
    return libros.formato === "Tapa blanda";
  });

  let iteracion8 = libros.find((libros) => {
    return libros.isbn === "9789876543210";
  });

  let iteracion9 = libros.find((libros) => {
    return libros.editorial === "Editorial 5";
  });

  let iteracion10 = libros.find((libros) => {
    return libros.precio === 85000;
  });


  let subChoice = prompt(subMessage);

  switch (subChoice) {
    case '1':
      console.table(tituloLibro());
      showSubMenu7();
      break;
    case '2':
      console.table(tituloAutor());
      showSubMenu7();
      break;
    case '3':
      console.table(tituloFecha());
      showSubMenu7();
      break;
    case '4':
      console.table(tituloGenero());
      showSubMenu7();
      break;
    case '5':
      console.table(tituloIdioma());
      showSubMenu7();
      break;
    case '6':
      console.table(iteracion);
      console.table(iteracion2);
      console.table(iteracion3);
      console.table(iteracion4);
      console.table(iteracion5);
      console.table(iteracion6);
      console.table(iteracion7);
      console.table(iteracion8);
      console.table(iteracion9);
      console.table(iteracion10);
      showSubMenu7();
      break;
    case '7':
      showMainMenu();
      break;
    default:
      alert("Opción no válida");
      showSubMenu4();
  }



}



// Inicialmente mostrar el menú principal
showMainMenu();