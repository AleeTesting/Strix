const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://semilac.pl/',
    product_key: '108',
  }
})