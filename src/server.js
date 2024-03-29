const Hapi = require("@hapi/hapi");
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                credentials: true
            }
        },
    });

    server.route(routes);

    try {
        await server.start();
        console.log(`server berjalan pada ${server.info.uri}`);
    } catch (error) {
        console.log("aplikasi error " + error.message);
    }
};

try {
    init();
} catch (error) {
    console.log("aplikasi error " + error.message);
}