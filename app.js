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

function setUpTable() {
  console.log('setUpTable');
  var table = document.getElementById('table');
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

var pike = new CookieStore('First and Pike', 23, 65, 6.3);
var airport = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var center = new CookieStore('Seattle Center', 11, 38, 3.7);
var capitol = new CookieStore('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore('Alki', 2, 16, 4.6);

function fillInTable() {
  var table = document.getElementById('table');
  table.textContent = '';
  setUpTable();
  for (var i = 0; i < storesArray.length; i++) {
    console.log(storesArray[i]);
    storesArray[i].renderHTMLSales();
  }
}
fillInTable();

var form = document.getElementById('form');

function harvestForm(event) {
  // var newStore = [];
  event.preventDefault();
  console.log(event);
  var storeName = event.target.storeName.value;
  console.log('storeName: ', storeName);
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookies = event.target.avgCookies.value;

  // for (var i = 1; i < 5; i++) {
  //   var formBox = event.target[i].value;
  //   newStore.push(formBox);
  //   console.log(formBox);
  // }
  var newStore = new CookieStore(storeName, minCust, maxCust, avgCookies);

  fillInTable();
}
form.addEventListener('submit', harvestForm);
