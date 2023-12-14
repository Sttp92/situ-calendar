## Situ Calendar

Se debe clonar el repositorio en local. Para hacerlo correr, se debe tener preinstalado lo necesario para correr una aplicación de nodejs, en este caso, instalar node v20.9.0

La aplicación usa una base de datos dummy con json-server, la cual se encuentra en la carpeta *data*, de forma que imita una base de datos y configura automáticamente algunos endpoints. Debe correr este servidor localmente para que la aplicación funcione. El esquema de la base de datos esta adjunta en el correo.

Para correr la aplicación en local en el directorio principal del proyecto:

```bash
npm install
npm run dev
```

En paralelo, correr json-server en otra terminal en el mismo directorio:

```bash
npm install -g json-server
json-server --watch --port 4000 ./data/db.json
```

## Flujo

Esta aplicación solo alcanzó a abordar la filtración por especialidad, la visualización de horas disponibles y el agendamiento de un servicio o cita.

## Variables de ambiente

Se utiliza la variable de ambiente NEXT_PUBLIC_LOGGED_USER_ID en el archivo .env.local para simular el ID de un paciente loggeado en la aplicación. De forma de obtener sus datos para el formulario de agendamiento de hora.
