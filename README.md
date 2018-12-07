# Alchemint-oracle-feed

本项目旨在外部可对Alchemint的oracle中各参数价格进行喂价


### Install

##### 注意：由于项目涉及ES6/7等新属性，node需要6.0以上版本

```bash
# 克隆项目
git clone https://github.com/Alchemint/Alchemint-oracle-feed

# 安装依赖
npm install 或者 yarn
```

### Usage 

```bash
# 引入setPrice
let {setPrice} = require('./setPrice');

# 使用setPrice
setPrice(wif,env,key,price);

# setPrice方法的参数
@param wif 转账人的WIF
@param env 喂价环境，可选值为：privateNet,testNet,mainNet
@param key 喂价参数，可选值为neo_price,sneo_price,gas_price,sds_price等
@param price 喂价价格
```

### Introduction

* 喂价前需申请节点喂价权限，进入https://testnet.alchemint.io/ 注册账号生成节点，记录当前节点的wif和address;
* 邮件***@163.com申请节点加入喂价权限


### 相关项目

* 本项目调用Alchemint的oracle合约中的setTypeB的API进行喂价，合约地址：https://github.com/Alchemint/OracleContract
* 本项目使用了easyNeo包对交易进行了封装，详见：https://github.com/gengxuelei/easyNeo


