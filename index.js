// import json server ---- import in variable
const jsonServer = require('json-server')

// create server for mp
const MPServer = jsonServer.create()

// create middleware used by JSON Server
const middleware = jsonServer.defaults()

// setup route for json file
const route = jsonServer.router('db.json')

// setup port for running server app
const PORT = 3000 || process.env.PORT


MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server started at port ${PORT} and waiting for client request`);
})
