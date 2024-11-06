# Použijeme Node.js runtime jako základní image
FROM node:18-alpine

# Nastavíme pracovní adresář v kontejneru
WORKDIR /app

# Zkopírujeme package.json a package-lock.json (pokud je k dispozici)
COPY package*.json ./

# Nainstalujeme závislosti
RUN npm install

# Globálně nainstalujeme 'serve' pro servírování vybuilděných souborů
RUN npm install -g serve

# Zkopírujeme zbytek aplikačního kódu do kontejneru
COPY . .

# Přidáme argument pro proměnnou prostředí
ARG VITE_API_URL

# Nastavíme proměnnou prostředí
ENV VITE_API_URL=$VITE_API_URL

# Postavíme aplikaci
RUN npm run build

# Zpřístupníme port 3000 ven
EXPOSE 3000

# Servírujeme vybuilděné soubory pomocí 'serve'
CMD [ "serve", "-s", "dist" ]