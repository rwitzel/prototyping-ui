const storage_model_version = 1;

console.log("storage_model_version", storage_model_version);

function getObjectFromLocalStorage(key) {
    if (getModelVersionFromLocalStorage() != storage_model_version) {
        return null; // so we ignore local storage
    }

    const value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
}

function setObjectInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getModelVersionFromLocalStorage() {
    const value = localStorage.getItem('__model_version__');
    return value != null ? value : -1;
}

function setModelVersionInLocalStorage() {
    localStorage.setItem('__model_version__', storage_model_version);
}
