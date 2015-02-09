var sumando="";
var estado=false;
function unos() {
    var dis = document.getElementById("di");
    if(dis.innerHTML=="Calculadora binaria" || estado==true){
        dis.innerHTML = "1";
        estado=false;
    }else
        dis.innerHTML = "1"+dis.innerHTML;
    
}

function ceros() {
    var dis = document.getElementById("di");
    if(dis.innerHTML=="Calculadora binaria"|| estado==true){
        dis.innerHTML = "0";
        estado=false;
    }else
        dis.innerHTML = "0"+dis.innerHTML;
}

function suma() {
    sumando = parseInt(document.getElementById("di").innerHTML,2);
    estado=true;
}

function resultado() {
    oper = parseInt(document.getElementById("di").innerHTML,2);
    document.getElementById("di").innerHTML = oper + sumando;
}

function nuevo() {
    sumando="";
    estado=true;
    document.getElementById("di").innerHTML="0";
}
