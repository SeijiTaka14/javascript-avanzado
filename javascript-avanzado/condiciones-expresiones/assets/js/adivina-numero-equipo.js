function adivinar(){
    let numeroDivinar=75;
    let number=parseInt(document.getElementById('number').value);
    let resta = Math.abs(number - numeroDivinar);


    if(number === numeroDivinar){
    document.write('Felicidades has ganado');
   }else if(resta <= 5){
    document.write('calienteee');
   }else if(resta >5 && resta <= 15 ){
    document.write('caliente');
   }else if(resta > 15 && resta < 25){
    document.write('tibio');
   }else if(resta >= 25 && resta < 35){
    document.write('frio');
   }else if(resta >= 35 && resta < 45){
    document.write('congelado');
   }else{
       document.write('te hiciste una paleta');
   } 
}
