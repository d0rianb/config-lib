const fs = require('fs')
const path = require('path')

const JSON5 = require('json5')
const pkgDir = require('pkg-dir')

const VERSION = require('../package.json').version

const blockingErrors = false

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
    if (blockingErrors) {
        throw new ConfigWriteError(err)
    } else {
        console.error(err)
    }
}

/**
 * @typedef {Object} OptionsObject
 * @property {string} [extension = 'json5'] The extensions to use
 * @property {string} [filename = 'config.json5'] The name of the default config file
 * @property {string} [folder = './config'] The folder of the default config file
 * @property {boolean} [overwrite = false] If the file should be re-create during initialization
 */
const optionsDefault = {
    extension: 'json5',
    defaultName: 'config.json5',
    folder: path.resolve(pkgDir.sync(), './config/'),
    overwrite: false
}


class Config {
    /**
     * constructor - create or retrieve a configuration
     *
     * @param  {string}        name the name of the config (also the name of the file)
     * @param  {OptionsObject} opts
     * @return {Config}             the config object
     * @example
     * const keybindings = new Config('keybindings')
     * const settings = new Config('settings.json')
     */
    constructor(name, opts) {
        this.options = { ...optionsDefault, ...opts }
        this.filename = `${(name || defaultName).split('.')[0]}.${this.options.extension.charAt(0) === '.' ? this.options.extension.substring(1) : this.options.extension}`
        this.file = path.resolve(this.options.folder, this.filename)
        if (!fs.existsSync(this.file) || this.options.overwrite) this._create(name)
        this.content = this.getContent()
        this.save()
    }


    /**
     * @static create - create a new config file
     *
     * @param  {string}         name the name of the config (also the name of the file)
     * @param  {OptionsObject}  opts
     * @return {Config}              the config object
     * @chainable
     * @example const settings = Config.create('settings', {extension: '.config'}) // same as `new Config(...)`
     */
    static create(name, opts) {
        return new Config(name, { overwrite: true, ...opts })
    }


    /**
     * _create - create and format the config file
     * @private
     * @param  {string} name
     */
    _create(name) {
        const dirPath = path.dirname(this.file)
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
        if (!fs.existsSync(this.file)) fs.writeFileSync(this.file, '{}', handleWriteError)
        this.write({ _name: name })
    }


    /**
     * write - Write data into gthe config file
     * @private
     * @param  {string|object} data
     * @throws {ConfigWriteError}
     */
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


    /**
     * save - Save the config file
     * @example config.save()
     */
    save() {
        if (this.content && this.content !== this.getContent()) {
            this.write(this.content)
        }
    }


    /**
     * read - Read the raw data of the file
     * @private
     * @return {string}
     */
    read() {
        return fs.readFileSync(this.file, 'utf-8')
    }


    /**
     * getContent - get the parsed content of the file
     *
     * @return {JSON5}  the JSON5 content of the file
     * @example let fileContent = config.getContent() // --> {_name: 'settings', ....}
     */
    getContent() {
        const data = this.read()
        if (data && typeof data === 'string' && data.length) {
            return JSON5.parse(data)
        } else {
            return {}
        }
    }

    // TODO : nested property
    /**
     * set - Set an config value
     *
     * @param  {string} key
     * @param  {string} value
     * @return {Config}
     * @throws {ConfigKeyError}
     * @chainable
     * @example
     * config.set('property', 'some value')
     * config.set(randomObject)
     * config
     *    .set({position: {x:1, y:5}})
     *    .set('speed', {vx: 2, vy: 0})
     */
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
        this.save()
        return this
    }


    /**
     * @private
     * @param  {object} object Add an object to the content
     */
    setObj(object) {
        if (Object.keys(object).filter(key => key.charAt(0) === '_').length) {
            throw new ConfigKeyError('Key cannot start with an _')
        }
        this.content = { ...this.content, ...object }
    }


    /**
     * get - Get a key of the config
     *
     * @param  {string} key
     * @return {any}      the value associated with the key
     * @example
     * config.get()      // --> return the whole config
     * config.get('key') // --> value
     */
    get(key) {
        if (!key) return this.content
        if (key in this.content) {
            return this.content[key]
        } else {
            if (blockingErrors) throw new ConfigKeyError(`Unable to find the key : ${key}`)
            else console.error(`Unable to find the key : ${key}`)
        }
    }

    /**
     * exists - If a key exists
     *
     * @param  {string} key
     * @return {boolean}
     * @example config.exists('key') // --> true/false
     */
    exists(key) {
        return key in this.content
    }


    /**
     * toJSON - Convert the config to a JSON compatible format
     *
     * @return {JSON}  The JSON object
     * @example const JsonConfig = config.toJSON()
     */
    toJSON() {
        let returnObject = {}
        Object.entries(this.content).forEach(([key, value]) => {
            if (key.charAt(0) !== '_') returnObject[key] = value // delete private entries
        })
        return JSON.parse(JSON.stringify(returnObject))
    }


    /**
     * @static version - return the version of the library
     *
     * @return {string}  The version of the library
     * @example const version = Config.version --> 0.1.1
     */
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