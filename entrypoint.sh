#! /bin/sh
# apt install -y netcat
until nc -z ${MONGO_HOST} 27017; do
    echo "waiting for db"
    sleep 1
done

node Index.js
