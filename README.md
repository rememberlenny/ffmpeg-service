# postMp3 ffmpeg web service

An FFMPEG web service for converting audio files to mp3

### USAGE

POST to this service using Postman a Curl command.

Include audio file as binary in request body 

Postman Ex: 

https://www.dropbox.com/s/5exywmaj5o7cdn3/postMp3%20Postman%20Usage.png?dl=0

Curl Ex:

> curl --request POST --data-binary "@file.wav"  127.0.0.1:3000/ -o file.mp3

## Local Installation

Download Repository from 

Requires FFMPEG installation to use locally.

> https://ffmpeg.org/download.html

Install node, dependencies, and start app:

> $ sh install-node-npm.sh
> $ npm install
> $ node app.js
