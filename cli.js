#!/usr/bin/env node

'use strict';

const yeoman = require('yeoman-environment');
const generator = require('./app');

const env = yeoman.createEnv();
env.registerStub(generator, 'iotaplate:init');
env.run('iotaplate:init');
