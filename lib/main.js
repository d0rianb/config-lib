const fs = require('fs')
const path = require('path')
const os = require('os')

const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

/**
 * @class Config
 */
class Config {

}

class ConfigError extends Error {
    constructor(msg, ...args) {
        super(msg, ...args)
    }
}

module.exports = Config