# Hito 1

En este hito hemos definido los pasos que vamos a seguir en la realización del proyecto. Para ello, hemos fijado los [milestones](#Milestones), que corresponden con los objetivos que debemos ir completando a lo largo de las siguientes entregas, y las [historias de usuario](#historias-de-usuario), que describen un caso de uso de la aplicación asociado a un problema que soluciona un Milestone. Tambien hemos declarado algunas de las clases que compondran nuestro proyecto.

## Milestone

<ul>
    <li><a href="https://github.com/DavidCh33/CC/milestone/6">[M1] Comentarios y puntuaciones<a>: Permitir a los usuarios hacer comentarios relacionados con los juegos y poder puntuar en función de una escala numérica.
    <li><a href="https://github.com/DavidCh33/CC/milestone/5">[M2] Añadir usuarios<a>: Implementación del sistema de login y creación de los usuarios.</li>
    <li><a href="https://github.com/DavidCh33/CC/milestone/8">[M3] Gestión de la página<a>: Los administradores podrán añadir nuevos juegos y borrar comentarios.</li>
    <li><a href="https://github.com/DavidCh33/CC/milestone/1">[M4] Motor de búsqueda<a>: Creación del motor de búsqueda de los juegos en función de diferentes parámetros como tiempo medio de partida, número de jugadores o mecánicas que implementa</li>
    <li><a href="https://github.com/DavidCh33/CC/milestone/7">[M5] Lista de juegos interesados<a>: Implementar una lista de aquellos juegos que los usuarios tienen en posesión o que les llame la atención, permitiendo que los usuarios añadan un juego en su ventana correspondiente.</li>
</ul>

## Historias de Usuario

<ul>
    <li><a href="https://github.com/DavidCh33/CC/issues/1">[HU1] Realizar búsquedas<a>: Quiero poder realizar una búsqueda de juegos de mesa dependiendo de mis gustos personales, para encontrar nuevos juegos que me pudieran interesar.
    <li><a href="https://github.com/DavidCh33/CC/issues/2">[HU2] Escribir comentarios<a>: Me gustaría poder comentar sobre algún determinado juego de mesa, para hablar sobre algo que me ha gustado especialmente sobre un juego.</li>
    <li><a href="https://github.com/DavidCh33/CC/issues/3">[HU3] Borrar comentarios<a>: Como administrador, quiero tener la posibilidad de borrar algún comentario que haya realizado algún usuario, puesto que puede no ser apropiado o no estar relacionado sobre el juego en cuestión.</li>
    <li><a href="https://github.com/DavidCh33/CC/issues/4">[HU4] Lista juegos<a>: Como amante de los juegos de mesa, me gustaría mantener un listado de aquellos juegos que tengo en posesión o que me han llamado la atención, para poder tenerlos en cuenta cuando vaya a realizar una compra.</li>
    <li><a href="https://github.com/DavidCh33/CC/issues/5">[HU5] Añadir juegos<a>: Como administrador, me gustaría añadir nuevos juegos que vayan siendo publicados por las editoriales, para que los usuarios puedan dar su opinión sobre ellos, o bien que se añadan de forma automática.</li>
    <li><a href="https://github.com/DavidCh33/CC/issues/6">[HU6] Crear usuario<a>: Me gustaría poder crearme una cuenta de usuario, para poder utilizar las funcionalidades de la aplicación.</li>
    <li><a href="https://github.com/DavidCh33/CC/issues/7">[HU7] Mostrar información de los juegos de mesa<a>: Me gustaría poder visualizar información referente a los juegos de mesa, como puede ser el rango de jugadores que pueden participar en una partida, para conocer mejor el juego con el fin de saber si estoy interesado en él.</li>
</ul>

## Clases

Hemos creado diferentes clases que formarán parte de la lógica de negocio:

<ul>
    <li>BoardGame: representa un juego de mesa.</li>
    <li>User: usuario del sistema</li>
    <li>Comment: comentarios que realizan los usuarios sobre los juegos de mesa, tiene asociado un id del juego de mesa y del usuario que lo ha realizado.</li>
</ul>

Tambien hemos definido parte de la estructura del proyecto, como el archivo <a href="../app.js">app.js<a> que se encargará de desplegar la aplicación y <a href="../package.json">package.json<a> en el que se mostraran las dependencias. En el hito 0 ya definimos el archivo .gitignore para no seguir en git los binarios generados. 