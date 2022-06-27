(function(win,doc){
    'use strict';
    let calendarEl=doc.querySelector('.calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        headerToolbar:{
            start: 'prev,next,today',
            center: 'title',
            end: 'dayGridMonth, timeGridWeek, timeGridDay'
        },

        buttonText:{
            today:    'Hoje',
            month:    'Mês',
            week:     'Semana',
            day:      'Dia'
        },

        locale:'pt-br',

        dateClick: function(info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            // change the day's background color just for fun
            info.dayEl.style.backgroundColor = 'red';
        },

        events: [
            { // this object will be "parsed" into an Event Object
              title: 'The Title', // a property!
              start: '2022-06-28', // a property!
              end: '2022-06-28' // a property! ** see important note below about 'end' **
            }
          ]
        
      });
      calendar.render();

})(window,document);