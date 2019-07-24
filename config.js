exports.app = {
    PORT : 8080,
    MONGODB_URI: 'mongodb://' + process.env.MONGO_HOST + ':27017/userDatabase',
    logErrors: true
};
