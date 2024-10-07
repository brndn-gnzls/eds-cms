export default {
    routes: [
        {
            method: 'GET',
            path: '/error-test',
            handler: 'api::error-test.error-test.throwError',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};