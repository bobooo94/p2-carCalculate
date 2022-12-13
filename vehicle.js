/*Napraviti klasu Vehicle koja ima sledeca polja:
- brand, inicijalno prazan string
- numberOfWheels, inicijalno 1
- currentSpeed, inicijalno 0
- speedlimit, inicijalno 0 */

export class Vehicle {
    currentSpeed = 0;
    constructor (brand = "", speedLimit = 0, numberOfWheels = 1) {
        this.brand = brand;
        this.speedLimit = speedLimit;
        this.numberOfWheels = numberOfWheels;
    }

    // metoda accelerate koja koristi Math.random i generise broj izmedju 1 i speedLimit i njime azurira currentSpeed polje:
    accelerate() {
        return this.currentSpeed = Math.ceil(Math.random()*this.speedLimit);
    }

    /* metoda status metoda koja provjerava trenutnu vrijednost currentSpeed polja i ako je ova:
        1. veca od speedLimit / 2: ispisuje u konzoli "You are going too fast, be careful!"
        2. manja ili jednaka speedLimit / 2: ispisuje u konzoli "Thanks for driving safely!" */
    status() {
        if(this.currentSpeed>(this.speedLimit/2)){
            console.log("You are going too fast, be careful!");
        } else {
            console.log("Thanks for driving safely!");
        }
    }
}


// const masina = new Vehicle ("Audi", 80);
// masina.accelerate();
// console.log(masina.accelerate());
// masina.status();