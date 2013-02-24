# grunt-express-example

An example for how to use socket.io and express using [grunt-express](https://github.com/blai/grunt-express)

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

## Documentation
_(Coming soon)_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Brian Lai  
Licensed under the MIT license.
