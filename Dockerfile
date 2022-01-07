FROM node:alpine
WORKDIR /app
COPY app/ .
COPY package.json .
COPY cleanPackageJson.js .
RUN node ./cleanPackageJson.js
ENV NODE_ENV=production
RUN npm i
EXPOSE 3000
USER node
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]