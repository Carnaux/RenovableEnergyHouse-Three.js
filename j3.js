var valortempo;
var numplaceholder;
var turno;
var horas;
var consumototal;
var consumolampada = 100;
var quantidadelampadas = 8;
var quantidadeplacas;
var potenciaplaca;
var incidencia;
var potencianecessaria;
var necessario;
var quantidadeplacastenho;
var valoreficiencia;
var valturno;
var producao = potenciaplaca * quantidadeplacas;
var energiagerada;
var saldoeletrico = producao - consumototal;
var v, sala = 1, quarto1 = 0, quarto2 = 0, quarto3 = 0; cozinha = 0, area = 1, banheiro1 = 0, banheiro2 = 0;
var eficienciatotal;
var consumogeladeira = 300;
var consumotv = 175;
var precoconta;
var tarifa;
var conta;
var contames;
var credito;
var totalconta;
var saldoene;

function atualizar(){
  turno = document.getElementById('slideturno').value;
  horas = document.getElementById('horas').value;
  potenciaplaca = document.getElementById('potencia').value;
  incidencia = document.getElementById('incidencia').value;
  valoreficiencia = document.getElementById('eficiencia').value;
  quantidadeplacastenho = document.getElementById('numplacas').value;



  document.getElementById('valorincidencia').innerHTML = incidencia;
  document.getElementById('valoreficiencia').innerHTML = valoreficiencia;
  document.getElementById('valorhoras').innerHTML = horas;
  document.getElementById('valorpotencia').innerHTML = potenciaplaca;



  if(turno <= 3){
    document.getElementById('valorturno').innerHTML = "Manhã";
    SpotLight.intensity = 0.5;
  } else if(turno > 3 && turno < 7){
  document.getElementById('valorturno').innerHTML = "Tarde";
  SpotLight.intensity = 1;
}else if(turno > 7){
  document.getElementById('valorturno').innerHTML = "Noite";
  SpotLight.intensity = 0;
  }


  if(turno <= 3){
    valturno = 2;
  } else if(turno > 3 && turno < 7){
    valturno = 1;
  }else if(turno > 7){
    valturno = 0;
  }

eficienciatotal = valoreficiencia/valturno;

energiagerada = quantidadeplacastenho*potenciaplaca*eficienciatotal;

consumototal = (consumotv + consumogeladeira + (consumolampada * quantidadelampadas)) * horas;
potencianecessaria = consumototal*incidencia;

quantidadeplacas = (potencianecessaria/eficienciatotal)/potenciaplaca;

contames = (consumototal/1000)*30;


if(document.getElementById('tf1').checked) {
  tarifa = 0.43;
}else if(document.getElementById('tf2').checked) {
  tarifa = 0.53;
}else if(document.getElementById('tf3').checked) {
  tarifa = 0.61;
}

precoconta = contames*tarifa;

credito = "---------";

saldoene = energiagerada - potencianecessaria;


document.getElementById('conta2').innerHTML = "R$"+ precoconta;
document.getElementById('credito').innerHTML = "R$"+ credito;
document.getElementById('ge').innerHTML = energiagerada+" Wh/dia";
document.getElementById('con').innerHTML = potencianecessaria+" Wh/dia";

var b = document.getElementById('saldo');
if( energiagerada > consumototal){
    document.getElementById('saldo').innerHTML = saldoene +" Wh/dia";
    b.style.color = "green";
    document.getElementById('totalconta').innerHTML = "R$"+ 0;
}else if (consumototal > energiagerada) {
    document.getElementById('saldo').innerHTML = saldoene +" Wh/dia";
    b.style.color = " red";
    document.getElementById('totalconta').innerHTML = "R$"+ precoconta;
}

if(energiagerada == "Infinity"){
  energiagerada = 0;
}
 document.getElementById('energiagerada').innerHTML = energiagerada;
 document.getElementById('potencianecessaria').innerHTML = potencianecessaria;

 var a = document.getElementById('energiagerada');

 if( potencianecessaria > energiagerada){
   a.style.color = "red";
 }
 if( potencianecessaria < energiagerada){
   a.style.color = "green";
 }
}


function fecharconfigsol(){
  beta = -300;
  document.getElementById('controlesol').style.display = "none";
  enableControls = true;
}
function maisluz(){
  if(luzsolar <= 10){
  luzsolar++;
}}
function menosluz(){
  if(luzsolar >=0){
  luzsolar--;
}}
function ligadesliga(v){
      if(v == 1){
        if(sala == 1){
        luzsala.intensity = 0;
        sala = 0;
        scene.remove(luzsala);
      }else{
        luzsala.intensity = 1;
        sala = 1;
        scene.add(luzsala);
  } }
    if(v == 2){
      if(quarto1 == 1){
      luzquarto1.intensity = 0;
      quarto1 = 0;
      scene.remove(luzquarto1);
    }else{
      luzquarto1.intensity = 1;
      quarto1 = 1;
      scene.add(luzquarto1);
    } }
    if(v == 3){
      if(quarto2 == 1){
      luzquarto2.intensity = 0;
      quarto2 = 0;
      scene.remove(luzquarto2);
    }else{
      luzquarto2.intensity = 1;
      quarto2 = 1;
      scene.add(luzquarto2);
    } }
    if(v == 4){
      if(quarto3 == 1){
      luzquarto3.intensity = 0;
      quarto3 = 0;
      scene.remove(luzquarto3);
    }else{
      luzquarto3.intensity = 1;
      quarto3 = 1;
      scene.add(luzquarto3);
    } }
    if(v == 5){
      if(cozinha == 1){
      luzcozinha.intensity = 0;
      cozinha = 0;
      scene.remove(luzcozinha);
    }else{
      luzcozinha.intensity = 1;
      cozinha = 1;
      scene.add(luzcozinha);
    } }
    if(v == 6){
      if(area == 1){
      luzarea.intensity = 0;
      area = 0;
      scene.remove(luzarea);
    }else{
      luzarea.intensity = 1;
      area = 1;
      scene.add(luzarea);
    } }
    if(v == 7){
      if(banheiro1 == 1){
      luzbanheiro1.intensity = 0;
      banheiro1 = 0;
      scene.remove(luzbanheiro1);
    }else{
      luzbanheiro1.intensity = 1;
      banheiro1 = 1;
      scene.add(luzbanheiro1);
    } }
    if(v == 8){
      if(banheiro2 == 1){
      luzbanheiro2.intensity = 0;
      banheiro2 = 0;
      scene.remove(luzbanheiro2);
    }else{
      luzbanheiro2.intensity = 1;
      banheiro2 = 1;
      scene.add(luzbanheiro2);
    } }

}



function fecharpainel(){
  beta = -900;
  document.getElementById('paineldecontrole').style.display = "none";
  enableControls = true;
}
function dianoite(){
valortempo = document.getElementById('slideturno').value;
    if( valortempo >= 7){
        sky.material.color.set("rgb(11, 17, 21)");
        sky.material.needsUpdate = true;
    }else if(valortempo > 3 && valortempo < 7 ){
      sky.material.color.set("rgb(113, 172, 214)");
      sky.material.needsUpdate = true;
    }else if(valortempo <= 3){
      sky.material.color.set("rgb(190, 223, 246)");
      sky.material.needsUpdate = true;
    }
}
function maisplaceholder(){
  numplaceholder = document.getElementById('numplacas').value;
  numplaceholder++;
  document.getElementById('numplacas').value = numplaceholder;
}
function menosplaceholder(){
  numplaceholder = document.getElementById('numplacas').value;
  numplaceholder = numplaceholder - 1;
  document.getElementById('numplacas').value= numplaceholder;
}
