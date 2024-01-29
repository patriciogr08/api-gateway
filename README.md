# API GATEWAY 

Aplicacion para centralizar el consumo de diferentes microservicios 

### Comenzando 🚀 

Copia y conectate al repositorio localmente para poder remitir actualizaciones que lleves a cabo e integrar cambios que hagan otros. 
Introduce el comando git clone y la URL del repositorio en tu linea de comando:
git clone https://apgonzalez@bitbucket.org/devtyt/api-gateway.git

## Pre-requisitos 📋
Nota: tener configurado correctamente los diferentes microservicios a consumir que previamente se encuentre levantados 
la configuración se encuentre en SRC/ROUTES/servicesProxy.json

1. NodeJs
2. NPM
3. Docker
4. Docker-Compose

## Construido con 🛠️
* [Microsoft Visual Studio](https://visualstudio.microsoft.com/es/vs/community/) - El IDE utilizado

## Deployment 📦

Para levantar el proyecto debera ejecutar los siguientes pasos:
1. npm install
2. npm run build
3. npm run dev

Nota: el proyecto se levantara en la direccion IP del servidor Docker en el puerto 3000

## Production 📦

Para levantar el proyecto debera ejecutar los siguientes pasos:
1. docker-compose up -d 

Nota: el proyecto se levantara en la direccion IP del servidor Docker en el puerto 3000

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://bitbucket.org/devtyt/api-gateway/branches/)


## Autores ✒️
Este proyecto fue desarrollado inicialmente por:
* [**Alex Gonzalez**](https://apgonzalez@bitbucket.org/) - Backend, documentación 
