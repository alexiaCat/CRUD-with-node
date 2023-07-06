# Animación Japonesa

Este proyecto consiste en crear un servidor con Node.js para gestionar información sobre animes almacenados en un archivo JSON. Se utilizará Express para crear el servidor, Nodemon para reiniciar automáticamente el servidor cuando se realicen cambios y Mocha con Chai y Chai-HTTP para realizar pruebas.

## Requerimientos 🚀

* Node.js: Asegúrate de tener Node.js instalado en tu sistema.
* Express: Se utilizará Express para crear el servidor.
* Nodemon: Nodemon se utilizará para reiniciar automáticamente el servidor cuando se realicen cambios.
* Mocha, Chai y Chai-HTTP: Estas herramientas se utilizarán para realizar pruebas en el servidor.
* hbs: Se ha agregado el paquete hbs para implementar vistas en el proyecto.

## Ejecución y Pruebas 🛠️

Para ejecutar el servidor, sigue estos pasos:

1. Clona este repositorio.

2. Ejecuta `npm install` para instalar las dependencias.

3. Ejecuta `npm run dev` para iniciar el servidor con Nodemon.

4. El servidor de ejecutará en http://localhost:3000.

5. Puedes probar las siguiente rutas:
   - **GET: http://localhost:3000/animes** - Obtiene el JSON de todos los animes almacenados.
   - **GET: http://localhost:3000/animes/search/:id** - Obtiene los detalles de un anime específico según su ID.
   - **POST: http://localhost:3000/animes/addAnime** - Agrega un nuevo anime. Se deben proporcionar los datos del anime en el cuerpo de la solicitud.
   - **PUT: http://localhost:3000/animes/modifyAnime** - Modifica un anime existente. Se deben proporcionar los nuevos datos del anime en el cuerpo de la solicitud. Es necesario especificar el ID del anime a modificar en la URL.
   - **DELETE: http://localhost:3000/animes/deleteAnime** - Elimina un anime existente. Es necesario especificar el ID del anime a eliminar en la URL.

Pruebas:

1. Para ejecutar las pruebas al CRUD, ejecuta el siguiente comando: `npm run test`.


¡Diviértete! 🎌📺