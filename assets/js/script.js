let currentDay = moment().format('dddd, MMMM Do');
let currentHour = moment().format('HH');
let currentDayEl = $('#currentDay');
let timeBlockEls = $('.time-block div');
let saveBtn = $('.saveBtn');

let activityHour, activityText;

function init() {
    currentDayEl.text(currentDay);

    getActivities();

    timeBlockEls.each(function () {
        let timeBlockTimeEl = moment($(this).text(), ['hA']).format('HH');
        let textAreaEl = $(this).parent().find('textarea');

        if (timeBlockTimeEl < currentHour) {
            textAreaEl.addClass('past');
        } else if (timeBlockTimeEl === currentHour) {
            textAreaEl.addClass('present');
        } else {
            textAreaEl.addClass('future');
        }
    });
};

function saveActivity() {
    activityHour = $(this).parent().find('.hour').text();
    activityText = $(this).parent().find('.description').val();

    localStorage.setItem(`activity-${activityHour}`, activityText);
};

function getActivities() {
    timeBlockEls.each(function (index) {
        activityHour = $(this).text();
        $(this).parent().find('.description').text(localStorage.getItem(`activity-${activityHour}`))
    });
};


saveBtn.on('click', saveActivity);

init();
