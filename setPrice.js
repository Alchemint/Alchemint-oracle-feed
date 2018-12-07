const log4js = require('log4js');
const easyNeo = require('easyneo');
const {formatPrecision, bigmath, printNumber} = require('./utils/index');
let {fetchRpc} = require('./utils/fetch');
const KEY = require('./.key');
const log = log4js.getLogger();
log.level = 'debug';


// 喂价器
async function setPrice(wif, env, key, price) {
  if (!(+price > 0)) {
    log.info("setPrice错误调用：");
    log.info(env);
    log.info(key);
    log.info(price);
    return;
  }

  // 参数封装
  let address = easyNeo.getInfoFromWIF(wif).address;
  let amount = formatPrecision(
    printNumber(
      bigmath.chain(bigmath.bignumber(price))
        .multiply(bigmath.bignumber(bigmath.pow(10, 8)))
        .done()
    ), 0
  );
  let params = ["(str)" + key, "(addr)" + address, "(integer)" + amount];

  // 合约调用
  let result;
  try {
    let oracleHash = KEY.apiEnv[env].oracleHash;
    let apiUrl = KEY.apiEnv[env].apiUrl;
    let data = await easyNeo.callC(wif, oracleHash, "setTypeB", params);
    result = await fetchRpc(apiUrl, 'sendrawtransaction', data.rawData);

    log.info(key + " 喂价成功：" + price);
    log.info(data);
  } catch (error) {
    log.error(key + " setPrice调用callC时报错，错误信息如下：");
    log.error(params);
    log.error(error);
  }

  return result;
}

module.exports = {
  setPrice
};
