function cambiarStatusClave() {
    const x = document.getElementById("passwdcheck"), y = document.getElementById("passwdtext");
    if (x.type === "password") {
      x.type = "text";
      y.innerText= "visible";      
      y.style.opacity = "60%";         
    } else {
      x.type = "password";
      y.innerText = "oculto";
      y.style.opacity = "40%";         
    }
  }