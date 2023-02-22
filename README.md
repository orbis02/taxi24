<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Taxi24 API

- Tome su taza de café ☕ mientras configura esta API ☕


#### Requerimientos tecnicos.

- `node.js`
- `Nestjs`
- `PostgreSQL`

**Nota:** *Este proyecto fue creado en macOs Ventura, las versiones de las tecnología usadas  para este proyecto fueron:  Node (v16.15.0), Nest (9.0.0) y PostgreSQL (14.1)


### Pasos para configurar el ambiente
- Inicie en su manejador de base de datos para Postgres, crea la base de datos  con el nombre que prefieras,  en este caso puedes usar DBTaxi24.

- Configure las credenciale de la base de datos, ubicado en el archio  `config.ts`  este archivo se encuentra en la siguiente ruta src/helpers/ igual debe proporcionar el precio por kilomentros. 

- Usando la consola (cmd, powershell o terminal) ingrese a la carpeta del proyecto para iniciar el proyecto ejecuatando los comandos.
$ npm i
Una vez completado el comando anteriro ejecutar el siguiente:
$ npm run start:dev

- Luego de que el proyecto haya iniciado, dirijace nuevamente  a su editor de codigo y  cambie el parametro  migrationsRun: false a true en el archivo app.module.ts , salve los cambios. Este paso es requerido para insertar la data requerida para realizar las pruebas de los puntos solicitados.


Para probar la aplicación ingrese al siguiente link:

http://localhost:3000/api



**Nota**
Se invirtió alrededor de 8 horas en la creación y codificación del proyecto incluyendo la documentación.

Muchas gracias por la oportunidad .... fue divertido.

- Author - [Orbis Polanco](https://www.linkedin.com/in/orbis-polanco-martinez-a81165122)


