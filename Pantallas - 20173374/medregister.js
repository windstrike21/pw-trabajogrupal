function generatePassword() {
    //Aleatorio entre 8 y 12
    const length = Math.floor(Math.random() * (13 - 8)) + 8, p1 = document.getElementById("passwd1"), p2 = document.getElementById("passwd2")    
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }    
    console.log(retVal)
    p1.value = p2.value = retVal
}
function cambiarEstadoPassword() {
    const eye = document.getElementById("passwdcheck"), p1 = document.getElementById("passwd1"), p2 = document.getElementById("passwd2");
    if (p1.type && p2.type === "password") {
      p1.type = p2.type = "text";            
      eye.removeAttribute("style")      
    } else {
      p1.type = p2.type = "password";
      eye.setAttribute("style","text-decoration:line-through;")
    }
}