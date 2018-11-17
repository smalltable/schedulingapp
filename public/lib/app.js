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
