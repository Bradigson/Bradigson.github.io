let btnform1 = document.querySelector("#boton1__form1");
let btnAlert = document.querySelector("#botonAlert");
let btnAlert2 = document.querySelector("#botonAlert2");
let btnAlert3 = document.querySelector("#botonAlert3");
let btnAlert4 = document.querySelector("#botonAlert4");
let btnAlert5 = document.querySelector("#botonAlert5");
let btnAlert6 = document.querySelector("#botonAlert6");
let btnAlert7 = document.querySelector("#botonAlert7");
let btnAlert8 = document.querySelector("#botonAlert8");

btnform1.addEventListener("click", (e)=>{
    e.preventDefault();
    let name = document.from1.input1.value;
    let instrumento = document.from1.input2.value;
    let codigo = document.from1.input3.value;

    let mensajeAlert1 = document.querySelector(".mensajeAlerta");
    let mensajeAlert2 = document.querySelector(".mensajeAlerta2");
    let mensajeAlert3 = document.querySelector(".mensajeAlerta3");
    let mensajeAlert4 = document.querySelector(".mensajeAlerta4");
    let mensajeAlert5 = document.querySelector(".mensajeAlerta5");
    let mensajeAlert6 = document.querySelector(".mensajeAlerta6");
    let mensajeAlert7 = document.querySelector(".mensajeAlerta7");
    let mensajeAlert8 = document.querySelector(".mensajeAlerta8");
    let piano = document.querySelector("#piano");
    let code1 = document.querySelector("#code");
    let code2 = document.querySelector("#code2");

    let from1 = document.querySelector(".contenedor-form1");
    let form2 = document.querySelector(".contenedor-carta");

    let dataInfo1 = document.querySelector(".infoData1");
    let dataInfo2 = document.querySelector(".infoData2");
    let dataInfo3 = document.querySelector(".infoData3");
    
    if(!/^[a-zA-Z]*$/g.test(name)){
        mensajeAlert1.style.display = "flex";
        mensajeAlert1.style.animation = "mensjaAlerts 2s backwards";
        
        return;
    }else if(name == ""){
     
        mensajeAlert2.style.display = "flex";
        mensajeAlert2.style.animation = "mensjaAlerts 2s backwards";
        return;
    }
    
    
    
    if(!/^[a-zA-Z]*$/g.test(instrumento)){
        mensajeAlert3.style.display = "flex";
        mensajeAlert3.style.animation = "mensjaAlerts 2s backwards";
        return;
    }else if(instrumento == ""){
        
        mensajeAlert4.style.display = "flex";
        mensajeAlert4.style.animation = "mensjaAlerts 2s backwards";
        return;
    }else if(instrumento != "piano" && instrumento !="Piano"){
      
        mensajeAlert5.style.display = "flex";
        mensajeAlert5.style.animation = "mensjaAlerts 2s backwards";
        piano.textContent = name+": ";

        return;
    }


    if(isNaN(codigo)){
        mensajeAlert6.style.display = "flex";
        mensajeAlert6.style.animation = "mensjaAlerts 2s backwards";
        code2.textContent = name+": ";
        return;
    }else if(codigo != "34212" && codigo !="53467" && codigo != "98674"){
        mensajeAlert7.style.display = "flex";
        mensajeAlert7.style.animation = "mensjaAlerts 2s backwards";
        code1.textContent = name+": "
        return;
    }else{

        from1.style.display="none";
        form2.style.display = "block";
        form2.style.animation = "mensjaAlerts 2s forwards";
        dataInfo1.textContent = " "+name;
        dataInfo2.textContent = " "+instrumento;
    }


    
let iniciar = document.querySelector("#inicciar");
setTimeout(()=>{
    iniciar.style.opacity = "0.90";
    iniciar.style.animation = "mensjaAlerts 3s forwards"
    
},8000);
});

btnAlert.addEventListener("click",()=>{
  
    let mensajeAlert1 = document.querySelector(".mensajeAlerta");
    mensajeAlert1.style.display = "none";
});
btnAlert2.addEventListener("click",()=>{
  
    let mensajeAlert2 = document.querySelector(".mensajeAlerta2");
    mensajeAlert2.style.display = "none";
});
btnAlert3.addEventListener("click",()=>{
  
    let mensajeAlert3 = document.querySelector(".mensajeAlerta3");
    mensajeAlert3.style.display = "none";
});
btnAlert4.addEventListener("click",()=>{
  
    let mensajeAlert4 = document.querySelector(".mensajeAlerta4");
    mensajeAlert4.style.display = "none";
});
btnAlert5.addEventListener("click",()=>{
  
    let mensajeAlert5 = document.querySelector(".mensajeAlerta5");
    mensajeAlert5.style.display = "none";
});
btnAlert6.addEventListener("click",()=>{
  
    let mensajeAlert6 = document.querySelector(".mensajeAlerta6");
    mensajeAlert6.style.display = "none";
});
btnAlert7.addEventListener("click",()=>{
  
    let mensajeAlert7 = document.querySelector(".mensajeAlerta7");
    mensajeAlert7.style.display = "none";
});
$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
)



