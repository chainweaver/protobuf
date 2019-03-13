postman.setGlobalVariable("commonTests", (schemeName) => {
  tests["Content-Type header is application/json"] = postman.getResponseHeader("Content-Type") === "application/json";

  let res = pm.response.json();
  const schema = pm.variables.get(schemeName);
  if (tv4.validate(res, schema)) {
    tests["Schema is valid"] = true;
  } else {
    tests["Schema is valid error"] = false;
  }
});

postman.setGlobalVariable("assert", (target, expect, value) => {
  if (expect === value) {
    tests[target + " is expected"] = true;
  } else {
    tests[target + " expected value was " + expect + ", but it was " + value] = false;
  }
});

let baseUrl = pm.variables.get("baseUrl");
if (baseUrl.indexOf('api.blockcypher.com') > -1) {
  // When testing with blockcypher

  // Change address pattern
  let addressSchema = pm.variables.get("ethAddress");
  if (addressSchema.hasOwnProperty("properties") && addressSchema.properties.hasOwnProperty("address")) {
    addressSchema.properties.address.pattern = "^([a-z0-9]{40})$";
    pm.variables.set("ethAddress", JSON.stringify(addressSchema));
  }

  // Change address keychain pattern
  let addressKeychainSchema = pm.variables.get("ethAddressKeychain");
  if (addressKeychainSchema.hasOwnProperty("properties") && addressKeychainSchema.properties.hasOwnProperty("address")) {
    addressKeychainSchema.properties.address.pattern = "^([a-z0-9]{40})$";
    pm.variables.set("ethAddressKeychain", JSON.stringify(addressKeychainSchema));
  }

  // Change block pattern
  let blockSchema = pm.variables.get("ethBlock");
  if (blockSchema.hasOwnProperty("properties") && blockSchema.properties.hasOwnProperty("coinbase_addr")) {
    blockSchema.properties.coinbase_addr.pattern = "^([a-z0-9]{40})$";
    pm.variables.set("ethBlock", JSON.stringify(blockSchema));
  }
}