let currentDay = moment().format('dddd, MMMM Do');
let currentHour = moment().format('HH');
let currentDayEl = $('#currentDay');
let timeBlockEls = $('.time-block div');

currentDayEl.text(currentDay);

timeBlockEls.each(function (index) {
    let timeBlockTimeEl = moment($(this).text(), ['hA']).format('HH');
    let textAreaEl = $(this).parent().find('textarea');

    if (timeBlockTimeEl < currentHour) {
        textAreaEl.addClass('past');
        textAreaEl.prop('readonly', true);
    } else if (timeBlockTimeEl === currentHour) {
        textAreaEl.addClass('present');
    } else {
        textAreaEl.addClass('future');
    }
})

