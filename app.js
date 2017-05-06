var express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');

var app = express();

app.use(bodyParser.raw({ type: '*/*', limit: '200mb' }));

require('express-readme')(app, {
  filename: 'README.md',
  routes: ['/', '/readme']
});

app.post('/mp3', function (req, res) {
	console.log("REQ BODY LENGTH: " + req.body.length);
	try {
		fs.writeFileSync('sample.wav', req.body, function(err) {console.log("ERROR " + err)});
	} catch (e) {
		res.status(500)
		res.send('ERROR GETTING BODY ' + e)	
	}
	try {	
		mp3Command = new ffmpeg('sample.wav')
		.audioCodec('libmp3lame')
     		.on('error', function(err) {
   			console.log('An error occurred: ' + err.message);
  	   	 })
		 .on('end', function() {
		 	 fs.unlinkSync('sample.wav');
		 	 res.download('sample.mp3');
  	   	 })
  	     	.save('sample.mp3');	
	} catch (e) {
		res.status(500)
		res.send('ERROR WRITING MP3 ' + e)
	}	
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})