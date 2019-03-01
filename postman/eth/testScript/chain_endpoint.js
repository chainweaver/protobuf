tests["Status code is 200"] = responseCode.code === 200;
eval(globals.commonTests)("ethBlockchain");
let res = pm.response.json();
tests["name is expected"] = res.name === "ETH.main";