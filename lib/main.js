const fs = require('fs')
const path = require('path')

const JSON5 = require('json5')
const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

// use : 
if (false) {
    const keybindings = new Config('keybindings.json') // Create a file or return the file
    keybindings.set('Z', 'Move up')
    keybindings.get('D') // -->  'Move left'
    keybindings.exists('name') // --> false
    keybindings.set('player-name', 'dorian')

    const settings = Config.create('settings', { path: '../', mode: 'r+' })
}

/**
 * TODO : 
 *   - use json5 and own extension .config
 *      
 */


/**
 * @private
 * @param  {Error} err fs write error
 * @throw {ConfigWriteError}
 */
function handleWriteError(err) {
    throw new ConfigWriteError(err)
}

/**
 * @private
 * @param  {Error} err fs read error
 * @throw {ConfigReadError}
 */
function handleReadError(err) {
    throw new ConfigReadError(err)
}



/**
 * @typedef { Object } OptionsObject
 * @property { string } [extension = 'json5'] The extensions to use
 * @property { string } [filename = 'config.json5'] The name of the default config file
 * @property { string } [folder = './config'] The folder of the default config file
 * @property { boolean } [overwrite = false] If the file should be re-create during initialization
 */
const optionsDefault = {
    extension: 'json5',
    filename: 'config.json5',
    folder: path.resolve(pkgDir.sync(), './config/'),
    overwrite: false
}


/**
 * @class Config
 */
class Config {

    constructor(name, opts) {
        this.options = { ...optionsDefault, ...opts }
        this.filename = `${name}.${this.options.extension.charAt(0) === '.' ? this.options.extension.substring(1) : this.options.extension}`
        this.file = path.resolve(this.options.folder, this.filename)
        if (!fs.existsSync(this.file) || this.options.overwrite) this._create(name)
        this.content = this.getContent()
        this.save()
    }

    static create(name, opts) {
        return new Config(name, { overwrite: true, ...opts })
    }

    _create(name) {
        const dirPath = path.dirname(this.file)
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
        if (!fs.existsSync(this.file)) fs.writeFileSync(this.file, '{}', handleWriteError)
        this.write({ _name: name })
    }

    write(data) {
        switch (typeof data) {
            case 'string':
                fs.writeFileSync(this.file, data, { encoding: 'utf-8' })
                break
            case 'object':
                fs.writeFileSync(this.file, JSON5.stringify(data, null, '\t'), { encoding: 'utf-8' })
                break
            default:
                throw new ConfigWriteError(`Unknown data type : ${typeof data}`)
        }
    }

    save() {
        if (this.content && this.content !== this.getContent()) {
            this.write(this.content)
        }
    }

    read() {
        return fs.readFileSync(this.file, 'utf-8')
    }

    getContent() {
        const data = this.read()
        if (data && typeof data === 'string' && data.length) {
            return JSON5.parse(data)
        } else {
            return {}
        }
    }

    // TODO : nested property
    set(key, value) {
        if (typeof key === 'string') {
            if (key.charAt(0) === '_') {
                throw new ConfigKeyError('Key cannot start with an _')
            }
            this.content[key] = value
        } else if (typeof key === 'object') {
            const obj = key
            this.setObj(obj)
        }
    }

    setObj(object) {
        if (Object.keys(object).filter(key => key.charAt(0) === '_').length) {
            throw new ConfigKeyError('Key cannot start with an _')
        }
        this.content = { ...this.content, ...object }
    }

    get(key) {
        if (!key) return this.content
        if (key in this.content) {
            return this.content[key]
        } else {
            throw new ConfigKeyError(`Unable to find the key : ${key}`)
        }
    }

    static get version() {
        return VERSION
    }

}

class ConfigWriteError extends Error {
    constructor(msg, ...args) {
        super(msg, ...args)
    }
}

class ConfigReadError extends Error {
    constructor(msg, ...args) {
        super(msg, ...args)
    }
}

class ConfigKeyError extends Error {
    constructor(msg, ...args) {
        super(msg, ...args)
    }
}

module.exports = Config