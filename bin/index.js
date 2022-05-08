#! /usr/bin/env node

import chalk from 'chalk'
import clear from 'clear'
import terminalImage from 'terminal-image'
import blessed from 'blessed'
import got from 'got'

// clear the console
clear()

// My avatar
const imageBody = await got('https://avatars.githubusercontent.com/u/12462188').buffer()
const image = await terminalImage.buffer(imageBody, { width: 20 })

// Header
const header = `Hello! 
    My name is ${chalk.green('Adem')} and I'm a ${chalk.green('Fullstack Web')} developer living in ${chalk.red('Tunisia')}. 
    I'm ${chalk.green('available')} for hire. You can contact me at <${chalk.green('ademkingnew@gmail.com')}>
    
    If you want to know more about me, you can visit my social media accounts:`

// Social links
const social = `${chalk.green('Github')}: https://github.com/Ademking
    ${chalk.blue('LinkedIn')}:  https://www.linkedin.com/in/ademkouki
    ${chalk.cyan('Twitter')}: https://twitter.com/kouki__adem
    ${chalk.blueBright('Facebook')}:  https://www.facebook.com/AdemKouki.Officiel`

const message = `
${image}
${header}

${social}
`
const screen = blessed.screen({
  smartCSR: true,
  // use 256 colors
  terminal: 'xterm-256color'
})

screen.title = 'Adem Kouki - Fullstack Web Developer'

// Create a box perfectly centered horizontally and vertically.
const box = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  align: 'center',
  valign: 'center',
  content: message,
  tags: true,
  border: {
    type: 'bg'
  },
  style: {
    fg: 'white',
    border: {
      fg: '#f0f0f0'
    }
  }
})

// Append our box to the screen.
screen.append(box)
// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  clear();
  return process.exit(0)
})
// Focus our element.
box.focus()
// Render the screen.
screen.render()
