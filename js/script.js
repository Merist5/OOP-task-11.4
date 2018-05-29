function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color =color;
}

Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color 
  + " and the price is " + this.price + ".");
}

var smsngGalaxyS6 = new Phone("Samsung", 2000, "black");
var iPhone6s = new Phone("Apple", 3000, "rose gold");
var oneplusOne = new Phone("OnePlus", 1000, "silver");

smsngGalaxyS6.printInfo();
iPhone6s.printInfo();
oneplusOne.printInfo();