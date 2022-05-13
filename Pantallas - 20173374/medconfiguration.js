const tbody = document.getElementById("tbody"), arregloElementos = []

const reordenarEnumeracion = function() {       
    let contador = 1
    for (let i of arregloElementos) {
        i.firstChild.innerText = contador
        contador++
        //console.log(i.firstChild)
    }
}

const agregarHorario = function() {
    const tr = document.createElement("tr"), th = document.createElement("th") 
    const td1 = document.createElement("td"), td2 = document.createElement("td"), td3 = document.createElement("td")
    
    th.setAttribute("scope", "row")
    th.innerText = arregloElementos.length + 1

    tr.appendChild(th)

    const select = document.createElement("select")    
    select.setAttribute("class", "form-select form-select-sm")
    select.setAttribute("aria-label", ".form-select-sm example")    

    let option = document.createElement("option")
    
    option.setAttribute("selected", "true")
    option.innerText = "Seleccione un día"
    select.appendChild(option)
    //array para insertar días por iteración
    const diaSem = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    for (let i = 0; i < 7; i++) {
        option = document.createElement("option")
        option.setAttribute("value", i+1)
        option.innerText = diaSem[i]
        select.appendChild(option)
    }
    td1.appendChild(select)    
    tr.appendChild(td1)
    //creo div de tipo input-group
    const div = document.createElement("div")
    div.setAttribute("class", "input-group")
    
    const input1 = document.createElement("input")
    input1.setAttribute("type", "time")
    input1.setAttribute("name", "time")
    input1.setAttribute("class", "form-control form-control-sm border-0")
    div.appendChild(input1)
    
    const span = document.createElement("span")
    span.innerText = "—"
    
    div.appendChild(span)
    const input2 = document.createElement("input")
    input2.setAttribute("type", "time")
    input2.setAttribute("name", "time")
    input2.setAttribute("class", "form-control form-control-sm border-0")
    div.appendChild(input2)
    
    td2.appendChild(div)
    tr.appendChild(td2)
    
    const button = document.createElement("button")
    button.setAttribute("onclick", "borrarhorario(event)")    
    button.setAttribute("class", "btn btn-danger btn-sm")
    button.innerText = "Eliminar"
    td3.appendChild(button)
    
    tr.appendChild(td3)    
    
    arregloElementos.push(tr)
    tbody.appendChild(tr)    
}

const buscarElemento = function(elemento) {
    for (let pos in arregloElementos) {
        if (arregloElementos[pos] == elemento) {
            return pos;
        }
    }
}

const borrarhorario = function() {          
    const elemento = this.document.activeElement.parentElement.parentElement, pos = buscarElemento(elemento)                
    console.log(arregloElementos)    
    tbody.removeChild(elemento)
    arregloElementos.splice(pos, 1)
    console.log(arregloElementos)
    reordenarEnumeracion()
}