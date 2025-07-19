# Usar la imagen base de Node.js
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto
EXPOSE 3030

# Comando para ejecutar la aplicación
CMD ["npm", "start"]