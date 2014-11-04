var express = require('express'),
	path 	= require('path'),
    api	    = require('./api'),
    app     = express();

app
    .use(express.static('./public'))
    .use('/api',api)
    .get('*', function (req, res) {
    	res.sendFile(path.join(__dirname, '../contacts/public', 'main.html'));
    })
    .listen(3000);
