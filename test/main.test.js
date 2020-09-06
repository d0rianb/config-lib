const Config = require('../lib/main')
const path = require('path')

if (false) {
    const keybindings = new Config('keybindings') // Create a file or return the file
    keybindings.set('Z', 'Move up')
    keybindings.get('D') // -->  'Move left'
    keybindings.exists('name') // --> false
    keybindings.set('player_name', 'dorian')
}

const settings = Config.create('settings', { folder: path.resolve('./config') })
    .set('first-property', .567)
    .set('second-property', false)