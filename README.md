# ffmpeg web service

A web service for converting audio files with ffmpeg

Node.js, Express, FFMPEG, Docker

## Deployed Service

Deployed dev branch on a $5 Digital Ocean droplet (1 GB Memory / 25 GB Disk / SFO2 - Ubuntu Docker 18.06.1~ce~3 on 18.04) 

[157.230.129.167:3000](http://157.230.129.167:3000)

## Continued Development

[Task Board](https://trello.com/b/I5Eh8JnX/ff-ffmpeg-service)

## API

`POST /mp3` - Convert audio file in request body to mp3 and return result for download

`POST /m4a` - Convert audio file in request body to mp3 and return result for download

`GET /`, `GET /readme` - Web Service Readme

### POST /mp3, POST /m4a

POST to /mp3 or /m4a using Postman or a Curl command:

Include audio file as binary in request body

Postman Ex:

https://www.dropbox.com/s/5exywmaj5o7cdn3/postMp3%20Postman%20Usage.png?dl=0

Curl Ex:

```bash
curl --request POST --data-binary "@file.wav" 127.0.0.1:3000/mp3 -o file.mp3
```

see test/curl_test.bash for an example use via bash script

## Installation

Requires local Node and FFMPEG installation.

1. Install FFMPEG https://ffmpeg.org/download.html

2. Install node https://nodejs.org/en/download/
   Using homebrew:

```bash
$ brew install node
```

## Running Service Locally

Navigate to project directory and:

Install dependencies:

```bash
$ npm install
```

Start app:

```bash
$ node app.js
```

Run unit tests with Mocha:

```bash
$ npm run test
```

or

```bash
$ ./node_modules/.bin/mocha
```

## Running Service in a Docker Container Locally

Requires Docker

Install Docker

```
https://www.docker.com
```

Build Docker Image from Dockerfile with a set image tag. ex: bm/ffmpeg

```bash
$ docker build -t <image>/<tag> .
```

Launch Docker Container from Docker Image, exposing port 49160

```bash
$ docker run -p 49160:3000 -d '<image>'/'<tag>'
```

### Developing Service In Running Container via Docker-Compose

```bash
docker-compose up -d --build

docker ps # note <CONTAINER ID>

# enter bash prompt for docker container
docker exec -it <CONTAINER ID> /bin/bash

vi README.md # edit file in vi, ex. README.md
```

## Deploying Service on Digital Ocean Droplet with Docker

```
$ - local machine
# - ssh-ed machine
```

I am using a 4GB RAM, 2 vCPU Droplet for test deployments
I use the Digital Ocean Docker App Preset Droplet

Create your Droplet

SSH into your Droplet

```bash
$ ssh root@<droplet-ip>
```

Clone this repo

```bash
# git clone https://github.com/benmangold/ffmpeg-service.git
```

```bash
# cd ffmpeg-service
```

Build Docker Image from Dockerfile with a set image tag. ex: bm/ffmpeg

```bash
# docker build -t <image>/<tag> .
```

Launch Docker Container from Docker Image, exposing port 49160

```bash
# docker run -p 3000:3000 -d '<image>'/'<tag>'
```
