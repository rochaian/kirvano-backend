# Use uma imagem base oficial do Node.js, com a versão 18
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte para o contêiner
COPY . .

# Exponha a porta em que o Express será executado
EXPOSE 3000

# Defina o comando de inicialização do contêiner
CMD [ "npm", "start" ]
