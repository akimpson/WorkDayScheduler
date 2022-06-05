// Add the date to header to be displayed

today = moment().format("MMMM Do YYYY");
console.log(today);
document.getElementById("date").innerHTML =
  "Here is your schedule for today " + today;

setText();
function setText() {
  for (var n = 7; n < 19; n++) {
    var setTasks = localStorage["txt" + n];
    console.log(setTasks);
    document.getElementById("time" + n).value = setTasks;
  }
}

$(document).ready(function () {
  $("button[id^='save']").click(function () {
    var id2 = this.id;
    var num2 = id2.substr(4);
    console.log(id2);
    console.log(num2);
    var tasks = document.getElementById("time" + num2).value;
    console.log(tasks);
    localStorage.setItem("txt" + num2, tasks);
  });
});

$(document).ready(function () {
  $("button[id^='reset']").click(function () {
    var id = this.id;
    var num = id.substr(5);
    console.log(id);
    console.log(num);
    $("#time" + num).val("");
  });
});
