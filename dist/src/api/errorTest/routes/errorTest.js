"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
