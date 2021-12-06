let currentDay = moment().format('dddd, MMMM Do');
let currentHour = moment().format('HH');
let currentDayEl = $('#currentDay');
let timeBlockEls = $('.time-block div');
let saveBtn = $('.saveBtn');

currentDayEl.text(currentDay);
//localStorage.getItem('activity')

timeBlockEls.each(function (index) {
    let timeBlockTimeEl = moment($(this).text(), ['hA']).format('HH');
    let textAreaEl = $(this).parent().find('textarea');

    if (timeBlockTimeEl < currentHour) {
        textAreaEl.addClass('past');
    } else if (timeBlockTimeEl === currentHour) {
        textAreaEl.addClass('present');
    } else {
        textAreaEl.addClass('future');
    }
})


saveBtn.on('click', function () {
    let index = $('.container').index($(this).parent());
    let activityText = $(this).parent().find('textarea').val();

    console.log(index);

    let timeBlockActivity = {
        index: index,
        activity: activityText
    }

    localStorage.setItem('activity', JSON.stringify(timeBlockActivity));
})
