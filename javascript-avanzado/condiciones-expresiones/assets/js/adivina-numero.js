function adivinar(){
    let num = Math.floor(Math.random() *99 + 1);
    let guess = parseInt(document.getElementById("number"));
    let minus = Math.abs(guess - num);

    if(guess == num) {
        document.write('Congratulations, you have won');
    } else if(minus <= 5) {
        document.write('Hot')
    } else if (minus > 5 && minus <= 15) {
        document.write('Warmer');
    } else if (minus > 15 && minus <= 25) {
        document.write('Warm');
    } else if (minus > 25 && minus <= 35) {
        document.write('Cold');
    } else if (minus > 35 && minus <= 45) {
        document.write('Colder');
    } else {
        document.write('ICE ICE BABY');
    }
}
