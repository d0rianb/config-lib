# Config library

[![npm version](https://badge.fury.io/js/%40dorianb%2Fconfig-js.svg)](https://badge.fury.io/js/%40dorianb%2Fconfig-js)
[![npm version](https://badgen.net/npm/dt/@dorianb/config-js)](https://www.npmjs.com/package/@dorianb/config-js)


## Documentation

## Classes

<dl>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#OptionsObject">OptionsObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Config"></a>

## Config
<!-- Empty to hide the `**Kind**` tag in documentation -->

* [Config](#Config)
    * [new Config(name, opts)](#new_Config_new)
    * _instance_
        * [.save()](#Config+save)
        * [.getContent()](#Config+getContent) ⇒ <code>JSON5</code>
        * [.set(key, value)](#Config+set) ⇒ [<code>Config</code>](#Config)
        * [.get(key)](#Config+get) ⇒ <code>any</code>
        * [.exists(key)](#Config+exists) ⇒ <code>boolean</code>
        * [.toJSON()](#Config+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.version](#Config.version) ⇒ <code>string</code>
        * [.create(name, opts)](#Config.create) ⇒ [<code>Config</code>](#Config)

<a name="new_Config_new"></a>

### new Config(name, opts)
constructor - create or retrieve a configuration

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: [<code>Config</code>](#Config) - the config object  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the config (also the name of the file) |
| opts | [<code>OptionsObject</code>](#OptionsObject) |  |

**Example**  
```js
const keybindings = new Config('keybindings')
const settings = new Config('settings.json')
```
<br />
<a name="Config+save"></a>

### config.save()
save - Save the config file

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Example**  
```js
config.save()
```
<br />
<a name="Config+getContent"></a>

### config.getContent() ⇒ <code>JSON5</code>
getContent - get the parsed content of the file

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>JSON5</code> - the JSON5 content of the file  
**Example**  
```js
let fileContent = config.getContent() // --> {_name: 'settings', ....}
```
<br />
<a name="Config+set"></a>

### config.set(key, value) ⇒ [<code>Config</code>](#Config)
set - Set an config value

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  
**Throws**:

- <code>ConfigKeyError</code> 


| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| value | <code>string</code> | 

**Example**  
```js
config.set('property', 'some value')
config.set(randomObject)
config
   .set({position: {x:1, y:5}})
   .set('speed', {vx: 2, vy: 0})
```
<br />
<a name="Config+get"></a>

### config.get(key) ⇒ <code>any</code>
get - Get a key of the config

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>any</code> - the value associated with the key  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

**Example**  
```js
config.get()      // --> return the whole config
config.get('key') // --> value
```
<br />
<a name="Config+exists"></a>

### config.exists(key) ⇒ <code>boolean</code>
exists - If a key exists

<!-- Empty to hide the `**Kind**` tag in documentation -->

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

**Example**  
```js
config.exists('key') // --> true/false
```
<br />
<a name="Config+toJSON"></a>

### config.toJSON() ⇒ <code>JSON</code>
toJSON - Convert the config to a JSON compatible format

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>JSON</code> - The JSON object  
**Example**  
```js
const JsonConfig = config.toJSON()
```
<br />
<a name="Config.version"></a>

### Config.version ⇒ <code>string</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>string</code> - The version of the library  
**Example**  
```js
const version = Config.version --> 0.1.1
```
<br />
<a name="Config.create"></a>

### Config.create(name, opts) ⇒ [<code>Config</code>](#Config)
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Chainable**  
**Returns**: [<code>Config</code>](#Config) - the config object  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of the config (also the name of the file) |
| opts | [<code>OptionsObject</code>](#OptionsObject) |  |

**Example**  
```js
const settings = Config.create('settings', {extension: '.config'}) // same as `new Config(...)`
```
<br />
<br />
<a name="OptionsObject"></a>

## OptionsObject : <code>Object</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [extension] | <code>string</code> | <code>&quot;&#x27;json5&#x27;&quot;</code> | The extensions to use |
| [filename] | <code>string</code> | <code>&quot;&#x27;config.json5&#x27;&quot;</code> | The name of the default config file |
| [folder] | <code>string</code> | <code>&quot;&#x27;./config&#x27;&quot;</code> | The folder of the default config file |
| [overwrite] | <code>boolean</code> | <code>false</code> | If the file should be re-create during initialization |

<br />

* * *

2020 &copy; Dorian Beauchesne
