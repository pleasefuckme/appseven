var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
   BASE_API: '"http://192.168.1.113:8080/bcbimsanya/a"',
})

