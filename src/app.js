const fastifyPlugin=require('fastify-plugin');


/**
 * @param{Fastify Object} fastify
 * @param {*} options
 */
// currently this is normal js function 

async function app(fastify ,options){
    fastify.register(require('@fastify/cors'));
    // register test router
    fastify.register(require('./routes/testroute'));
}
// now it has become a fastify plugin

module.exports=fastifyPlugin(app);