'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

const _createClass = (function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }());

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

const contracts = require('guesser-contracts');
const contract = require('truffle-contract');

const ERC721BetPaymentProxy = (function () {
  function ERC721BetPaymentProxy(web3) {
    _classCallCheck(this, ERC721BetPaymentProxy);

    this.web3 = web3;
    this.ERC721BetPaymentProxy = contract(contracts.ERC721PaymentProxy);
    this.ERC721BetPaymentProxy.setProvider(this.web3.eth.currentProvider);
    this.instance = null;
  }

  _createClass(ERC721BetPaymentProxy, [{
    key: 'init',
    value: async function init() {
      try {
        this.instance = await this.ERC721BetPaymentProxy.deployed();
      } catch (err) {
        throw err;
      }
    },
  }, {
    key: 'network',
    value: async function network() {
      return this.web3.eth.net.getNetworkType();
    },
  }, {
    key: 'address',
    value: function address() {
      return this.instance.address;
    },
  }]);

  return ERC721BetPaymentProxy;
}());

exports.default = ERC721BetPaymentProxy;
