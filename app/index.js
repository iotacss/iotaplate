'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	init() {
		this.fs.copy(`${__dirname}/templates/**`, this.destinationPath());
	}

	install() {
		this.npmInstall(['iotacss'], {save: true});
	}
};
