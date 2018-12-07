const axios = require('axios');
const log4js = require('log4js');
const log = log4js.getLogger();
log.level = 'debug';

// api调用
function fetchRpc(api, method, ...args) {
  let params = {
    "jsonrpc": "2.0",
    "method": method,
    "id": "1",
    "params": args
  };
  return axios.post(api, params)
}


module.exports = {
  fetchRpc,
};
