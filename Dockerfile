# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Compilar o projeto TypeScript (se aplicável)
RUN npm run build

# Expor a porta que a aplicação irá rodar
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]