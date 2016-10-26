'use strict';

var storesArray = [];

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function renderHTMLHeading() {
  var h1 = document.createElement('h1');
  h1.innerText = 'All Cookie Stores';
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h1);
};
renderHTMLHeading();

function renderHTMLTable() {
  console.log('renderHTMLTable');
  var table = document.createElement('table');
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');
  thead.appendChild(tr);

  var th = document.createElement('th');
  th.innerText = '';
  tr.appendChild(th);

  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  };

  var th = document.createElement('th');
  th.innerText = 'Location Total';
  tr.appendChild(th);

  var tbody = document.createElement('tbody');
  var table = document.getElementsByTagName('table')[0];
  table.appendChild(tbody);
};
renderHTMLTable();
console.log('hello world');

var CookieStore = function(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.dailySales = [];
  this.randomNumCust = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };
  this.calcCookieSales = function() {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  };
  this.renderHTMLSales = function (){
    this.calcCookieSales();

    var tbody = document.getElementsByTagName('tbody')[0];
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    var th = document.createElement('th');
    th.innerText = this.name;
    tr.appendChild(th);

    for (var i = 0; i < hours.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.dailySales[i];
      tr.appendChild(td);
    };

    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    };

    var td = document.createElement('td');
    td.innerText = totalSales;
    tr.appendChild(td);
  };
  storesArray.push(this);
};

var pike = new CookieStore ('First and Pike', 23, 65, 6.3);
var airport = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var center = new CookieStore ('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStore ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore ('Alki', 2, 16, 4.6);

for (var i = 0; i < storesArray.length; i++) {
  storesArray[i].renderHTMLSales();
}
var newStore = [];
var form = document.getElementById('form');

function harvestForm(event) {
  event.preventDefault();
  for (i = 1; i < 6; i++) {
    var formBox = event.target[i].value;
    newStore.push(formBox);
    console.log(formBox);
  }
}
form.addEventListener('submit', harvestForm, renderHTMLTable());
storesArray.push(newStore);
