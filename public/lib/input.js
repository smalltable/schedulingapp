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
        //  david: changed to "evening0", you just had a typo
       console.log("Evening checked");
        evening0 = true;
      }

      // david: don't need this code, it is messing up other code.
      // If none checked then it is considered all they.
      // if(!(evening0 && noon0 && morning0)){
      //   morning0 = true;
      //   noon0 = true;
      //   evening0 = true;
      // }

        $(".addContainer").toggle("fold", 1000);
        $("#shareCalendar").fadeToggle("fast");
        // $("#shareCalendar").fadeToggle("fast");
      $("#extensions").fadeToggle("fast");
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
          "eventLocation": eventLocation0,
          "eventFriends": shareWith0
        },
      });
    }
    if(noon0) {
      firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
        "afternoon": {
          "event": true,
          "eventName": eventName0,
          "eventLocation": eventLocation0,
          "eventFriends": shareWith0
        },
      });
    }
    if(evening0) {
      firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
        "night": {
          "event": true,
          "eventName": eventName0,
          "eventLocation": eventLocation0,
          "eventFriends": shareWith0
        },
      });
    }
    
    updateCalendar();

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
       eventName1 = $('.addInput > #eName1').val();
       eventLocation1 = $('.addInput > #location1').val();
       eventFrom1 = $('#eFrom1').val();
      //  note1 = $('#area0').val();
      //  evening1 = false;
      //  noon1 = false;
      //  morning1 = false;
      // if ($('#gMorning').is(":checked"))
      // {
      //  console.log("Morning checked");
      //   morning0 = true;
      // }
      // if ($('#gNoon').is(":checked"))
      // {
      //  console.log("Noon checked");
      //   noon0 = true;
      // }
      // if ($('#gEvening').is(":checked"))
      // {
      //  console.log("Evening checked");
      //   evening = true;
      // }
      // // If none checked then it is considered all they.
      // if(!(evening1 && noon1 && morning1)){
      //   morning1 = true;
      //   noon1 = true;
      //   evening1 = true;
      // }
        $(".shareContainer").toggle("fold", 1000);
        $("#extensions").fadeToggle("fast");
        $("#addEvent").fadeToggle("fast");
        console.log("Run");

        scheduleCompare();
        openPopup();
    }
});

$('#morningspan').click(function() {
  closePopup();
  var d = new Date(eventFrom1);
  var dayOfWeek = "day" + d.getDay();
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
    "morning": {
    "event": true,
    "eventName": eventName1,
    "eventLocation": eventLocation1,
    "eventFriends": shareWith
    }
  });
  updateCalendar();
});
$('#afternoonspan').click(function() {
  closePopup();
  var d = new Date(eventFrom1);
  var dayOfWeek = "day" + d.getDay();
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
    "afternoon": {
    "event": true,
    "eventName": eventName1,
    "eventLocation": eventLocation1,
    "eventFriends": shareWith
    }
  });
  updateCalendar();
});
$('#eveningspan').click(function() {
  closePopup();
  var d = new Date(eventFrom1);
  var dayOfWeek = "day" + d.getDay();
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek).update({
    "night": {
    "event": true,
    "eventName": eventName1,
    "eventLocation": eventLocation1,
    "eventFriends": shareWith
    }
  });
  updateCalendar();
});

function openPopup() {
  $('.groupSchedulePopup').css('display', 'block');
  $('.topLeft, .leftSide, .rightSide, footer').css('-webkit-animation','image_blur 1s');
  $('.topLeft, .leftSide, .rightSide, footer').css('filter','blur(10px)');
}

function closePopup() {
  $('.groupSchedulePopup').css('display', 'none');
  $('.topLeft, .leftSide, .rightSide, footer').css('-webkit-animation','image_blur_reverse 1s');
  $('.topLeft, .leftSide, .rightSide, footer').css('filter','blur(0px)');
}

// ================= Group Event Dialog ====================
// This jquery method is cursed don't use it EVER!
// ===========================================================
// ==================== Extentions ===========================
// ===========================================================


// Do we really need extentions functionality because
// we are not actually making them connected - Pamir
//
// David: no I don't think we do. We can just leave this
// section and come back should we need it.

// ===========================================================
// ==================== Share Calendar =======================
// ===========================================================
  var shareWith = [];
