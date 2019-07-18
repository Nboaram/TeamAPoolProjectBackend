#! /bin/sh

until nc -z database 3306; do
    echo "waiting for db"
    sleep 1
done

node src/app.js
