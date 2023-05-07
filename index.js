
var arr = []


function uno(){
    arr += [parseInt(1)]
    pantalla.textContent = arr
}

function dos(){
    arr += [parseInt(2)]
    pantalla.textContent = arr
}

function tres(){
    arr +=[3]
    pantalla.textContent = arr
}

function cuatro(){
    arr += [4]
    pantalla.textContent = arr
}

function cinco(){
    arr += [5]
    pantalla.textContent = arr
}

function seis(){
    arr +=[6]
    pantalla.textContent = arr
    
}

function siete(){
    arr += [7]
    pantalla.textContent = arr
}

function ocho(){
    arr += [8]
    pantalla.textContent = arr
}

function nueve(){
    arr += [9]
    pantalla.textContent = arr
}

function cero(){
    arr += [0]
    pantalla.textContent = arr
}

function multiplica(){
    arr += ["*"]
    pantalla.textContent = arr
    
}

function divide(){
    arr +=["/"]
    pantalla.textContent = arr

}


function suma(){
    arr += ["+"]
    pantalla.textContent = arr
}

function resta(){
    arr += ["-"]
    pantalla.textContent = arr
}

function reset(){
    pantalla.innerText = ""
    arr =[""]
}

function igual(){
    let res = pantalla.textContent 
    let cambio;
    cambio = eval(res)
    pantalla.textContent = cambio 
}


