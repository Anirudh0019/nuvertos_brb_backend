FROM node:22-alpine
WORKDIR /app
COPY . /app/

RUN npm install --omit=dev
RUN node ./app/import-csv.js
EXPOSE 5000
CMD [ "npm","run","dev" ]