# Alchemint-oracle-feed

An implement of feeds


### Install

##### requirements：node 6.0+

```bash
# clone
git clone https://github.com/Alchemint/Alchemint-oracle-feed

# install
npm install or yarn
```

### Usage 

```bash
# dependency
let {setPrice} = require('./setPrice');

# feed function
setPrice(wif,env,key,price);

# param
@param wif the WIF of node
@param env enviroment：privateNet/testNet/mainNet
@param key type of asset: sneo_price/sds_price
@param price the price of asset (usually get from exchange api)
```

### relative module

* JS feed should invoke function SetTypeB of Oracle Contract to feed price. See Api from https://github.com/Alchemint/OracleContract
* Underlying Neo network invoker module Easyneo：https://github.com/gengxuelei/easyNeo