let iniciar = document.querySelector("#inicciar");
iniciar.onclick = function(e){

    let examen = document.querySelector("#examen");

    examen.style.display = "block";
    examen.style.animation = "mensjaAlerts 2s forwards"
}



//Validacion preguntas
let done = document.querySelector("#botonDone");
done.addEventListener("click", (e)=>{
    e.preventDefault();
    let resultado = 0;
    let pregunta1 = document.examen.q1.value;
    let pregunta2 = document.examen.q2.value;
    let pregunta3 = document.examen.q3.value;
    let pregunta4 = document.examen.q4.value;
    let pregunta5 = document.examen.q5.value;
    let pregunta6 = document.examen.q6.value;
    let pregunta7 = document.examen.q7.value;
    let pregunta8 = document.examen.q8.value;
    let pregunta9 = document.examen.q9.value;
    let pregunta10 = document.examen.q10.value;
    let pregunta11 = document.examen.q11.value;
    let pregunta12 = document.examen.q12.value;
    let pregunta13 = document.examen.q13.value;
    let pregunta14 = document.examen.q14.value;
    let pregunta15 = document.examen.q15.value;
    let pregunta16 = document.examen.q16.value;
    let pregunta17 = document.examen.q17.value;
    let pregunta18 = document.examen.q18.value;
    let pregunta19 = document.examen.q19.value;
    let pregunta20 = document.examen.q20.value;

    

    if(pregunta1 == ""){
        alert("La pregunta 1 esta vacia");
        return;
    }else if(pregunta1 == "C, D, E, F, G, A, B"){
        resultado++;
        
    }else{
        resultado;
        
    }


    if(pregunta2 == ""){
        alert("La pregunta 2 no ha sido completada");
        return;
    }else if(pregunta2 == "true"){
        resultado++;
    }else{
        resultado;
    }



    if(pregunta3 == ""){
        alert("La pregunta 3 no ha sido completada");
        return;
    }else if(pregunta3 == "a"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta4 == ""){
        alert("La pregunta 4 no ha sido completada");
        return;
    }else if(pregunta4 == "false"){
        resultado++;
    }else{
        resultado;
    }

    if(pregunta5 == ""){
        alert("La pregunta 5 no ha sido completada");
        return;
    }else if(pregunta5 == "true"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta6 == ""){
        alert("La pregunta 6 no ha sido completada");
        return;
    }else if(pregunta6 == "b"){
        resultado++;
    }else{
        resultado;
    }


    


    if(pregunta7 == ""){
        alert("La pregunta 7 no ha sido completada");
        return;
    }else if(pregunta7 == "c"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta8 == ""){
        alert("La pregunta 8 no ha sido completada");
        return;
    }else if(pregunta8 == "false"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta9 == ""){
        alert("La pregunta 9 no ha sido completada");
        return;
    }else if(pregunta9 == "a"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta10 == ""){
        alert("La pregunta 10 no ha sido completada");
        return;
    }else if(pregunta10 == "c"){
        resultado++;
    }else{
        resultado;
    }




    

    if(pregunta11 == ""){
        alert("La pregunta 11 no ha sido completada");
        return;
    }else if(pregunta11 == "la, si, do#, re, mi, fa#, sol#, la"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta12 == ""){
        alert("La pregunta 12 no ha sido completada");
        return;
    }else if(pregunta12 == "d"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta13 == ""){
        alert("La pregunta 13 no ha sido completada");
        return;
    }else if(pregunta13 == "d"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta14 == ""){
        alert("La pregunta 14 no ha sido completada");
        return;
    }else if(pregunta14 == "si, re, fa#"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta15 == ""){
        alert("La pregunta 15 no ha sido completada");
        return;
    }else if(pregunta15 == "c"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta16 == ""){
        alert("La pregunta 16 no ha sido completada");
        return;
    }else if(pregunta16 == "a"){
        resultado++;
    }else{
        resultado;
    }



    if(pregunta17 == ""){
        alert("La pregunta 17 no ha sido completada");
        return;
    }else if(pregunta17 =="c"){
        resultado++;
    }else{
        resultado;
    }


    if(pregunta18 ==""){
        alert("La pregunta 18 no ha sido ccompletada");
        return;
    }else if(pregunta18 =="true"){
        resultado++;
    }else{
        resultado;
    }



    if(pregunta19 == ""){
        alert("La pregunta 19 no ha sido completada");
        return;
    }else if(pregunta19 == "c"){
        resultado++;
    }else{
        resultado;
    }



    if(pregunta20 == ""){
        alert("La pregunta 20 no ha sido completada");
        return;
    }else if(pregunta20 == "c"){
        resultado++;
    }else{
        resultado;
    }


    let dataInfo3 = document.querySelector(".infoData3");
    dataInfo3.textContent = " "+resultado+"/20";
    

    let examenhide = document.querySelector("#examen");
    examenhide.style.display = "none";
});