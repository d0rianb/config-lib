const Config = require('../lib/main')

const clientConf = new Config('client')

clientConf.set('name', 'Dorian')
clientConf.set('age', 19)
clientConf.save()

console.log(clientConf.get())