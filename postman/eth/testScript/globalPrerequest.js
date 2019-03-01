postman.setGlobalVariable("commonTests", (schemeName) => {
    tests["Content-Type header is application/json"] = postman.getResponseHeader("Content-Type") === "application/json";

    let res = pm.response.json();
    const schema = pm.variables.get(schemeName);
    tests["Schema is valid"] = tv4.validate(res, schema);
});
