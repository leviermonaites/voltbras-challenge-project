FROM node
WORKDIR /usr/app
COPY package.json .
RUN npm install
RUN npm install sucrase nodemon
COPY . .
EXPOSE 3306
EXPOSE 4000