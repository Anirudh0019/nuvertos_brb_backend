FROM node:22-alpine
WORKDIR /app
COPY . /app/

RUN npm install --omit=dev
EXPOSE 5000
CMD [ "npm","run","dev" ]