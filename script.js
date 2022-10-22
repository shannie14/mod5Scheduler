//time
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour);

//buttons
var saveBtn = document.getElementById(saveBtn);
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
});

//current
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}
$(document).ready(function () {

    function hourUpdate() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr('id').split('hour')[1]);

            //current time block
            if (blockTime === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');
                $(this).removeClass('future');
            }
            //future time block
            else if (blockTime > currentHour) {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
            //past time block
            else {
                $(this).removeClass('present');
                $(this).addClass('past');
                $(this).removeClass('future');
            }
        });

    }
    hourUpdate();

    // Descriptions saved from local storage for each row
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 .description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));

    getCurrentDate()

});