let testCaseNo = pm.variables.get("test_case_no");
let res = pm.response.json();

switch (testCaseNo) {
  case "test-address-0001":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("total_received", 10000000000000000, res.total_received);
    eval(globals.assert)("total_sent", 0, res.total_sent);
    eval(globals.assert)("balance", 10000000000000000, res.balance);
    eval(globals.assert)("unconfirmed_balance", 0, res.unconfirmed_balance);
    eval(globals.assert)("final_balance", 10000000000000000, res.final_balance);
    eval(globals.assert)("n_tx", 1, res.n_tx);
    eval(globals.assert)("unconfirmed_n_tx", 0, res.unconfirmed_n_tx);
    eval(globals.assert)("final_n_tx", 1, res.final_n_tx);
    eval(globals.assert)("txrefs count", 1, res.txrefs.length);
    if (eval(globals.isBlockcypher)()) {
      eval(globals.assert)("tx_url", "https://api.blockcypher.com/v1/eth/main/txs/", res.tx_url);
    } else {
      eval(globals.assert)("tx_url", "https://api.chainweaver.io/v1/eth/main/txs/", res.tx_url);
    }
    eval(globals.assert)("response object property count", 11, Object.keys(res).length);
    break;
  case "test-address-0002":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("txrefs count", 200, res.txrefs.length);
    eval(globals.assert)("response object property count", 13, Object.keys(res).length);
    break;
  case "test-address-0003":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("txrefs count", 2000, res.txrefs.length);
    eval(globals.assert)("response object property count", 13, Object.keys(res).length);
    break;
  case "test-address-0004":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("txrefs count", 2001, res.txrefs.length);
    eval(globals.assert)("response object property count", 13, Object.keys(res).length);
    break;
  case "test-address-0005":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("response object property count", 10, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0006":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("txrefs count", 1, res.txrefs.length);
    eval(globals.assert)("response object property count", 11, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0007":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("txrefs count", 1, res.txrefs.length);
    eval(globals.assert)("response object property count", 11, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0008":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("response object property count", 10, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0009":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("txrefs count", 1, res.txrefs.length);
    eval(globals.assert)("response object property count", 11, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0010":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("response object property count", 10, Object.keys(res).length);
    postman.setNextRequest(null);
    break;
  case "test-address-0011":
    tests["Status code is 404"] = responseCode.code === 404;
    eval(globals.commonTests)("error");
    eval(globals.assert)("error message", "Error: wallet not found", res.error);
    eval(globals.assert)("response object property count", 1, Object.keys(res).length);
    break;
  default:
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
}