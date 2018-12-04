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
            "friendlist": {
                "friend0": "test"
            },

        });

    });

};