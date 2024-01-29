# Etapa de compilación
FROM node:14-alpine as build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /App

# Copiar el package.json y el package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar todas las dependencias, incluidas las de desarrollo
RUN npm ci

# Copiar el resto de los archivos al directorio de trabajo
COPY . .

# Compilar la aplicación
RUN npm run build

# Etapa de producción
FROM node:14-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /App

# Copiar solo los archivos necesarios para la etapa de producción desde la etapa de compilación
COPY --from=build /App/package*.json ./
COPY --from=build /App/dist ./dist

# Instalar solo las dependencias de producción
RUN npm ci --only=production

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación en modo de producción
CMD ["npm", "run", "start"]
