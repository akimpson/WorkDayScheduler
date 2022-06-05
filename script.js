$( document ).ready(function() {
    //Display current date
    //Variable to append cols
  var a= moment().format('dddd MMMM Do YYYY, h:mm');
    $("#display-date").text(a)

    function pageLoad(){
        setColor();   //make current hour red, last hours light gray, next hours green    
    }
var currentHour = moment().hour();
    $(".task-info").each( function() {
        var elementHour = parseInt($(this).attr("id"));

        // handle past, present, and future
        if ( elementHour < currentHour ) {
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if ( elementHour === currentHour ) {
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
    });