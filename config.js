// Archivo para gestión de variables globales

module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000
    },
    post:{
        host: process.env.HOST_PORT || 'localhost',
        port: process.env.POST_PORT || 3002,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecret',
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'JdaoqCOEJ7',
        password: process.env.MYSQL_PASS || 'WQzLTbU3ZL',
        database: process.env.MYSQL_DB || 'JdaoqCOEJ7',
    },
    mysqlService:{
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService:{
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis:{
        host: process.env.REDIS_HOST || 'redis-15704.c44.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '15704',
        user: process.env.REDIS_USER || 'default',
        password: process.env.REDIS_PASS || 'er93pekWM7PMdHfIZ1eNnJa2Xdjr7DGI',
    }
}