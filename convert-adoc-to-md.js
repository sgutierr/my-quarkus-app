const asciidoctor = require('@asciidoctor/core')()
const TurndownService = require('turndown')
const fs = require('fs')
const path = require('path')

// Configurar Turndown para convertir HTML a Markdown
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**'
})

// Leer el archivo AsciiDoc
const inputFile = path.join(__dirname, 'docs', 'README.adoc')
const outputFile = path.join(__dirname, 'docs', 'README.md')

console.log(`Leyendo archivo: ${inputFile}`)

const adocContent = fs.readFileSync(inputFile, 'utf8')

// Convertir AsciiDoc a HTML
console.log('Convirtiendo AsciiDoc a HTML...')
const html = asciidoctor.convert(adocContent, {
  safe: 'safe',
  backend: 'html5',
  attributes: {
    'showtitle': true,
    'sectanchors': true
  }
})

// Convertir HTML a Markdown
console.log('Convirtiendo HTML a Markdown...')
const markdown = turndownService.turndown(html)

// Guardar el archivo Markdown
fs.writeFileSync(outputFile, markdown, 'utf8')
console.log(`Archivo Markdown generado: ${outputFile}`)

