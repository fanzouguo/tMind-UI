const shelljs = require('shelljs');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const pkg = fs.readJsonSync('./package.json');

const pathUser = process.env.HOME || process.env.USERPROFILE || '';

const frm = (str, len = 2) => {
	return `${str}`.padStart(len, '0');
};

const getDate = () => {
	const _dt = new Date();
	const _y = _dt.getFullYear();
	const _m = frm(_dt.getMonth() + 1);
	const _d = frm(_dt.getDate());
	const _hh = frm(_dt.getHours());
	const _mi = frm(_dt.getMinutes());
	const _ss = frm(_dt.getSeconds());
	return `${_y}-${_m}-${_d} ${_hh}:${_mi}:${_ss}`;
};

const getGitCmd = (memo, pkg, tagThis = false, branch = 'main') => {
	const urlStr = (pkg && pkg.repository && (pkg.repository.url || '')) || '';
	const _arr = ['git add .'];

	if (tagThis) {
		_arr.push(`git tag -a v${pkg.version} -m "${memo}"`);
	}
	_arr.push(`git commit -m "(${getDate()})${memo}"`);

	if (tagThis) {
		_arr.push('git push origin --tags');
	}

	if (urlStr) {
		_arr.push(`git push -u origin ${branch}`);
	}
	return _arr;
};

const getRepo = async () => {
	if (pathUser) {
		const fData = fs.readFileSync(path.resolve(pathUser, '.tMind'), {
			encoding: 'utf-8'
		});
		const lines = fData.split(/\r?\n/);
		let pathRepo = '';
		for (const v of lines) {
			if (v.startsWith('ROOT_REPO')) {
				const [a, b] = v.split('=');
				if (a && b) {
					pathRepo = b;
				}
			}
		}
		if (pathRepo && pkg.name) {
			console.log(pathRepo);
			shelljs.cd(pathRepo);
			shelljs.exec(`yarn add ${pkg.name}`);
			const resYarn = shelljs.exec(`yarn list ${pkg.name}`);
			console.log(resYarn);
		} else {
			console.log('未找到根仓库路径');
		}
		console.log('Done!');
	}
};

/* eslint-disable no-unused-vars */
const execBuild = (async () => {
	const { commitMemo } = await inquirer.prompt({
		type: 'input',
		message: '请输入提交备注',
		name: 'commitMemo'
	});
	const { tagThis } = await inquirer.prompt({
		type: 'confirm',
		message: '是否根据该版本创建 tag 标签',
		name: 'tagThis',
		default: false
	});
	const _arr = getGitCmd(commitMemo, pkg, tagThis);
	for (const v of _arr) {
		shelljs.exec(v);
		// console.log(v);
	}
	const missPrivateDef = (typeof pkg.private === 'undefined');
	const allowPublish = (!missPrivateDef && !pkg.private);
	if (missPrivateDef) {
		/* eslint-disable no-console */
		console.log('项目的 package.json 未指定 private 字段，若需要提交 NpmJs，请先配置该字段');
	} else {
		if (allowPublish) {
			shelljs.exec('yarn publish');
			// console.log('请输入 yarn publish 开始发布');
			console.log('项目已同时发布/更新到 www.npmjs.com');
		} else {
			console.log('项目的 package.json 中 private 字段已申明为： false，该项目不允许发布到 npm.');
		}
	}
	await getRepo();
})();
