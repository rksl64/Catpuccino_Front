export function getCookieValue(token) {
  document.cookie = `token=${token}; path=/;`;
}
export function getToken(nombre){
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(nombre + "=")) {
            return cookie.substring(nombre.length + 1);
        }
    }
    return null;
}
export function deleteCookie(token) {
    document.cookie = token + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}