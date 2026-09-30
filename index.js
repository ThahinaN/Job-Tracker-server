// jsonServer creation

const jsonServer = require('json-server')
const jobserver = jsonServer.create()
const router = jsonServer.router('db.json')  //router() method used to mention where we want to store the jsonServer
const middleware = jsonServer.defaults()

// mention port for json server

const PORT = 4000

jobserver.use(middleware)
jobserver.use(router)

// if the port working then show this message

jobserver.listen(PORT,()=>{
    console.log(`Job-server started running at PORT:${PORT} successfully`);

})
