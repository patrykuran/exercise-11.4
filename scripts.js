function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
};

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + "zł.");
}

Telefon.prototype.os = function(os) {
	console.log("System operacyjny telefonów firmy " + this.marka + " to " + os + ".");
}

var samsungGalaxyS6 = new Telefon("Samsung", 1999, "biały");
var iPhonePlus6s = new Telefon("Apple", 2699, "gwiezdna szarość");
var onePlusOne = new Telefon("OnePlus", 1289, "czarny");

samsungGalaxyS6.printInfo();
iPhonePlus6s.printInfo();
onePlusOne.printInfo();

iPhonePlus6s.os("iOS");
samsungGalaxyS6.os("Android");
onePlusOne.os("Android");