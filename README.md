# Config library

## Documentation

## Classes

<dl>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
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
        * [.getContent()](#Config+getContent) ⇒ <code>JSON</code>
        * [.set(key, value)](#Config+set) ⇒ [<code>Config</code>](#Config)
        * [.get(key)](#Config+get) ⇒ <code>any</code>
        * [.exists(key)](#Config+exists) ⇒ <code>boolean</code>
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

<br />
<a name="Config+save"></a>

### config.save()
save - Save the config file

<!-- Empty to hide the `**Kind**` tag in documentation -->
<br />
<a name="Config+getContent"></a>

### config.getContent() ⇒ <code>JSON</code>
getContent - get the parsed content of the file

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>JSON</code> - the JSON content of the file  
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

<br />
<a name="Config+get"></a>

### config.get(key) ⇒ <code>any</code>
get - Get a key of the config

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>any</code> - the value associated with the key  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<br />
<a name="Config+exists"></a>

### config.exists(key) ⇒ <code>boolean</code>
exists - If a key exists

<!-- Empty to hide the `**Kind**` tag in documentation -->

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<br />
<a name="Config.version"></a>

### Config.version ⇒ <code>string</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>string</code> - The version of the library  
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

<br />
<br />
<a name="Config"></a>

## Config
<!-- Empty to hide the `**Kind**` tag in documentation -->

* [Config](#Config)
    * [new Config(name, opts)](#new_Config_new)
    * _instance_
        * [.save()](#Config+save)
        * [.getContent()](#Config+getContent) ⇒ <code>JSON</code>
        * [.set(key, value)](#Config+set) ⇒ [<code>Config</code>](#Config)
        * [.get(key)](#Config+get) ⇒ <code>any</code>
        * [.exists(key)](#Config+exists) ⇒ <code>boolean</code>
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

<br />
<a name="Config+save"></a>

### config.save()
save - Save the config file

<!-- Empty to hide the `**Kind**` tag in documentation -->
<br />
<a name="Config+getContent"></a>

### config.getContent() ⇒ <code>JSON</code>
getContent - get the parsed content of the file

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>JSON</code> - the JSON content of the file  
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

<br />
<a name="Config+get"></a>

### config.get(key) ⇒ <code>any</code>
get - Get a key of the config

<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>any</code> - the value associated with the key  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<br />
<a name="Config+exists"></a>

### config.exists(key) ⇒ <code>boolean</code>
exists - If a key exists

<!-- Empty to hide the `**Kind**` tag in documentation -->

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<br />
<a name="Config.version"></a>

### Config.version ⇒ <code>string</code>
<!-- Empty to hide the `**Kind**` tag in documentation -->
**Returns**: <code>string</code> - The version of the library  
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
