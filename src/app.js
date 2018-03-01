const path = require('path')
const favicon = require('serve-favicon')

const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')
const express = require('@feathersjs/express')

const knex = require('./knex')
const services = require('./services')
const authentication = require('./authentication')

const app = express(feathers())

app.configure(configuration())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(app.get('public')))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))


// Set up Plugins and providers
app.configure(knex)
app.configure(services)
app.configure(authentication)

// Configure a middleware for 404s and the error handler
app.use(express.notFound())

module.exports = app
