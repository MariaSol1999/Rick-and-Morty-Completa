Rick & Morty App
INTRO
En base a lo practicado en la homework Exercises, vamos a crear rutas con sus respectivas solicitudes HTTP que se van a ir guardando en un array que simulará nuestra base de datos. En esta homework consumiremos la información de la API de Rick & Morty que luego enviaremos a nuestro frontend.


👩‍💻 EJERCICIO 1
Instalar Express y body-parser
Debes instalar express con npm install express.

Corrobora que se ha instalado abriendo tu archivo package.json dentro de dependencies, sección que se ha creado automáticamente cuando instalaste express o también puedes verla dentro de la carpeta node_modules.

Además vas a necesitar instalar body-parser con npm i body-parser, esta librería es necesaria para que puedas recibir la información por body.

Una vez la tengas instalada copia y pega este snippet de código dentro del archivo app.js:

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

👩‍💻 EJERCICIO 2
Crear servidor con Express
Anteriormente habías creado tu servidor con node puro en el archivo app.js, ahora lo cambiaremos para utilizar directamente el framework Express.

Define una constante que llamada express y en ella guarda la función require que incluya el módulo express, de esta forma podemos usar el paquete Express que instalamos.

Define una segunda constante llamada app en la que guardes la ejecución de express, ello se encarga de manejar las solicitudes y respuestas cliente-servidor.

const express = require("express");
const app = express();
😎 Acabas de crear tu servidor con Express!!


👩‍💻 EJERCICIO 3
Crear Rutas
Anteriormente habíamos creado una ruta get que obtiene el personaje de Rick and Morty por id mediante un archivo que tenemos llamado data.js, bien vamos a modificarlo:

a. En app tenemos los métodos HTTP listos para utilizar, por ende si nesitamos conseguir la data, necesitamos el método get, este método recibe dos parámetros: el objeto request de ahora en más req y el objeto response de ahora en más res.

b. Ahora, en vez de consumir los datos de data.js, lo vamos a hacer de la API de Rick & Morty con la url https://rickandmortyapi.com/api/character

c. Crea la ruta get/rickandmorty/character/{id} y obtén solo los datos de la API https://rickandmortyapi.com/api/character/{detailId} que precisamos para el componente Card.jsx en el front, estos datos son:

id
name
species
gender
image
Crea una segunda ruta get/rickandmorty/detail/{detailId}, obtén los datos de la API https://rickandmortyapi.com/api/character/{detailId} y envíalo al componente Detail.jsx:

name
status
species
gender
origin
image
Hint: Recuerda que los llamados a la API son asíncronos.

Define una constante llamada fav que sea un arreglo vacío y crea las siguientes rutas:

a. GET/rickandmorty/fav, que obtenga los personajes guardados en el arreglo fav.

b. POST/rickandmorty/fav, que guarde los personajes en el arreglo fav.

c. DELETE/rickandmorty/fav/${id}, que elimine el personaje en el arreglo fav a partir del id que recibe por parámetro.

Hint: Recuerda modularizar en tu carpeta controllers como lo aprendiste en la homework 03-Promises con los archivos getCharById.js y getCharDetail.js


👩‍💻 EJERCICIO 4
Iniciar servidor
Crea un archivo llamado start.js en el que importes el servidor que se encuentra configurado en el archivo app.js, desde este archivo levantaremos el servidor.

El al archivo package.json debes cambiar el script start donde su valor sea start.js

Es hora de iniciar el servidor, con el método listen de express, coloca a escuchar el servidor en el puerto 3001.


👩‍💻 EJERCICIO 5
Conectar rutas con frontend
Por último, recordemos que en el front habíamos configurado la ruta para que consuma los datos desde nuestro servidor.

Ahora dirígete a la carpeta front y haz los siguiente cambios:

En el componente Detail donde llamamos a la API de Rick & Morty, cambia la ruta get que actualmente llama a la ruta https://rickandmortyapi.com/api/character/ que está en este momento por esta: http://localhost:3001/rickandmorty/detail

En la action para agregar favorito, ahora debes enviar los personajes al endpoint POST/rickandmorty/fav.

En la action para eliminar favorito, ahora debes enviar el personaje a eliminar al endpoint DELETE/rickandmorty/fav.

✨✨Llegamos al final de esta homework creamos nuestro servidor y tres rutas para nuestro front!! 🚀🚀