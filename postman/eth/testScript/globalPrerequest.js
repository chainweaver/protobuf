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