$(".shareSubmit").click(function(){
   $(this).parent().find('li').each(function(i){
    if($(this).hasClass('selected')){
      if(shareWith.includes($(this).text())){
        console.log("You can't add same person again");
      } else{
      shareWith.push($(this).text());
      }
    }
  });
  // $("#addEvent").fadeToggle("fast");
  // $("#groupEvent").fadeToggle("fast");
  // $("#extensions").fadeToggle("fast");
  // $(".shareContainer").toggle("fold", 1000);
});
// ============= Add event == Friend List ======================
var shareWith0 = [];
$(".btnShare").click(function(){
console.log("share button");
 $(this).parent().find('li').each(function(i){
  if($(this).hasClass('selected')){
    if(shareWith0.includes($(this).text())){
      console.log("You can't add same person again");
    } else{
    shareWith0.push($(this).text());
    }
  }
});
});

// doesn't work for some reason... won't run on document ready. created a "update" button instead.
// $(document).ready(function() {
//   alert('success');
//   var userId = firebase.auth().currentUser.uid;
//   firebase.database().ref("users/" + userId).update({
//     "update": true
//   });
//   updateCalendar();
// });

// refreshes calendar to proper events. can't get it to load on document load for now...
$('#test-button').click(function() {
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId).update({
    "update": true
  });
  
  updateCalendar();
})

var gridCont = document.getElementsByClassName('gridContainer');

