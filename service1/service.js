'use strict'

var seneca = require('seneca')()

var muReact = require('mu-react')

seneca.add({role: 'service1', cmd: 'component'}, function(args, callback) {
  muReact('./component.js', {name: 'Service 1'}, callback)
})

seneca.add({role: 'service1', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'})
})

seneca.add({role: 'service1', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'})
})

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT})

module.exports.seneca = seneca
