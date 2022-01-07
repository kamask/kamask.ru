FROM node:alpine
WORKDIR /app
COPY app/ .
COPY package.json .
COPY cleanPackageJson.js .
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
RUN node ./cleanPackageJson.js
ENV NODE_ENV=production
RUN npm i
EXPOSE 3000
ENTRYPOINT [ "./entrypoint.sh" ]