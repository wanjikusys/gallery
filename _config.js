var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Admin:12345@ipcluster.xlxiwyt.mongodb.net/?retryWrites=true&w=majority&appName=IpCluster',
    development: 'mongodb+srv://Admin:12345@ipcluster.xlxiwyt.mongodb.net/?retryWrites=true&w=majority&appName=IpCluster',
    test: 'mongodb+srv://Admin:12345@ipcluster.xlxiwyt.mongodb.net/?retryWrites=true&w=majority&appName=IpCluster',
}
module.exports = config;
