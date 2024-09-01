

const fastify=require('fastify')({logger:true});
const app = require('./app');
const Port=5000;

// fastify.get('/',(res,rep)=>{
//     rep.send("kyu bhai ");
// })
// plugin is the special object 
// the moment we register this app plugin with fastify object
// then automatically in paremters it will take fastify objects

fastify.register(app);


fastify.listen({port:Port},(err)=>{
    if(err){
        fastify.log.error(err);
        return process.exit(1);
    }
    console.log(`server started at ${Port}`);
})

