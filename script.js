"use strict";

// static
// if
// else if
// else
// yield
// while
// for
// break
// continue
// return
// do
// switch
// try
// catch
// finally
// delete
// let
// function 
// var
// const
// class

function Events(){

	let noticias_1 = document.getElementById("news-1");
	let noticias_2 = document.getElementById("news-2");
	let noticias_3 = document.getElementById("news-3");
	let noticias_4 = document.getElementById("news-4");
	let noticias_5 = document.getElementById("news-5");
	let noticias_6 = document.getElementById("news-6");

	document.getElementsByClassName("news-section-button")[0].addEventListener("click",()=>{

		if(document.getElementById("news-1").getAttribute("hidden")== null){

			// do nothing 

		}else if(noticias_1.getAttribute("hidden")=="1" && noticias_5.getAttribute("hidden")=="1"){

			noticias_4.setAttribute("hidden","1");
			noticias_1.style.animation="aparecer 0.5s linear";
			noticias_1.removeAttribute("hidden");

		}else if(noticias_2.getAttribute("hidden")=="1" && noticias_6.getAttribute("hidden")=="1"){

			noticias_5.setAttribute("hidden","1");
			noticias_2.style.animation="aparecer 0.5s linear";
			noticias_2.removeAttribute("hidden");

		}else if(noticias_3.getAttribute("hidden")=="1" && noticias_6.getAttribute("hidden")==null){

			noticias_6.setAttribute("hidden","1");
			noticias_3.style.animation="aparecer 0.5s linear";
			noticias_3.removeAttribute("hidden");
		}
	},false);

	document.getElementsByClassName("news-section-button")[1].addEventListener("click",()=>{

		if(noticias_6.getAttribute("hidden")==null){

			//do nothing

		}else if(noticias_6.getAttribute("hidden")=="1" && noticias_2.getAttribute("hidden")=="1"){

			noticias_3.setAttribute("hidden","1");
			noticias_6.style.animation="aparecer 0.5s linear";
			noticias_6.removeAttribute("hidden");
			
		}else if(noticias_5.getAttribute("hidden")=="1" && noticias_1.getAttribute("hidden")=="1"){

			noticias_2.setAttribute("hidden","1");
			noticias_5.style.animation="aparecer 0.5s linear";
			noticias_5.removeAttribute("hidden");

		}else if(noticias_4.getAttribute("hidden")=="1" && noticias_1.getAttribute("hidden")==null){

			noticias_1.setAttribute("hidden","1");
			noticias_4.style.animation="aparecer 0.5s linear";
			noticias_4.removeAttribute("hidden");
		}

	},false);
}

// funcionMamagueva();

// function funcionMamagueva(A=10,B=20,C=30,D=40){
// 	console.log(x,varia);
// }

let obj = {
	x:{a:1,b:2,c:3},
	d:{e:4,f:5,g:6,h:7},
	i:8,
	j:{k:9,l:10,m:11,n:12},
	nh:13
};

let arreglo=[1,2,3,4,5,6,7,8,9,10];

arreglo.map(e=>console.log(e));

// function objectIterator(object){

// 	let returnedData = [];

// 	for (let i in object){

// 		if(typeof(object[i])=="object"){

// 			for (let x in object[i]) {
// 				returnedData.push(`${x}:${object[i][x]}`);
// 			}

// 		}else returnedData.push(`${i}:`+object[i]);
// 	}

// 	return returnedData;
// }

// console.table(objectIterator(obj));

class Prueba{
	prop1 = "valor1";
	prop2 = "valor2";
	prop3 = "valor3";

	Metodo_1(){
		return "retorno 1";
	}

	Metodo_2(){
		return "retorno 2";
	}

	Metodo_3(){
		return "retorno 3";
	}
}

let objeto1 = new Prueba();

console.log(objeto1.prop1);

console.log("Hola mundo".indexOf("mundo"));

window.addEventListener("load",Events,false);