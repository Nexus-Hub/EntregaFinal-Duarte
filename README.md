### Nombre del Proyecto
El nombre de mi proyecto es NEXUSTORE.

### Descripción del Proyecto
El proyecto es un e-commerce desarrollado en React gracias a la ayuda del profesor Horacio y los tutores de Coderhouse que lo hicieron posible

El sitio permite a los usuarios realizar compras de productos y guardar la información de la compra en una colección de Firebase. Proporciona una experiencia de compra intuitiva y fácil de usar para los clientes, al tiempo que utiliza la funcionalidad de Firebase para almacenar y recuperar datos.

### Características
El e-commerce cuenta con las siguientes características principales:

Catálogo de productos: Los usuarios pueden explorar el catálogo de productos disponibles. Cada producto se muestra con su nombre e imagen en la página principal, adicionalmente un detalle que contiene la descripción y el precio.

Carrito de compras: Los usuarios pueden agregar productos al carrito de compras mientras navegan por los detalles de los productos del catálogo. El carrito muestra una lista de los productos seleccionados, junto con la cantidad, subtotal y el precio total de la compra.

Proceso de compra: Una vez que los usuarios han seleccionado los productos deseados, pueden proceder al proceso de compra. Aquí, se recopilan los datos del usuario, como la dirección de correo validada por doble 'input' del usuario y la información de contacto.

Conexión con Firebase: Cuando se realiza una compra, los detalles de la compra se guardan en una colección de Firebase. Esto permite almacenar de forma segura la información de la compra para su posterior procesamiento y seguimiento.

Notificaciones al agregar productos: Al agregar un producto al carrito de compras, se utilizan toasts de la librería React Hot Toast para mostrar notificaciones visuales al usuario. Estas notificaciones brindan feedback inmediato sobre la acción realizada.

Este e-commerce en React ofrece una solución completa para que los usuarios realicen compras de forma segura y eficiente, mientras se aprovechan las capacidades de Firebase para el almacenamiento de datos. Es un proyecto que pienso mantener en constante desarrollo, agregagando nuevas características y mejoras en futuras versiones para que me quede como experiencia.


### Librerías Utilizadas
En el desarrollo de este proyecto, además de las libreria de tailwind para CSS y las que se instalan predeterminadamente al levantar el proyecto con CRA, se han utilizado las siguientes librerías:

- Firebase (firebase): Esta librería se utiliza para conectar la página con la base de datos. En el código, se importaron varios módulos específicos de Firestore, como addDoc, collection, getDocs, getDoc, query, where y doc. Estas funciones se utilizan para realizar operaciones de lectura y escritura en la base de datos, como agregar documentos, obtener colecciones, realizar consultas, etc.

- React Hot Toast (react-hot-toast): Esta librería se utiliza para mostrar notificaciones de estilo toast en la página. Se importó el componente toast y { Toaster } desde 'react-hot-toast'. En el código, se utiliza para mostrar toasts al agregar un producto al carrito. Los toasts proporcionan una forma visualmente agradable de informar al usuario sobre ciertas acciones o eventos en la aplicación.

- React Router DOM (react-router-dom): Esta librería se utiliza para manejar la navegación y la creación de rutas en una aplicación React. En el código, se utilizan varias funciones y componentes proporcionados por React Router DOM. Algunos de ellos incluyen useParams para acceder a los parámetros de la URL, NavLink y Link para crear enlaces de navegación, BrowserRouter para envolver la aplicación con el enrutador, Route para definir rutas y componentes asociados, Routes para agrupar varias rutas y useNavigate para la navegación programática.

### Instalación
Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina local con git clone https://github.com/Nexus-Hub/EntregaFinal-Duarte.git

2. Instala las dependencias con npm install

3. Ejecuta el proyecto con npm start

### Uso
En el siguiente link podras usar y simular mi proyecto: https://entregafinal-duarte.up.railway.app/