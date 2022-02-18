//retos: 1) Buscar una imagen de billete y mostrarla dependiendo el billete en vez de el texto
// 2) Hacer que la caja se vaya vaciando, cada vez que extraiga dinero
//que se le reste al array CAJA, lo del array ENTREGADO, y que en algun lugar se vea cuanto SALDO HAY
//y cuanto saldo ha ENTREGADo
var boton = document.getElementById("botoncito");
var texto = document.getElementById("texto")
var saldo = document.getElementById("saldo")
boton.addEventListener("click" ,generar);


class Billete{
// n recibe un string,
 //el array que contiene la ruta de la imagen del billete hace referencia a ese mismo string
    constructor(n, v, c){

        this.nombre= n
        this.valor= v;
        this.cantidad= c;
        this.imagen= new Image(320,200)
        this.imagen.src= mostrar[this.nombre];// se invoca el array, pasandole el string que contiene la ruta de imagen
        
        
    }
    

    
}

 //el evento  de dar billete se genera cuando el usuario presiona el boton


// es una mala practica escribir el document.write, esto genera defectos
// creamos etiqueta <p> vacia solo con id para poder aplicar el atributo id.innerHTM

function generar()
{   
    
    resultado=document.getElementById("resultado") // invocamos el parrafo para alli mostrar texto/images
    dinero = parseInt(texto.value)//obtenemos el valor de dinero que el usuario escribe en la caja de texto


    //ciclo que recorre array de la caja, ahora x contiene el contenido del saldo total.
    // nombre, cantidad, y valor de los billetes
    for(var x of caja) {

        if (dinero>0) {
            div = Math.floor((dinero / x.valor));  // div = cantidad de billetes a entregar
            if (div > x.cantidad) {                 //si div es mayor a los billetes que tengo, significa que no tengo ese valor
                papeles = x.cantidad;               //por ende, solo entrego la cantidad que tengo disponible, y no div.
    
            } 
            else  {                                    // si no es mayor, la cantidad puede ser igual o menor, por ende se entrega
                                                        // el resultado de div.
                papeles= div;
            }
            
            //añadimos el saldo entregado a el array entregado  usando la clase billete y la funcion.push
            entregado.push(new Billete(x.nombre,x.valor, papeles)); 
                                                                
            dinero= dinero- (x.valor*papeles); // ACTUALIZAMOS EL VALOR DEL DINERO QUE FALTA POR ENTREGAR
                //CUANDO EL DINERO SEA 0 SE DEJA DE RECORRER EL ARRAY CAJA, PORQUE NO ES NECESARIO ENTREGAR MAS BILLETES

             
        }
    }
    
    // SI APESAR DE RECORRER TODOS LOS BILLETES, EL DINERO SIGUE SIENDO MAYOR QUE 0 SIGNIFICA 
    //QUE NO CUMPLI MI OBJETIVO Y EL DINERO NO ES SUFICIENTE
    if(dinero>0){
        //inner.html es atributo del objeto resultado que es el id que tiene el parrafo vacio. esta es la forma correcta
        resultado.innerHTML="no puedo darte la cantidad solicitada"
        
    }

    // DE LO CONTRARIO, EL DINERO ENTREGADO SE ALMACENA EN UN ARRAY EL CUAL CONTIENE TODA LA INFORMACION DEL SALDO ENTREGAD
    //HACEMOS UN CICLO FOR OF, PARA MANIPULAR LAS INSTANCIAS DE DICHA INFO.
    else{
        for (e of entregado){


            // Se hace esta condicion para mostrar en pantalla solo la cantidad mayor a 0  de los billetes 
            //que fueron entregados, 
            //ej: 0 billetes de 50, ahora no se muestra gracias a este if.

            if(e.cantidad>0){   
                
    
                resultado.innerHTML += e.cantidad + " billetes de $ "+ e.valor + "<br>"+"<br>"
                
                for(var i=0; i < e.cantidad; i++)
                // este ciclo recorre la cantidad de los billetes entregados, y por cada cantidad muestra una imagen
                {
                    
                    resultado.appendChild(e.imagen)
                    resultado.innerHTML+= "<br>"+ "<br>"

                }
            


            }
        
            

        }

    }
}


//array que permite acceder la ruta de imagen mediante la variable nombre de la clase
var mostrar = [];
mostrar["50"]="50.jpg"
mostrar["20"]="20.png"
mostrar["10"]="10.png"


//Billetes que dispone la caja, SALDO TOTAL.
var caja=[];
caja.push(new Billete("50",50000, 10));
caja.push(new Billete("20",20000, 10));
caja.push(new Billete("10",10000, 15));

//array que almacena la cantidad de billetes entregada del saldo total
var entregado=[];


//variables que usa el programa, se pueden declarar o no, es opcional. se usan dentro de la funcion
var dinero=0;
var div=0;
var papeles=0;


//mostrar saldo en pantalla
var r=0;
for (var s of caja){

    r+= (s.cantidad*s.valor)
    
        saldo.innerHTML="<font size=5> Saldo del Cajero: $" +"<strong>"+r+"</strong>" + "</font>" ;
    
    
    }





//  var div=0  freddy aca declara la variable div, resultado de la division entre dinero y valor, la cual indica los billetes a entregar
// var papeles



// for x of caja recorre el valor del indice, osea la informacion asociada al diccionario






