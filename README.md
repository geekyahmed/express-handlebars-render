## Express-Handlebars-Render

Express-handlebars-render is an express middleware that allows developers to automatically render your handlebars file in your views directory.

It saves you the stress of all writing codes to render each of your handlebars files in your nodejs application.

## Getting Started
Install **Express-handlebars-render** with NPM by running this command.

    $ npm install express-handlebars-render
In your **app.js** file, include the middleware: 

    const express = require('express')
    const renderHbs = require('express-handlebars-render')
    const app = express()
    
    app.use(express())
	
	//Include middleware here
	app.use(renderHbs())

## Contributing
This package is free to use and opensource for all developers. If you wish to contribute to this project, just follows this instructions:

 - Fork this project on Github
 - Make a PR with a detailed description of what your PR does.
 
 Well, thank you for reading this and I'll be glad if you star this repo on Github.


