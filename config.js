const Eos = require('eosjs')



const config = {
    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f', // 32 byte (64 char) hex string
    keyProvider: ['5K4bXrkKykqGbgyVVjAAgm8a39LoC9eetymUX8Tp9ZJdxu9TV1M', '5J5LL5FBhhEPX7YJFgZs2Fdww6QT4Gqfj9bFi2LgsXtjJiuKw4K', "5KZRvUWkXNSnrRukF7WiS6mcyY92r5EEuohHsahfSevSwZGcj6i", "5Kg4NdzLFRsbfd6hGkjBC1LYcJABCTgAtN4DMtP1BsqdYovDu3E"], // WIF string or array of keys..
    httpEndpoint: 'http://178.62.92.215:8888',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true
}

const eos = Eos(config)

module.exports = eos
