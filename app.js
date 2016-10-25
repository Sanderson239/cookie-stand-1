'use strict';
//Declare an array with store hours outside an object (global variable) since hours are the same for all stores
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Object for the First and Pike store
var pike = { //object name
  name: 'First and Pike', //store location name
  minCust: 23, // minimum customers per hour
  maxCust: 65, // maximum customers per hour
  avgCookies: 6.3, //average cookies sold per hour
  dailySales: [], //array that contains all of cookie sales per day, each element store one hour
  randomNumCust: function(){ //calculating random number of customers
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  // calculating hourly cookie sales and pushing them into dailySales array
  calcCookieSales: function () {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },
  // creating an <h1> element, filling it with text, looking for <main> elements, grabbing first element in that array and attaching to <h1> to it. Will only do it once.
  renderHTMLHeading: function () {
    var h1 = document.createElement('h1');
    h1.innerText = 'All Cookie Stores';
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h1);
  },

  //creating <h2> tag for the store location name, putting this object's store name into it and attaching to <main>
  renderHTMLSales: function(){
    this.calcCookieSales();
    var main = document.getElementsByTagName('main')[0];
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    main.appendChild(h2);

    //unnumbered list, first <ul> and then <li>s through the for loop, attaching <li> to <ul>
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    //calculating total sales for this store by looping through dailySales array elements and adding them up
    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    }
    //adding total sales to the list
    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    //adding <lu> to the main element
    main.appendChild(ul);
  },

};

//calling renderHTMLSales function for object pike
pike.renderHTMLSales();

var airport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  dailySales: [],
  randomNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  calcCookieSales: function () {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },

  renderHTMLSales: function(){
    this.calcCookieSales();
    var main = document.getElementsByTagName('main')[0];
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    main.appendChild(h2);

    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    }

    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    main.appendChild(ul);
  },

};

airport.renderHTMLSales();

var center = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  dailySales: [],
  randomNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  calcCookieSales: function () {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },

  renderHTMLSales: function(){
    this.calcCookieSales();
    var main = document.getElementsByTagName('main')[0];
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    main.appendChild(h2);

    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    }

    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    main.appendChild(ul);
  },

};

center.renderHTMLSales();

var capitol = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  dailySales: [],
  randomNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  calcCookieSales: function () {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },

  renderHTMLSales: function(){
    this.calcCookieSales();
    var main = document.getElementsByTagName('main')[0];
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    main.appendChild(h2);

    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    }

    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    main.appendChild(ul);
  },

};

capitol.renderHTMLSales();

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  dailySales: [],
  randomNumCust: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },

  calcCookieSales: function () {
    for (var i = 0; i < hours.length; i++) {
      this.dailySales.push(Math.floor(this.randomNumCust() * this.avgCookies));
    }
  },

  renderHTMLSales: function(){
    this.calcCookieSales();
    var main = document.getElementsByTagName('main')[0];
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    main.appendChild(h2);

    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.innerText = hours[i] + ': ' + this.dailySales[i] + ' cookies';
      ul.appendChild(li);
    }

    var totalSales = 0;
    for (var i = 0; i < this.dailySales.length; i++) {
      totalSales += this.dailySales[i];
    }

    var li = document.createElement('li');
    li.innerText = 'Total Sales: ' + totalSales + ' cookies';
    ul.appendChild(li);

    main.appendChild(ul);
  },

};

alki.renderHTMLSales();
