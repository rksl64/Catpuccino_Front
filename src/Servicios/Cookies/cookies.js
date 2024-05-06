export function setCookieValue(token) {
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
export function setIDValue(ID) {
    document.cookie = `ID=${ID}; path=/;`;
  }
  export function getID(ID){
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(ID + "=")) {
              return cookie.substring(ID.length + 1);
          }
      }
      return null;
  }
  export function deleteID(ID) {
      document.cookie = ID+ '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  
  export function setRolValue(Rol) {
    document.cookie = `Rol=${Rol}; path=/;`;
  }
  export function getRol(Rol){
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(Rol + "=")) {
              return cookie.substring(Rol.length + 1);
          }
      }
      return null;
  }
  export function deleteRol(Rol) {
      document.cookie = Rol+ '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  export function setUserNameValue(UserName) {
    document.cookie = `UserName=${UserName}; path=/;`;
  }
  export function getUserName(UserName){
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.startsWith(UserName + "=")) {
              return cookie.substring(UserName.length + 1);
          }
      }
      return null;
  }
  export function deleteUserName(UserName) {
      document.cookie = UserName+ '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }