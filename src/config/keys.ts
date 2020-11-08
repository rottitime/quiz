export type KeyProps = {
    port: number,
    pusherAppId: string,
    pusherKey: string,
    pusherSecret: string,
    pusherCluster: string
}

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}