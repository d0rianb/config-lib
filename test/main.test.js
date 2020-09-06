const Config = require('../lib/main')

const clientConf = new Config('client')
const keyBindConf = new Config('keybind')

clientConf.set('keybind', true)

keyBindConf.set({
    move: 'A',
    shoot: 'B'
})

clientConf.set('name', 'Dorian')

clientConf.save()
keyBindConf.save()