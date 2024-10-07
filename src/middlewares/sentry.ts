import * as Sentry from '@sentry/node';

// Initialize Sentry
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
});

export default (config, { strapi }) => {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            // Capture the error with Sentry
            Sentry.captureException(err);
            // Re-throw the error to let Strapi handle it
            throw err;
        }
    };
};
