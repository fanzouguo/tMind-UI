const cfgSvr = require('../app.conf/conf.Svr.json');

class DevUtil {
	constructor() {
		this.isProd = Boolean(['production', 'prod'].includes(process.env.NODE_ENV));
		this.cfgSvr = cfgSvr;
	}
}

module.exports = DevUtil;
