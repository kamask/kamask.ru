#! /bin/sh

rm -rf public/*

cp -R static/* public/
cp -R client/runtime/ public/

exec npm run start