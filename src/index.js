const fastifyCors = require('fastify-cors');
const fastify = require('fastify')({
    logger: true
});

fastify.register(fastifyCors, {
    origin: "*",
    methods: ["POST", "GET", "OPTIONS"]
});

fastify.get('/api/app', async (request, reply) => {
    reply.type('application/json').code(200);
    return { body: { hello: 'world' } }
});

fastify.listen(8080, (err, address) => {
    if (err) throw err;
    // Server is now listening on ${address}
})
