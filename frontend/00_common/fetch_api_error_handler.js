const fetch_api_error_handler = (response) => {
    if (!response.ok) {
        return response.text()
            .then((response_text) => {
                throw 'ERROR ' + response.status + ' ' + response.statusText + ' <<' + response_text + ">>";
            });
    }
    else {
        return response;
    }
}