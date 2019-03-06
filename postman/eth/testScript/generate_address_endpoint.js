let res = pm.response.json();
eval(globals.assert)("http status code", 201, responseCode.code);
eval(globals.commonTests)("ethAddressKeychain"); // check schema
eval(globals.assert)("response object property count", 3, Object.keys(res).length);
postman.setNextRequest(null);