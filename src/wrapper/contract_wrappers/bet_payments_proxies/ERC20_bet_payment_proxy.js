const contracts = require('guesser-contracts');
const contract = require('truffle-contract');

export default class ERC20BetPaymentProxy {
  constructor(web3) {
    this.web3 = web3;
    this.ERC20BetPaymentProxy = contract(contracts.ERC20PaymentProxy);
    this.instance = null;
  }

  async init() {
    try {
      await this.ERC20BetPaymentProxy.setProvider(this.web3.eth.currentProvider);
      this.instance = await this.ERC20BetPaymentProxy.deployed();
    } catch (err) {
      throw err;
    }
  }

  async network() {
    return this.web3.eth.net.getNetworkType();
  }

  address() {
    return this.instance.address;
  }
}
