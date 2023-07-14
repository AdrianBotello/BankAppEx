export function saveInfo(name, value) {
    sessionStorage.setItem(name, value);
}

export function getInfo(name) {
    return JSON.parse(sessionStorage.getItem(name));
}

export function delInfo(name) {
    sessionStorage.removeItem(name);
}