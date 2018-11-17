// function validateForm() {
//     var valid = true;
//     $('.addInput, input, textarea').each(function () {
//         if ($(this).val() === '') {
//             valid = false;
//             return valid;
//         }
//     });
//     return valid
// }

// hamburger rotation
$(".hamIcon").click(function() {
  $(this).toggleClass("open")
});


$("#addEvent").dblclick(function() {
  console.log("hey");
  $(".addContainer").toggle("fold", 2500);
});


$("#addEventSubmit").click(function() {
// Check if all fields are full, if yes then fold it back and send the form field.
});

$("#groupEvent").dblclick(function(){
  $("#addEvent").fadeToggle("slow");
  $(".groupContainer").toggle("fold", 2500);
})

$("#shareCalendar").dblclick(function(){
  $("#addEvent").fadeToggle("slow");
  $("#groupEvent").fadeToggle("slow");
  $(".shareContainer").toggle("fold", 2500);
})

var ul = document.getElementsByClassName("fList")
var li = [ul[0].getElementsByTagName("li")];
