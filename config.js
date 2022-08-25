// Archivo para gestión de variables globales

module.exports = {
    api: {
        port: process.env.API_PORT || 3000
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
    }
}