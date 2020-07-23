// Creiamo un calendario dinamico con le festività.
// Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull'API).
// Milestone 1
// Creiamo il mese di Gennaio, e con la chiamata all'API inseriamo le festività.

//API: https://flynn.boolean.careers/exercises/api/holidays

// PARAMS:
// year: 2018
// month: 0 ~ 11

function getCalendarAjaxMoment() {

  var month = 0;

  $.ajax({

    url: 'https://flynn.boolean.careers/exercises/api/holidays',
    method: 'GET',
    data: {

      'month': month,
      'year': 2018

    },
    success: function(data) {

      var success = data['success'];
      var date = data['response'];
      console.log(date);

      var target = $('#days')



      for (var i = 1; i <= 31 ; i++) {

        var newOpt = '<li value="' + i + '">' + i + '</li>'
        target.append(newOpt);
      }

      for (var i = 0; i < date.length; i++) {

        var holidays = date[i];
        var holidayName = holidays['name'];
        var holidayDate = holidays['date'];
        var mom = moment(holidayDate, 'YYYY/MM/DD');
        console.log(mom.format('YYYY/MM/DD'));

      }

    },
    error: function() {

      console.log('error');
    }
  })
}
















function init() {

  getCalendarAjaxMoment();

}





$(document).ready(init);
