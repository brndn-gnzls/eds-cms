export default ({ env }) => ({
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true, // Expose CRUD operations for collections.
            playgroundAlways: true, // Non-production.
            depthLimit: 7, // Limit query depth.
            amountLimit: 100, // Limit returned items.
        },
    },
    'users-permission': {
        config: {
            jwtSecret: env('JWT_SECRET'),
            jwt: {
                expiresIn: '1h',
            },
        },
    },
});
