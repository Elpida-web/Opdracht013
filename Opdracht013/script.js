

const age = 20;
const isFemale = true;
const driverStatus = "bob";
const firstName = "job";
const totalAmount = "1";

if (age >= 18) {

    console.log("You can enter Zuipschuit");

} else {

    console.log("You cannot enter");
}

if (isFemale) {

    console.log("je ticket zegt dat je vrouw bent");
} else {
    console.log("Helaas je bent man en mag daarom niet naar binnen");
}

if (driverStatus === "bob") {

    console.log("You can drive");

} else {

    console.log("Stay!!");

}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}

if (firstName === "bram" || firstName === "sarah") {
    console.log("Omdat je een feestelijke naam hebt krijg je een gratis biertje");
} else {
console.log("Volgende keer beter");
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Omdat we jarig zijn krijg je van ons een gratis portie (vega)bitterballen");
 } else if (totalAmount > 50 && totalAmount <= 100) {
        console.log("Gefeliciteerd met een gratis portie nachos. Eet smakelijk!");
    } else if (totalAmount > 100) {
        console.log("Big spender! Hierbij een flesje champagne");
    } else {
        console.log("Sorry");
    }


