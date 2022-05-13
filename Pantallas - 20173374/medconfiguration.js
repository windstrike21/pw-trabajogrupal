const actualizarhorario = function() {
    
}

const agregarHorario = function() {
    const indice = document.getElementById("inputnuevo").value
    if (indice >= 1 && indice <= 7) {
        const horario = document.getElementById(`ig${indice}`).childNodes[1], but = document.getElementById(`but${indice}`)
        console.log(indice)    
        if (horario.value == "Sin horario") {
            if (indice == 1) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")                            
            } else if (indice == 2) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            } else if (indice == 3) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            } else if (indice == 4) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            } else if (indice == 5) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            } else if (indice == 6) {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            } else {
                horario.removeAttribute("readonly")
                horario.removeAttribute("value")
                horario.setAttribute("placeholder", "Ingrese un horario")
                but.removeAttribute("hidden")
            }
        } else {
            //El horario está lleno
            console.log("horario lleno")
        }          
    }
    else {
        // indice erroneo
        document.getElementById("inputnuevo").value = ""  
    }
}

function cambiarHorario() {
    const indice = document.getElementById("inputcambiar").value
    if (indice >= 1 && indice <= 7) {
        const horario = document.getElementById(`ig${indice}`).childNodes[1], but = document.getElementById(`butt${indice}`)    
        console.log(indice)
        if (horario.value != "Sin horario") {
            if (indice == 1) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")                            
            } else if (indice == 2) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            } else if (indice == 3) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            } else if (indice == 4) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            } else if (indice == 5) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            } else if (indice == 6) {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            } else {
                horario.removeAttribute("readonly")                                
                but.removeAttribute("hidden")  
            }
        }
        else {
            console.log("Horario vacio")
        }        
    }
    else {
        // indice erroneo
        document.getElementById("inputcambiar").value = ""        
    }
}

function eliminarHorario() {
    const indice = document.getElementById("inputborrar").value
    if (indice >= 1 && indice <= 7) {
        const horario = document.getElementById(`ig${indice}`).childNodes[1]   
        console.log(indice)
        if (horario.value != "Sin horario") {
            if (indice == 1) {
                horario.setAttribute("value", "Sin horario")
            } else if (indice == 2) {
                horario.setAttribute("value", "Sin horario")
            } else if (indice == 3) {
                horario.setAttribute("value", "Sin horario")
            } else if (indice == 4) {
                horario.setAttribute("value", "Sin horario")
            } else if (indice == 5) {
                horario.setAttribute("value", "Sin horario")
            } else if (indice == 6) {
                horario.setAttribute("value", "Sin horario")
            } else {
                horario.setAttribute("value", "Sin horario")
            }
        } else {
            //El horario está vacío
            console.log("Horario vacío")            
        }
    }
    else {
        // indice erroneo
        document.getElementById("inputborrar").value = ""
    }    
}