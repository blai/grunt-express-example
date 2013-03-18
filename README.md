# grunt-express-example

An example for how to use socket.io and express using [grunt-express](https://github.com/blai/grunt-express). The example will:

* reload the browser (when opened) using [grunt-contrib-livereload](https://github.com/gruntjs/grunt-contrib-livereload) and [grunt-regarde](https://github.com/yeoman/grunt-regarde)
* restart the server using the built-in feature of `grunt-express`, and it will do so when any of the server script is changed, or when you 'touch' the `.server` file in project root (using a `grunt-regarde` watcher setup, see `Gruntfile.js`)


## Getting Started

1. `git clone git://github.com/blai/grunt-express-example.git`
2. `npm install`
3. `grunt`

To observe the server restart automatically when server script is changed, update `./app/server.js` line #15 - 18 changes to following, for example

```javascript
app.get('/hello', function(req, res){
    // res.send('hello!');
    res.send('bonjour!');
});
```

To observe the browser refresh, first load http://localhost:9000/hello, then change the `<body>` tag of `app/templates/hello.dust` to following, save the change and you should see browser automatically re-fresh.
```
<body>
    <h1>{greeting}!</h1>
</body>
```

## Documentation
_(Coming soon)_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Brian Lai  
Licensed under the MIT license.
