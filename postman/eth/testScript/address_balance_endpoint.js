let testCaseNo = pm.variables.get("test_case_no");
let res = pm.response.json();

switch (testCaseNo) {
  case "test-address-0001":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address is expected", "b7695173b4aed4f392361eca3ab19104ba1c0b13", res.address);
    eval(globals.assert)("total_received is expected", 10000000000000000, res.total_received);
    eval(globals.assert)("total_sent is expected", 0, res.total_sent);
    eval(globals.assert)("balance is expected", 10000000000000000, res.balance);
    eval(globals.assert)("unconfirmed_balance is expected", 0, res.unconfirmed_balance);
    eval(globals.assert)("final_balance is expected", 10000000000000000, res.final_balance);
    eval(globals.assert)("n_tx is expected", 1, res.n_tx);
    eval(globals.assert)("unconfirmed_n_tx is expected", 0, res.unconfirmed_n_tx);
    eval(globals.assert)("final_n_tx is expected", 1, res.final_n_tx);
    eval(globals.assert)("response object property count", 9, Object.keys(res).length);
    break;
  case "test-address-0002":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("response object property count", 9, Object.keys(res).length);
    break;
  case "test-address-0003":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("response object property count", 9, Object.keys(res).length);
    break;
  case "test-address-0004":
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
    eval(globals.assert)("address", "0000000000000000000000000000000000000000", res.address);
    eval(globals.assert)("response object property count", 9, Object.keys(res).length);
    break;
  case "test-address-0005":
    // skip
    break;
  case "test-address-0006":
    // skip
    break;
  case "test-address-0007":
    // skip
    break;
  case "test-address-0008":
    // skip
    break;
  case "test-address-0009":
    // skip
    break;
  case "test-address-0010":
    // skip
    break;
  case "test-address-0011":
    eval(globals.assert)("http status code", 404, responseCode.code);
    eval(globals.commonTests)("error");
    eval(globals.assert)("error message", "Wallet not-exist-address not found", res.error);
    eval(globals.assert)("response object property count", 1, Object.keys(res).length);
    break;
  default:
    eval(globals.assert)("http status code", 200, responseCode.code);
    eval(globals.commonTests)("ethAddress");
}