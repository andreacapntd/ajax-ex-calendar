// Creiamo un calendario dinamico con le festività.
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull'API).
// Milestone 1
// Creiamo il mese di Gennaio, e con la chiamata all'API inseriamo le festività.

//API: https://flynn.boolean.careers/exercises/api/holidays

// PARAMS:
// year: 2018
// month: 0 ~ 11

function addPrintMonth(currentMonth) {

  var daysMonth = currentMonth.daysInMonth();

  var template = $('#template').html();
  var compiled = Handlebars.compile(template);
  var target = $('#days');
  target.html('');

  for (var i = 1; i <= daysMonth; i++) {

    var allDate = moment({

      year: currentMonth.year(),
      month: currentMonth.month(),
      day: i

    });

    var daysHtml = compiled({

      'value' : i,
      'dateComplete': allDate.format('YYYY-MM-DD')

    });

    target.append(daysHtml);

  }
}

function addPrintHoliday(currentMonth) {

  var year = currentMonth.year();
  var month = currentMonth.month();


  $.ajax({

   url: 'https://flynn.boolean.careers/exercises/api/holidays',
   method: 'GET',
   data: {

     'month': month,
     'year': year

   },
   success: function(data) {

     var success = data['success'];
     var date = data['response'];

     for (var i = 0; i < date.length; i++) {

      var element = $("#days li[data-dateComplete='"+date[i]['date']+"']");
      element.addClass('holidays');
      element.append(' ' + date[i]['name']);

     }
   },
   error: function() {

     console.log('error');

   }
 });
};














function init() {

  var currentMonth = moment('2018-01-01');

  addPrintMonth(currentMonth);
  addPrintHoliday(currentMonth);


};





$(document).ready(init);
