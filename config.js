module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	URL: process.env.BASE_URL || 'http://localhost:3000',
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb://Glebasty1:Glebasty1@ds159073.mlab.com:59073/restify',
	JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};
