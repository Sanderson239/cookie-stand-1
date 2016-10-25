var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avCookiePerSale: 6.3,
  hourlyCustomers: [],
  hourlySales: [],
  generateCustomersThisHour: function() {
  	return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
	},
  generateSalesThisHour: function() {
    var salesThisHour = this.generateCustomersThisHour();
    this.hourlyCustomers.push(salesThisHour);
    this.hourlySales.push(salesThisHour * this.avCookiePerSale);
    console.log('Sales this hour: ', salesThisHour);
    console.log('All sales: ', this.hourlySales);
  },
  generateFiguresForTheDay: function() {
    for (var i = 6; i <= 20; i++) {
      var newItem = document.createElement('li');
      newItem.className = 'hourlySales';
      newItem.innerText = i + 'am: ' + Math.round(this.hourlySales[i - 6]) + ' cookies';//create if for pm
      var ul = document.getElementById('hourly_totals');
      ul.appendChild(newItem);
    }
  },
}
for (var i = 6; i <= 20; i++) {
firstAndPike.generateSalesThisHour();
}
firstAndPike.generateFiguresForTheDay();


// var SeaTacAirport = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avCookiePerSale: 1.2,
//   randomCustomersPerHour: function(minCustomers, maxCustomers) {
//   	return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	}
//
// }
// console.log(SeaTacAirport.randomCustomersPerHour());
// SeaTacAirportArray = [SeaTacAirport.randomCustomersPerHour()];
// console.log(SeaTacAirportArray);
//
// var SeattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avCookiePerSale: 3.7,
//   randomCustomersPerHour: function(minCustomers, maxCustomers) {
//   	return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	}
// }
// console.log(SeattleCenter.randomCustomersPerHour());
// SeattleCenterArray = [SeattleCenter.randomCustomersPerHour()];
// console.log(SeattleCenterArray);
//
// var CapitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avCookiePerSale: 2.3,
//   randomCustomersPerHour: function(minCustomers, maxCustomers) {
//   	return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	}
// }
// console.log(CapitolHill.randomCustomersPerHour());
//
// var Alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avCookiePerSale: 4.6,
//   randomCustomersPerHour: function(minCustomers, maxCustomers) {
//   	return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
// 	}
// }
// console.log(Alki.randomCustomersPerHour());
