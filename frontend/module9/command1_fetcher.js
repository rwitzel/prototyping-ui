function fetch_command1_result(param1, param2, allow_caching) {

    return fetch( 'http://127.0.0.1:8080/command1/' + param1 + "/" + param2 + "/" + allow_caching)
        .then((response) => {
            if (response.status != 200) {
                // TODO improve: get the body (text() returns a promise)
                throw 'ERROR: ' + response.status + '' + response.text();
            }
            return response.json();
        });
}
