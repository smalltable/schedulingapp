var eventName0;
var eventLocation0;
var eventFrom0;
var eventTo0;
var evening0;
var noon0;
var morning0;
var note0;
$("#addEventSubmit").click(function() {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if(empty.length) {
        alert("Please fill all inputs");
    } else {
       eventName0 = $('.addInput > #eName').val();
       eventLocation0 = $('.addInput > #location').val();
       eventFrom0 = $('#eFrom').val();
       eventTo0 = $('#eTo').val();
       note0 = $('#area0').val();
       evening0 = false;
       noon0 = false;
       morning0 = false;
      if ($('#eMorning').is(":checked"))
      {
       console.log("Morning checked");
        morning0 = true;
      }
      if ($('#eNoon').is(":checked"))
      {
       console.log("Noon checked");
        noon0 = true;
      }
      if ($('#eEvening').is(":checked"))
      {
       console.log("Evening checked");
        evening = true;
      }
      // If none checked then it is considered all they.
      if(!(evening0 && noon0 && morning0)){
        morning0 = true;
        noon0 = true;
        evening0 = true;
      }
        $(".addContainer").toggle("fold", 2000);
        console.log("Run");
    }
});
//Add event input
