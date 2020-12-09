FROM mongo:4.4 

COPY ./createUsers.js /docker-entrypoint-initdb.d/createUsers.js 

EXPOSE 27017

CMD ["mongod", "--auth"]
