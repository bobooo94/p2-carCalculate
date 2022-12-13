/*Napraviti klasu Vehicle koja ima sledeca polja:
- brand, inicijalno prazan string
- numberOfWheels, inicijalno 1
- currentSpeed, inicijalno 0
- speedlimit, inicijalno 0
i metode:
- accelerate - koja koristi Math.random i generise broj izmedju 1 i speedLimit i njime azurira currentSpeed polje
- status - metoda koja provjerava trenutnu vrijednost currentSpeed polja i ako je ova:
	1. veca od speedLimit / 2: ispisuje u konzoli "You are going too fast, be careful!"
	2. manja ili jednaka speedLimit / 2: ispisuje u konzoli "Thanks for driving safely!"
Napraviti klasu Car koja ekstenduje Vehicle i:
- "gazi" numberOfWheels setujuci 4 kao inicijalnu vrijednost,
- ima polje tankCapacity cija je inicijalna vrijednost 55
- ima polje currentFuelQuantity koja opet koristi Math.random izmedju 0 i tankCapacity
- ima metodu getMissingQuantityFromTank koja ispisuje u konzoli: "You need x liters to fill up your tank!"
Kreirati instancu (objekat) iz klase Car i proslediti proizvoljne vrijednosti. 
Pozvati sve metode koje rade ispis u konzoli. */

import { Car } from "./car.js";

const auto = new Car ("Audi", 80);

auto.currentFuelRandom(); // poziva funkciju da izracuna koliko goriva ima
console.log("You have " + auto.currentFuelRandom() + (" liters of fuel.")); // test radi li currentFuel
auto.getMissingQuantityFromTank();

auto.accelerate(); // poziva funkciju za odredjivanje brzine
console.log("You are driving " + auto.accelerate() + " km/h."); //test radi li accelerate
auto.status(); //poziva funkciju za opreznu/neopreznu voznju