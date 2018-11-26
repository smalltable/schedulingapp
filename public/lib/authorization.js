// $("#test-button").click(function() {
//   firebase.database().ref().child("test").set("testestetsetestest");
// });


function newUserDatabase() {

    // david: commenting out because uneeded.
    // var firebase = app_firebase;

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
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                        "event": false,
                        "eventName": "null",
                        "eventLocation": "null",
                        "eventFriends": "null",
                        "eventNotes": "null"
                        }
                    },
                    "day1": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    },
                    "day2": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    },
                    "day3": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    },
                    "day4": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    },
                    "day5": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    },
                    "day6": {
                        "morning": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "afternoon": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        },
                        "night": {
                            "event": false,
                            "eventName": "null",
                            "eventLocation": "null",
                            "eventFriends": "null",
                            "eventNotes": "null"
                        }
                    }
                }
            },
            "friendlist": {
                "friend0": "test"
            }
        });

    });

};