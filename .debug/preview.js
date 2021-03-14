const shelljs = require('shelljs');
const path = require('path');

const execPreview = () => {
	const pathBase = path.resolve(process.cwd());
	// shelljs.cp('-f');
	console.log(pathBase);
	shelljs.cp('-f', path.resolve(pathBase, 'lib/*'), path.resolve(pathBase, 'examples/.libTemp/'));
};

execPreview();
console.log('开发包更新完成!');
