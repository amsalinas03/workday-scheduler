var hours = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
]
let today = moment();
$('#currentDay').text(today.format ('dddd, MMMM Do'));

var mainBody = $('.container');

for (i = 0; i < hours.length; i++) {
    var hoursSlot = $('<div>');
    hoursSlot.text(hours[i]);
    hoursSlot.addClass("time-block")
    mainBody.append(hoursSlot);
    var textBox = $('<textarea>');
    textBox.addClass("textarea")
    hoursSlot.append(textBox);
    var saveBtn = $('<button>');
    saveBtn.addClass("saveBtn");
    hoursSlot.append(saveBtn);
}

$('.saveBtn').on("click", function() {
        let btn = $(this)
        let id = btn.parent().text()
        let savedText = btn.siblings('textarea');
        let val = savedText.val();
        localStorage.setItem(id, val);
    })

console.log(localStorage)

$('textarea').each(function() {
    $(this).val(localStorage.getItem($(this).parent().text()))
})
