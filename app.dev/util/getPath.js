const path = require('path');
const __ROOTPJ__ = path.resolve(process.cwd());

// 获取指定配置的路径
module.exports = {
	getPath: (...subRoot) => {
		const _arr = [__ROOTPJ__];
		if (subRoot && subRoot.length) {
			_arr.push(...subRoot);
		}
		return _arr.join('/');
	},
	pjRoot: path.resolve(process.cwd()).replace(/\\\\/g, '/').replace(/\\/g, '/')
};