function updateCalendar() {
  var d = new Date(eventFrom0);
  var dayOfWeek = "day" + d.getDay();
  var userId = firebase.auth().currentUser.uid;
  var userRef = firebase.database().ref("users/" + userId + '/calendar/week48');
    userRef.once('value').then(function(snapshot) {
      // monday morning update
      var day0MorningEvent = snapshot.child('day0/morning/event').val();
      var day0MorningEventName = snapshot.child('day0/morning/eventName').val();
      var day0MorningEventLocation = snapshot.child('day0/morning/eventLocation').val();
      var day0MorningEventFriends = snapshot.child('day0/morning/eventFriends').val();
      
      if (day0MorningEvent) {
        monMorningName = document.getElementById('mon-morning-eventname').innerHTML = day0MorningEventName;
        monMorningLocation = document.getElementById('mon-morning-eventlocation').innerHTML = day0MorningEventLocation;
        if (day0MorningEventFriends == null) {
          monMorningFriends = document.getElementById('mon-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          monMorningFriends = document.getElementById('mon-morning-eventfriends').innerHTML = day0MorningEventFriends;
        }
      } else {
        monMorningName = document.getElementById('mon-morning-eventname').innerHTML = "No event planned.";
        monMorningLocation = document.getElementById('mon-morning-eventlocation').innerHTML = "";
        monMorningFriends = document.getElementById('mon-morning-eventfriends').innerHTML = "";
      }

      // monday afternoon update
      var day0AfternoonEvent = snapshot.child('day0/afternoon/event').val();
      var day0AfternoonEventName = snapshot.child('day0/afternoon/eventName').val();
      var day0AfternoonEventLocation = snapshot.child('day0/afternoon/eventLocation').val();
      var day0AfternoonEventFriends = snapshot.child('day0/afternoon/eventFriends').val();
      
      if (day0AfternoonEvent) {
        monAfternoonName = document.getElementById('mon-afternoon-eventname').innerHTML = day0AfternoonEventName;
        monAfternoonLocation = document.getElementById('mon-afternoon-eventlocation').innerHTML = day0AfternoonEventLocation;
        if (day0AfternoonEventFriends == null) {
          monAfternoonFriends = document.getElementById('mon-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          monAfternoonFriends = document.getElementById('mon-afternoon-eventfriends').innerHTML = day0AfternoonEventFriends;
        }
      } else {
        monAfternoonName = document.getElementById('mon-afternoon-eventname').innerHTML = "No event planned.";
        monAfternoonLocation = document.getElementById('mon-afternoon-eventlocation').innerHTML = "";
        monAfternoonFriends = document.getElementById('mon-afternoon-eventfriends').innerHTML = "";
      }

      // monday evening update
      var day0EveningEvent = snapshot.child('day0/night/event').val();
      var day0EveningEventName = snapshot.child('day0/night/eventName').val();
      var day0EveningEventLocation = snapshot.child('day0/night/eventLocation').val();
      var day0EveningEventFriends = snapshot.child('day0/night/eventFriends').val();
      
      if (day0EveningEvent) {
        monEveningName = document.getElementById('mon-evening-eventname').innerHTML = day0EveningEventName;
        monEveningLocation = document.getElementById('mon-evening-eventlocation').innerHTML = day0EveningEventLocation;
        if (day0EveningEventFriends == null) {
          monEveningFriends = document.getElementById('mon-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          monEveningFriends = document.getElementById('mon-evening-eventfriends').innerHTML = day0EveningEventFriends;
        }
      } else {
        monEveningName = document.getElementById('mon-evening-eventname').innerHTML = "No event planned.";
        monEveningLocation = document.getElementById('mon-evening-eventlocation').innerHTML = "";
        monEveningFriends = document.getElementById('mon-evening-eventfriends').innerHTML = "";
      }


      // tuesday morning update
      var day1MorningEvent = snapshot.child('day1/morning/event').val();
      var day1MorningEventName = snapshot.child('day1/morning/eventName').val();
      var day1MorningEventLocation = snapshot.child('day1/morning/eventLocation').val();
      var day1MorningEventFriends = snapshot.child('day1/morning/eventFriends').val();
      
      if (day1MorningEvent) {
        tueMorningName = document.getElementById('tue-morning-eventname').innerHTML = day1MorningEventName;
        tueMorningLocation = document.getElementById('tue-morning-eventlocation').innerHTML = day1MorningEventLocation;
        if (day1MorningEventFriends == null) {
          tueMorningFriends = document.getElementById('tue-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          tueMorningFriends = document.getElementById('tue-morning-eventfriends').innerHTML = day1MorningEventFriends;
        }
      } else {
        tueMorningName = document.getElementById('tue-morning-eventname').innerHTML = "No event planned.";
        tueMorningLocation = document.getElementById('tue-morning-eventlocation').innerHTML = "";
        tueMorningFriends = document.getElementById('tue-morning-eventfriends').innerHTML = "";
      }

      // tuesday afternoon update
      var day1AfternoonEvent = snapshot.child('day1/afternoon/event').val();
      var day1AfternoonEventName = snapshot.child('day1/afternoon/eventName').val();
      var day1AfternoonEventLocation = snapshot.child('day1/afternoon/eventLocation').val();
      var day1AfternoonEventFriends = snapshot.child('day1/afternoon/eventFriends').val();
      
      if (day1AfternoonEvent) {
        tueAfternoonName = document.getElementById('tue-afternoon-eventname').innerHTML = day1AfternoonEventName;
        tueAfternoonLocation = document.getElementById('tue-afternoon-eventlocation').innerHTML = day1AfternoonEventLocation;
        if (day1AfternoonEventFriends == null) {
          tueAfternoonFriends = document.getElementById('tue-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          tueAfternoonFriends = document.getElementById('tue-afternoon-eventfriends').innerHTML = day1AfternoonEventFriends;
        }
      } else {
        tueAfternoonName = document.getElementById('tue-afternoon-eventname').innerHTML = "No event planned.";
        tueAfternoonLocation = document.getElementById('tue-afternoon-eventlocation').innerHTML = "";
        tueAfternoonFriends = document.getElementById('tue-afternoon-eventfriends').innerHTML = "";
      }

      // tuesday evening update
      var day1EveningEvent = snapshot.child('day1/night/event').val();
      var day1EveningEventName = snapshot.child('day1/night/eventName').val();
      var day1EveningEventLocation = snapshot.child('day1/night/eventLocation').val();
      var day1EveningEventFriends = snapshot.child('day1/night/eventFriends').val();
      
      if (day1EveningEvent) {
        tueEveningName = document.getElementById('tue-evening-eventname').innerHTML = day1EveningEventName;
        tueEveningLocation = document.getElementById('tue-evening-eventlocation').innerHTML = day1EveningEventLocation;
        if (day1EveningEventFriends == null) {
          tueEveningFriends = document.getElementById('tue-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          tueEveningFriends = document.getElementById('tue-evening-eventfriends').innerHTML = day1EveningEventFriends;
        }
      } else {
        tueEveningName = document.getElementById('tue-evening-eventname').innerHTML = "No event planned.";
        tueEveningLocation = document.getElementById('tue-evening-eventlocation').innerHTML = "";
        tueEveningFriends = document.getElementById('tue-evening-eventfriends').innerHTML = "";
      }

      // wednesday morning update
      var day2MorningEvent = snapshot.child('day2/morning/event').val();
      var day2MorningEventName = snapshot.child('day2/morning/eventName').val();
      var day2MorningEventLocation = snapshot.child('day2/morning/eventLocation').val();
      var day2MorningEventFriends = snapshot.child('day2/morning/eventFriends').val();
      
      if (day2MorningEvent) {
        wedMorningName = document.getElementById('wed-morning-eventname').innerHTML = day2MorningEventName;
        wedMorningLocation = document.getElementById('wed-morning-eventlocation').innerHTML = day2MorningEventLocation;
        if (day2MorningEventFriends == null) {
          wedMorningFriends = document.getElementById('wed-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          wedMorningFriends = document.getElementById('wed-morning-eventfriends').innerHTML = day2MorningEventFriends;
        }
      } else {
        wedMorningName = document.getElementById('wed-morning-eventname').innerHTML = "No event planned.";
        wedMorningLocation = document.getElementById('wed-morning-eventlocation').innerHTML = "";
        wedMorningFriends = document.getElementById('wed-morning-eventfriends').innerHTML = "";
      }

      // wednesday afternoon update
      var day2AfternoonEvent = snapshot.child('day2/afternoon/event').val();
      var day2AfternoonEventName = snapshot.child('day2/afternoon/eventName').val();
      var day2AfternoonEventLocation = snapshot.child('day2/afternoon/eventLocation').val();
      var day2AfternoonEventFriends = snapshot.child('day2/afternoon/eventFriends').val();
      
      if (day2AfternoonEvent) {
        wedAfternoonName = document.getElementById('wed-afternoon-eventname').innerHTML = day2AfternoonEventName;
        wedAfternoonLocation = document.getElementById('wed-afternoon-eventlocation').innerHTML = day2AfternoonEventLocation;
        if (day2AfternoonEventFriends == null) {
          wedAfternoonFriends = document.getElementById('wed-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          wedAfternoonFriends = document.getElementById('wed-afternoon-eventfriends').innerHTML = day2AfternoonEventFriends;
        }
      } else {
        wedAfternoonName = document.getElementById('wed-afternoon-eventname').innerHTML = "No event planned.";
        wedAfternoonLocation = document.getElementById('wed-afternoon-eventlocation').innerHTML = "";
        wedAfternoonFriends = document.getElementById('wed-afternoon-eventfriends').innerHTML = "";
      }

      // wednesday evening update
      var day2EveningEvent = snapshot.child('day2/night/event').val();
      var day2EveningEventName = snapshot.child('day2/night/eventName').val();
      var day2EveningEventLocation = snapshot.child('day2/night/eventLocation').val();
      var day2EveningEventFriends = snapshot.child('day2/night/eventFriends').val();
      
      if (day2EveningEvent) {
        wedEveningName = document.getElementById('wed-evening-eventname').innerHTML = day2EveningEventName;
        wedEveningLocation = document.getElementById('wed-evening-eventlocation').innerHTML = day2EveningEventLocation;
        if (day2EveningEventFriends == null) {
          wedEveningFriends = document.getElementById('wed-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          wedEveningFriends = document.getElementById('wed-evening-eventfriends').innerHTML = day2EveningEventFriends;
        }
      } else {
        wedEveningName = document.getElementById('wed-evening-eventname').innerHTML = "No event planned.";
        wedEveningLocation = document.getElementById('wed-evening-eventlocation').innerHTML = "";
        wedEveningFriends = document.getElementById('wed-evening-eventfriends').innerHTML = "";
      }

      // thursday morning update
      var day3MorningEvent = snapshot.child('day3/morning/event').val();
      var day3MorningEventName = snapshot.child('day3/morning/eventName').val();
      var day3MorningEventLocation = snapshot.child('day3/morning/eventLocation').val();
      var day3MorningEventFriends = snapshot.child('day3/morning/eventFriends').val();
      
      if (day3MorningEvent) {
        thuMorningName = document.getElementById('thu-morning-eventname').innerHTML = day3MorningEventName;
        thuMorningLocation = document.getElementById('thu-morning-eventlocation').innerHTML = day3MorningEventLocation;
        if (day3MorningEventFriends == null) {
          thuMorningFriends = document.getElementById('thu-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          thuMorningFriends = document.getElementById('thu-morning-eventfriends').innerHTML = day3MorningEventFriends;
        }
      } else {
        thuMorningName = document.getElementById('thu-morning-eventname').innerHTML = "No event planned.";
        thuMorningLocation = document.getElementById('thu-morning-eventlocation').innerHTML = "";
        thuMorningFriends = document.getElementById('thu-morning-eventfriends').innerHTML = "";
      }

      // thursday afternoon update
      var day3AfternoonEvent = snapshot.child('day3/afternoon/event').val();
      var day3AfternoonEventName = snapshot.child('day3/afternoon/eventName').val();
      var day3AfternoonEventLocation = snapshot.child('day3/afternoon/eventLocation').val();
      var day3AfternoonEventFriends = snapshot.child('day3/afternoon/eventFriends').val();
      
      if (day3AfternoonEvent) {
        thuAfternoonName = document.getElementById('thu-afternoon-eventname').innerHTML = day3AfternoonEventName;
        thuAfternoonLocation = document.getElementById('thu-afternoon-eventlocation').innerHTML = day3AfternoonEventLocation;
        if (day3AfternoonEventFriends == null) {
          thuAfternoonFriends = document.getElementById('thu-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          thuAfternoonFriends = document.getElementById('thu-afternoon-eventfriends').innerHTML = day3AfternoonEventFriends;
        }
      } else {
        thuAfternoonName = document.getElementById('thu-afternoon-eventname').innerHTML = "No event planned.";
        thuAfternoonLocation = document.getElementById('thu-afternoon-eventlocation').innerHTML = "";
        thuAfternoonFriends = document.getElementById('thu-afternoon-eventfriends').innerHTML = "";
      }

      // thursday evening update
      var day3EveningEvent = snapshot.child('day3/night/event').val();
      var day3EveningEventName = snapshot.child('day3/night/eventName').val();
      var day3EveningEventLocation = snapshot.child('day3/night/eventLocation').val();
      var day3EveningEventFriends = snapshot.child('day3/night/eventFriends').val();
      
      if (day3EveningEvent) {
        thuEveningName = document.getElementById('thu-evening-eventname').innerHTML = day3EveningEventName;
        thuEveningLocation = document.getElementById('thu-evening-eventlocation').innerHTML = day3EveningEventLocation;
        if (day3EveningEventFriends == null) {
          thuEveningFriends = document.getElementById('thu-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          thuEveningFriends = document.getElementById('thu-evening-eventfriends').innerHTML = day3EveningEventFriends;
        }
      } else {
        thuEveningName = document.getElementById('thu-evening-eventname').innerHTML = "No event planned.";
        thuEveningLocation = document.getElementById('thu-evening-eventlocation').innerHTML = "";
        thuEveningFriends = document.getElementById('thu-evening-eventfriends').innerHTML = "";
      }
      

      // friday morning update
      var day4MorningEvent = snapshot.child('day4/morning/event').val();
      var day4MorningEventName = snapshot.child('day4/morning/eventName').val();
      var day4MorningEventLocation = snapshot.child('day4/morning/eventLocation').val();
      var day4MorningEventFriends = snapshot.child('day4/morning/eventFriends').val();
      
      if (day4MorningEvent) {
        friMorningName = document.getElementById('fri-morning-eventname').innerHTML = day4MorningEventName;
        friMorningLocation = document.getElementById('fri-morning-eventlocation').innerHTML = day4MorningEventLocation;
        if (day4MorningEventFriends == null) {
          friMorningFriends = document.getElementById('fri-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          friMorningFriends = document.getElementById('fri-morning-eventfriends').innerHTML = day4MorningEventFriends;
        }
      } else {
        friMorningName = document.getElementById('fri-morning-eventname').innerHTML = "No event planned.";
        friMorningLocation = document.getElementById('fri-morning-eventlocation').innerHTML = "";
        friMorningFriends = document.getElementById('fri-morning-eventfriends').innerHTML = "";
      }

      // friday afternoon update
      var day4AfternoonEvent = snapshot.child('day4/afternoon/event').val();
      var day4AfternoonEventName = snapshot.child('day4/afternoon/eventName').val();
      var day4AfternoonEventLocation = snapshot.child('day4/afternoon/eventLocation').val();
      var day4AfternoonEventFriends = snapshot.child('day4/afternoon/eventFriends').val();
      
      if (day4AfternoonEvent) {
        friAfternoonName = document.getElementById('fri-afternoon-eventname').innerHTML = day4AfternoonEventName;
        friAfternoonLocation = document.getElementById('fri-afternoon-eventlocation').innerHTML = day4AfternoonEventLocation;
        if (day4AfternoonEventFriends == null) {
          friAfternoonFriends = document.getElementById('fri-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          friAfternoonFriends = document.getElementById('fri-afternoon-eventfriends').innerHTML = day4AfternoonEventFriends;
        }
      } else {
        friAfternoonName = document.getElementById('fri-afternoon-eventname').innerHTML = "No event planned.";
        friAfternoonLocation = document.getElementById('fri-afternoon-eventlocation').innerHTML = "";
        friAfternoonFriends = document.getElementById('fri-afternoon-eventfriends').innerHTML = "";
      }

      // friday evening update
      var day4EveningEvent = snapshot.child('day4/night/event').val();
      var day4EveningEventName = snapshot.child('day4/night/eventName').val();
      var day4EveningEventLocation = snapshot.child('day4/night/eventLocation').val();
      var day4EveningEventFriends = snapshot.child('day4/night/eventFriends').val();
      
      if (day4EveningEvent) {
        friEveningName = document.getElementById('fri-evening-eventname').innerHTML = day4EveningEventName;
        friEveningLocation = document.getElementById('fri-evening-eventlocation').innerHTML = day4EveningEventLocation;
        if (day4EveningEventFriends == null) {
          friEveningFriends = document.getElementById('fri-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          friEveningFriends = document.getElementById('fri-evening-eventfriends').innerHTML = day4EveningEventFriends;
        }
      } else {
        friEveningName = document.getElementById('fri-evening-eventname').innerHTML = "No event planned.";
        friEveningLocation = document.getElementById('fri-evening-eventlocation').innerHTML = "";
        friEveningFriends = document.getElementById('fri-evening-eventfriends').innerHTML = "";
      }


      // saturday morning update
      var day5MorningEvent = snapshot.child('day5/morning/event').val();
      var day5MorningEventName = snapshot.child('day5/morning/eventName').val();
      var day5MorningEventLocation = snapshot.child('day5/morning/eventLocation').val();
      var day5MorningEventFriends = snapshot.child('day5/morning/eventFriends').val();
      
      if (day5MorningEvent) {
        satMorningName = document.getElementById('sat-morning-eventname').innerHTML = day5MorningEventName;
        satMorningLocation = document.getElementById('sat-morning-eventlocation').innerHTML = day5MorningEventLocation;
        if (day5MorningEventFriends == null) {
          satMorningFriends = document.getElementById('sat-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          satMorningFriends = document.getElementById('sat-morning-eventfriends').innerHTML = day5MorningEventFriends;
        }
      } else {
        satMorningName = document.getElementById('sat-morning-eventname').innerHTML = "No event planned.";
        satMorningLocation = document.getElementById('sat-morning-eventlocation').innerHTML = "";
        satMorningFriends = document.getElementById('sat-morning-eventfriends').innerHTML = "";
      }

      // saturday afternoon update
      var day5AfternoonEvent = snapshot.child('day5/afternoon/event').val();
      var day5AfternoonEventName = snapshot.child('day5/afternoon/eventName').val();
      var day5AfternoonEventLocation = snapshot.child('day5/afternoon/eventLocation').val();
      var day5AfternoonEventFriends = snapshot.child('day5/afternoon/eventFriends').val();
      
      if (day5AfternoonEvent) {
        satAfternoonName = document.getElementById('sat-afternoon-eventname').innerHTML = day5AfternoonEventName;
        satAfternoonLocation = document.getElementById('sat-afternoon-eventlocation').innerHTML = day5AfternoonEventLocation;
        if (day5AfternoonEventFriends == null) {
          satAfternoonFriends = document.getElementById('sat-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          satAfternoonFriends = document.getElementById('sat-afternoon-eventfriends').innerHTML = day5AfternoonEventFriends;
        }
      } else {
        satAfternoonName = document.getElementById('sat-afternoon-eventname').innerHTML = "No event planned.";
        satAfternoonLocation = document.getElementById('sat-afternoon-eventlocation').innerHTML = "";
        satAfternoonFriends = document.getElementById('sat-afternoon-eventfriends').innerHTML = "";
      }

      // saturday evening update
      var day5EveningEvent = snapshot.child('day5/night/event').val();
      var day5EveningEventName = snapshot.child('day5/night/eventName').val();
      var day5EveningEventLocation = snapshot.child('day5/night/eventLocation').val();
      var day5EveningEventFriends = snapshot.child('day5/night/eventFriends').val();
      
      if (day5EveningEvent) {
        satEveningName = document.getElementById('sat-evening-eventname').innerHTML = day5EveningEventName;
        satEveningLocation = document.getElementById('sat-evening-eventlocation').innerHTML = day5EveningEventLocation;
        if (day5EveningEventFriends == null) {
          satEveningFriends = document.getElementById('sat-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          satEveningFriends = document.getElementById('sat-evening-eventfriends').innerHTML = day5EveningEventFriends;
        }
      } else {
        satEveningName = document.getElementById('sat-evening-eventname').innerHTML = "No event planned.";
        satEveningLocation = document.getElementById('sat-evening-eventlocation').innerHTML = "";
        satEveningFriends = document.getElementById('sat-evening-eventfriends').innerHTML = "";
      }


      // sunday morning update
      var day6MorningEvent = snapshot.child('day6/morning/event').val();
      var day6MorningEventName = snapshot.child('day6/morning/eventName').val();
      var day6MorningEventLocation = snapshot.child('day6/morning/eventLocation').val();
      var day6MorningEventFriends = snapshot.child('day6/morning/eventFriends').val();
      
      if (day6MorningEvent) {
        sunMorningName = document.getElementById('sun-morning-eventname').innerHTML = day6MorningEventName;
        sunMorningLocation = document.getElementById('sun-morning-eventlocation').innerHTML = day6MorningEventLocation;
        if (day6MorningEventFriends == null) {
          sunMorningFriends = document.getElementById('sun-morning-eventfriends').innerHTML = "No other participants.";
        } else {
          sunMorningFriends = document.getElementById('sun-morning-eventfriends').innerHTML = day6MorningEventFriends;
        }
      } else {
        sunMorningName = document.getElementById('sun-morning-eventname').innerHTML = "No event planned.";
        sunMorningLocation = document.getElementById('sun-morning-eventlocation').innerHTML = "";
        sunMorningFriends = document.getElementById('sun-morning-eventfriends').innerHTML = "";
      }

      // sunday afternoon update
      var day6AfternoonEvent = snapshot.child('day6/afternoon/event').val();
      var day6AfternoonEventName = snapshot.child('day6/afternoon/eventName').val();
      var day6AfternoonEventLocation = snapshot.child('day6/afternoon/eventLocation').val();
      var day6AfternoonEventFriends = snapshot.child('day6/afternoon/eventFriends').val();
      
      if (day6AfternoonEvent) {
        sunAfternoonName = document.getElementById('sun-afternoon-eventname').innerHTML = day6AfternoonEventName;
        sunAfternoonLocation = document.getElementById('sun-afternoon-eventlocation').innerHTML = day6AfternoonEventLocation;
        if (day6AfternoonEventFriends == null) {
          sunAfternoonFriends = document.getElementById('sun-afternoon-eventfriends').innerHTML = "No other participants.";
        } else {
          sunAfternoonFriends = document.getElementById('sun-afternoon-eventfriends').innerHTML = day6AfternoonEventFriends;
        }
      } else {
        sunAfternoonName = document.getElementById('sun-afternoon-eventname').innerHTML = "No event planned.";
        sunAfternoonLocation = document.getElementById('sun-afternoon-eventlocation').innerHTML = "";
        sunAfternoonFriends = document.getElementById('sun-afternoon-eventfriends').innerHTML = "";
      }

      // sunday evening update
      var day6EveningEvent = snapshot.child('day6/night/event').val();
      var day6EveningEventName = snapshot.child('day6/night/eventName').val();
      var day6EveningEventLocation = snapshot.child('day6/night/eventLocation').val();
      var day6EveningEventFriends = snapshot.child('day6/night/eventFriends').val();
      
      if (day6EveningEvent) {
        sunEveningName = document.getElementById('sun-evening-eventname').innerHTML = day6EveningEventName;
        sunEveningLocation = document.getElementById('sun-evening-eventlocation').innerHTML = day6EveningEventLocation;
        if (day6EveningEventFriends == null) {
          sunEveningFriends = document.getElementById('sun-evening-eventfriends').innerHTML = "No other participants.";
        } else {
          sunEveningFriends = document.getElementById('sun-evening-eventfriends').innerHTML = day6EveningEventFriends;
        }
      } else {
        sunEveningName = document.getElementById('sun-evening-eventname').innerHTML = "No event planned.";
        sunEveningLocation = document.getElementById('sun-evening-eventlocation').innerHTML = "";
        sunEveningFriends = document.getElementById('sun-evening-eventfriends').innerHTML = "";
      }
    
      // var gridCont = document.getElementsByClassName('gridContainer');
      var paras = gridCont[0].getElementsByTagName('p');
      for (i = 0; i < paras.length; i++) {
        if (paras[i].innerText == "No event planned.") {
          paras[i].style.backgroundColor = "transparent";
          paras[i].style.fontWeight = "lighter";
        } else {
          paras[i].style.backgroundColor = "rgb(79, 79, 187)";
          paras[i].style.fontWeight = "bold";
        }
      
      }
    });
}


// clears the user's database for new weeks.
function newDatabase() {
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId).update({
      "calendar": {
          "week48": {
              "day0": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day1": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day2": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day3": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day4": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day5": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              },
              "day6": {
                  "morning": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T06:00:00.000",
                      "end": "2018-12-02T11:00:00.000"
                  },
                  "afternoon": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T12:00:00.000",
                      "end": "2018-12-02T17:00:00.000"
                  },
                  "night": {
                      "event": false,
                      "eventName": "null",
                      "eventLocation": "null",
                      "eventFriends": "null",
                      "eventNotes": "null",
                      "start": "2018-12-02T18:00:00.000",
                      "end": "2018-12-02T23:00:00.000"
                  }
              }
          }
      },
      
  });
} 


$('#reset-button').click(function(){
  newDatabase();
  updateCalendar();
})

$(document).ready(function() {
  var paras = gridCont[0].getElementsByTagName('p');
      for (i = 0; i < paras.length; i++) {
        if (paras[i].innerText == "No event planned.") {
          paras[i].style.backgroundColor = "transparent";
          paras[i].style.fontWeight = "lighter";
        }
      }
})


function findUsersByName(name) {
  var fb = firebase.database().ref();
  fb.child('users').orderByChild('name').equalTo(name).once('value', function(snap) {
      console.log(snap.val());
  });
}

var d = new Date(eventFrom1);
var user1Morning;
var user1Afternoon;
var user1Evening;


// compare engine
function scheduleCompare() {
    // user1.calendar.week.day (morning, afternoon, night) compareTo user2.calendar.week.day (morning, afternoon, night) -- return all results were user1 && user2 is false.
    var d = new Date(eventFrom1);
    var dayOfWeek = "day" + d.getDay();

    var userCompare;
    var user2MorningEvent;
    var user2AfternoonEvent;
    var user2EveningEvent;
    
    switch(d.getDay()) {
      case 0:
        if ($('#mon-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
      case 1:
        if ($('#tue-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
      case 2:
        if ($('#wed-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
      case 3:
        if ($('#thu-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
      case 4:
        if ($('#fri-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
      case 5:
        if ($('#sat-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
        user1Morning = true;
        }
        break;
      case 6:
        if ($('#sun-morning-eventname')[0].innerText == "No event planned.") {
          user1Morning = false;
        } else {
          user1Morning = true;
        }
        break;
    }

    switch(d.getDay()) {
      case 0:
        if ($('#mon-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
      case 1:
        if ($('#tue-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
      case 2:
        if ($('#wed-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
      case 3:
        if ($('#thu-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
      case 4:
        if ($('#fri-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
      case 5:
        if ($('#sat-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
        user1Afternoon = true;
        }
        break;
      case 6:
        if ($('#sun-afternoon-eventname')[0].innerText == "No event planned.") {
          user1Afternoon = false;
        } else {
          user1Afternoon = true;
        }
        break;
    }

    switch(d.getDay()) {
      case 0:
        if ($('#mon-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 1:
        if ($('#tue-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 2:
        if ($('#wed-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 3:
        if ($('#thu-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 4:
        if ($('#fri-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 5:
        if ($('#sat-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
      case 6:
        if ($('#sun-evening-eventname')[0].innerText == "No event planned.") {
          user1Evening = false;
        } else {
          user1Evening = true;
        }
        break;
    }


    for (let k = 0; k < shareWith.length; k++) {
      switch(shareWith[k]) {
        case "Ken Okiebisu":
          userCompare = "2kVp1TSdxoTmI9W6XkGlqbdG2Z73";
          break;
        case "Pamir Kantar":
          userCompare = "LjgUtD0ntiXJkPXsZJvYUG6NDKy2"
          break;
        case "Steve Jobs":
          userCompare = "QfmvAIHoUwcJkKyNiCNyjUBOnk13";
          break;
        case "David Wang":
          userCompare = "hIqGxQ9pQIVX3DQ9a1oIiYK8VOO2";
          break;
      }
    }

      var userRef2 = firebase.database().ref("users/" + userCompare + '/calendar/week48');
      userRef2.once('value').then(function(snapshot) {
        user2MorningEvent = snapshot.child(dayOfWeek + '/morning/event').val();
        user2AfternoonEvent = snapshot.child(dayOfWeek + '/afternoon/event').val();
        user2EveningEvent = snapshot.child(dayOfWeek + '/night/event').val();


        if (user2MorningEvent || user1Morning) {
          $('#morningspan').css('background-color', 'rgb(172, 6, 6)');
        } else {
          $('#morningspan').css('background-color', 'rgb(50, 177, 0)');
        }
  
        if (user2AfternoonEvent || user1Afternoon) {
          $('#afternoonspan').css('background-color', 'rgb(172, 6, 6)');
        } else {
          $('#afternoonspan').css('background-color', 'rgb(50, 177, 0)');
        }
  
        if (user2EveningEvent || user1Evening) {
          $('#eveningspan').css('background-color', 'rgb(172, 6, 6)');
        } else {
          $('#eveningspan').css('background-color', 'rgb(50, 177, 0)');
        }

      });
}