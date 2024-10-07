export default [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'global::sentry',
        config: {},
    },
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
