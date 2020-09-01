const fs = require('fs')
const path = require('path')
const os = require('os')

const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

// use : 
/**
 * const keybindings = new Config('keybindings.json') // Create a file or return the file
 * keybindings.set('Z', 'Move up')
 * keybindings.get('D') // -->  'Move left'
 * keybindings.exists('name') // --> false
 * keybidings.set('player-name', 'dorian')
 */

/**
 * TODO : 
 *   - use json5 and own extension .config
 *      
 */

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