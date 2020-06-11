/* Basico
var nome = "Mario Lima";
var idade = 5;
var idade2 = 10;
//alert(nome + " tem " + idade + " anos");
console.log(idade * idade2);

var frase = "Japão é o melhor time do mundo";

console.log(frase.replace("Japão","Brasil"));

//alert(frase.replace("Japão","Brasil"))
*/

//Criando uma Lista
//var lista = ["Maçã","Pera","laranja"]

// Add um item na lista
//lista.push("Uva")

// Retirando o ultimo item da lista
//lista.pop();

//Invertendo a lista
//lista.reverse(lista)
//console.log(lista)

//imprimindo um item especifico pelo indice na lista
//console.log(lista[1]);

// vendo o tamanho da lista
//console.log(lista.length);

//convertendo a lista em string
//console.log(lista.toString());

//convertendo a lista em string, porém colocando o separador que vc quiser
//console.log(lista.join("/-+*"));

//Criando um dicionario
//var fruta = {nome:"maça",cor:"azul"}
//console.log(fruta);

//Criando uma lista de dicionarios
//var frutas = [{nome:"maça", cor:"Vermelha"} , {nome:"Uva" , cor:"Roxa"}]
//console.log(frutas);
//criando um alerta exibindo a fruta no indice da lista
//e chamando o obejeto cor
//alert(frutas[0].cor);

/*Condicional IF
var idade = prompt("Qual sua idade");
//var idade = 35;
if(idade >= 18){
    alert("Vc está com a idade avançada");
}else{
    alert("Vc ainda é novo");
};
*/


/* Trabalhando com While
var count = 0;
while(count < 5){
    console.log(count);
    count = count + 1;
};
*/


/* Trabalhando com For
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/


/* Trabalhando com Data
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.setMinutes());
alert(d.getSeconds());
*/

/* Trabalhando com funções
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));

function validaidade(idade){
    var validar = true;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    };
    return validar;    

};

var idade = prompt("Qual sua idade");
console.log(validaidade(idade));
---------------------------------------

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert ("Obrigado por clicar");
}
*/

//Função de direcionar a outra pagina web
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
function redirecionar(){
    window.open("http://daherturismo.com.br");
    //window.location.href = "http://coralnet.com.br";
}



function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaochange(elemento){
    console.log(elemento.value);
}