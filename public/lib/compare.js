// *** David: comparisson engine that compares two schedules
// and selects time where both schedules do not have events ***

var userId = firebase.auth().currentUser.uid;

// compare engine
function scheduleCompare() {
    // user1.calendar.week.day (morning, afternoon, night) compareTo user2.calendar.week.day (morning, afternoon, night) -- return all results were user1 && user2 is false.
    var d = new Date(eventFrom1);
    var dayOfWeek = "day" + dayOfWeek.getDay();
    var times = ["morning", "afternoon", "night"];
    var friends = shareWith;
    var user2Id = firebase.database().child('users')
    .orderByChild('name').equalTo(shareWith[k]);
    var finalResult = [];

    for (k = 0; k < shareWith.length(); k++) {
        var result1 = [];
        var result2 = [];
        var user2Id = firebase.database().child('users').orderByChild('name').equalTo(shareWith[k]);
        
        for (i = 0; i < times.length(); i++) {
            result1.push(firebase.database().ref("users/" + user2Id + "/calendar/week48/" + dayOfWeek + "/" + times[i]));
        }
        for (i = 0; i < times.length(); i++) {
            result2.push(firebase.database().ref("users/" + userId + "/calendar/week48/" + dayOfWeek + "/" + times[i] + "/event"));
        };


    }
    
}