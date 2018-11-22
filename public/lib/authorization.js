// $("#test-button").click(function() {
//   firebase.database().ref().child("test").set("testestetsetestest");
// });


function newUserDatabase() {

    var firebase = app_firebase;

    // for the currently authenticated firebase user
    // create a user in firebase database with user's UID.
    // also creates and adds an empty calendar database for current user.

    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref("users/" + user.uid).update({
            "name": user.displayName,
            "email": user.email,
            "calendar": {
                "week1": {
                    "day0": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day1": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day2": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day3": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day4": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day5": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    },
                    "day6": {
                        "morning": false,
                        "afternoon": false,
                        "night": false
                    }
                }
            },
            "friendlist": {
                "friend0": "test"
            }
        });

    });

};