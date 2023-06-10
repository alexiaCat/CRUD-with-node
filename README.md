# Animación Japonesa

Este proyecto consiste en crear un servidor con Node.js para gestionar información sobre animes almacenados en un archivo JSON. Se utilizará Express para crear el servidor, Nodemon para reiniciar automáticamente el servidor cuando se realicen cambios y Mocha con Chai y Chai-HTTP para realizar pruebas.

## Requerimientos 🚀

* Node.js: Asegúrate de tener Node.js instalado en tu sistema.
* Express: Se utilizará Express para crear el servidor.
* Nodemon: Nodemon se utilizará para reiniciar automáticamente el servidor cuando se realicen cambios.
* Mocha, Chai y Chai-HTTP: Estas herramientas se utilizarán para realizar pruebas en el servidor.

## Ejecución y Pruebas 🛠️

Para ejecutar el servidor, sigue estos pasos:

1. Clona este repositorio.

2. Ejecuta `npm install` para instalar las dependencias.

3. Ejecuta `npm run dev` para iniciar el servidor con Nodemon.

4. El servidor de ejecutará en http://localhost:3000.

5. Puedes probar las siguiente ruta:
    GET: http://localhost:3000/animes/ obtiene el JSON de animes
    GET: http://localhost:3000/animes/:id obtén anime por ID

Pruebas:

1. Ejecuta el siguiente comando `npm test` para ejecutar las pruebas.


¡Diviértete! 🎌📺