// ===========================================================
// ==================== Add Event ==========================
// ===========================================================

var eventName0;
var eventLocation0;
var eventFrom0;
var evening0;
var noon0;
var morning0;
var note0;
$("#addEventSubmit").click(function() {
    var empty0 = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if(empty0.length) {
        alert("Please fill all inputs");
    } else {
       eventName0 = $('.addInput > #eName').val();
       eventLocation0 = $('.addInput > #location').val();
       eventFrom0 = $('#eFrom').val();
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

      // david: don't need this code, it is messing up other code.
      // If none checked then it is considered all they.
      // if(!(evening0 && noon0 && morning0)){
      //   morning0 = true;
      //   noon0 = true;
      //   evening0 = true;
      // }

        $(".addContainer").toggle("fold", 2000);
        console.log("Run");
    }

    // david: writing data to database
    var d = new Date(eventFrom0);
    var dayOfWeek = "day" + d.getDay();
    var userId = firebase.auth().currentUser.uid;
    if(morning0) {
      firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
        "morning": {
          "event": true,
          "eventName": eventName0,
          "location": eventLocation0,
          "notes": note0
        },
      });
    }
    if(noon0) {
      firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
        "afternoon": {
          "event": true,
          "eventName": eventName0,
          "location": eventLocation0,
          "notes": note0
        },
      });
    }
    if(evening0) {
      firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
        "night": {
          "event": true,
          "eventName": eventName0,
          "location": eventLocation0,
          "notes": note0
        },
      });
    }

});

// ===========================================================
// ==================== Group Event ==========================
// ===========================================================

var eventName1;
var eventLocation1;
var eventFrom1;
var evening1;
var noon1;
var morning1;
var note1;
$("#groupEventSubmit").click(function() {
    var empty1 = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if(empty1.length) {
        alert("Please fill all inputs");
    } else {
       eventName1 = $('.addInput > #eName').val();
       eventLocation1 = $('.addInput > #location').val();
       eventFrom1 = $('#eFrom').val();
       note1 = $('#area0').val();
       evening1 = false;
       noon1 = false;
       morning1 = false;
      if ($('#gMorning').is(":checked"))
      {
       console.log("Morning checked");
        morning0 = true;
      }
      if ($('#gNoon').is(":checked"))
      {
       console.log("Noon checked");
        noon0 = true;
      }
      if ($('#gEvening').is(":checked"))
      {
       console.log("Evening checked");
        evening = true;
      }
      // If none checked then it is considered all they.
      if(!(evening1 && noon1 && morning1)){
        morning1 = true;
        noon1 = true;
        evening1 = true;
      }
        $(".groupContainer").toggle("fold", 2000);
        console.log("Run");
    }
});
// ================= Group Event Dialog ====================


// ===========================================================
// ==================== Extentions ===========================
// ===========================================================


// Do we really need extentions functionality because
// we are not actually making them connected - Pamir

// ===========================================================
// ==================== Share Calendar =======================
// ===========================================================
  var shareWith = [];
$("#shareSubmit").click(function(){
   $(this).parent().find('li').each(function(i){
    if($(this).hasClass('selected')){
      if(shareWith.includes($(this).text())){
        console.log("You can't add same person again");
      } else{
      shareWith.push($(this).text());
      }
    }
  });
});
