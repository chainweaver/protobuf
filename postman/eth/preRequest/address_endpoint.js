let testCaseNo = pm.variables.get("test_case_no");
let baseUrl = pm.variables.get("baseUrl");
let network = pm.variables.get("network");
let token = pm.variables.get("token");
switch (testCaseNo) {
  case "test-address-0010":
    pm.sendRequest({
      url: baseUrl+"/eth/"+network+"/?token="+token,
      method: 'GET',
    }, (err, res) => {
      pm.variables.set("confirmations", res.json().height + 100);
    });
    break;
}

for (const [key, value] of Object.entries(data)) {
  if (value === null) {
    pm.request.url.removeQueryParams(key)
  }
}