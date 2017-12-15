function fetch_command1_result(param1, param2, allow_caching) {

    const url = 'http://127.0.0.1:8080/command1/' + param1 + "/" + param2 + "/" + allow_caching;
    return fetch(url)
        .then(fetch_api_error_handler)
        .then((response) => response.json());
}
