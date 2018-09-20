const jsdom = require('jsdom')
const {JSDOM} = jsdom
const $ = require('jQuery')(new JSDOM(`<!DOCTYPE html>`).window)

$('<h1>Hello</h1>').appendTo('body')
console.log($('h1').text())
