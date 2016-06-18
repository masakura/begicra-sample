(() => {
  'use strict';

  $(document).on('click', '#toggle-hint', () => {
    var value = $('#toggle-hint').is(':checked');

    if (value) {
      $('#username').tooltip('show');
    } else {
      $('#username').tooltip('hide');
    }
  });

  $(document).on('click', '#toggle-monitor', () => {
    var value = $('#toggle-monitor').is(':checked');

    if (value) {
      $('#app').addClass('col-sm-6');
      $('#monitor').addClass('col-sm-6').show();
    } else {
      $('#app').removeClass('col-sm-6');
      $('#monitor').hide();
    }
  });
})();
