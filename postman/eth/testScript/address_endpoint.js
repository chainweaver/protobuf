let testCaseNo = pm.variables.get("test_case_no");
let res = pm.response.json();
switch (testCaseNo) {
  case "test-address-0001":
    tests["Status code is 200"] = responseCode.code === 200;
    eval(globals.commonTests)("ethAddress");
    break;
  case "test-address-0002":
    tests["Status code is 200"] = responseCode.code === 200;
    eval(globals.commonTests)("ethAddress");
    break;
  case "test-address-0003":
    tests["Status code is 404"] = responseCode.code === 404;
    eval(globals.commonTests)("error");
    tests["Error message is expected"] = res.error === "Error: wallet not found";
    break;
  default:
    tests["Status code is 200"] = responseCode.code === 200;
    eval(globals.commonTests)("ethAddress");
}