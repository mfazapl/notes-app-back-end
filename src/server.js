const Hapi = require('@hapi/hapi');
const ruotes = require('./routes');


const init = async() => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors:{
                origin:['*'],
            }
        }
    });

    server.route(ruotes);

    await server.start();
    console.log(`Server berjalan ${server.info.uri}`);
}


init();

