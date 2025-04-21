"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async throwError(ctx) {
        try {
            // Error thrown intentionally to test Sentry configuration.
            throw new Error('[!] Sentry error test.');
        }
        catch (err) {
            ctx.throw(500, "Test error occurred.");
        }
    },
};
