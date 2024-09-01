async function testRoute(fastify,option) {
    fastify.get('/ping',(req,res)=>{
        return res.send({data:"pong"});
    })
}

module.exports=testRoute;