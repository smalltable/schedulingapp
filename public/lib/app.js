// function validateForm() {
//     var valid = true;
//     $('.addInput, input, textarea').each(function () {
//         if ($(this).val() === '') {
//             valid = false;
//             return valid;
//         }
//     });
//     return valid;
// }

// hamburger rotation
$(".hamIcon").click(function() {
  $(this).toggleClass("open")
});


$("#addEvent").click(function() {
  console.log("hey");
  $(".addContainer").toggle("fold", 2500);
});


$("#addEventSubmit").click(function() {
// Check if all fields are full, if yes then fold it back and send the form field.
});

$("#groupEvent").click(function(){
  $("#addEvent").fadeToggle("fast");
  $(".groupContainer").toggle("fold", 2500);
})

$("#shareCalendar").click(function(){
  $("#addEvent").fadeToggle("fast");
  $("#groupEvent").fadeToggle("fast");
  $(".shareContainer").toggle("fold", 2500);
});

var ul = document.getElementsByClassName("fList")
var li = ul[0].getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    console.log("you clicked region number " + i);
    $(li[i]).toggleClass("selected");
  });
}


$("#extensions").click(function(){
  $("#addEvent").fadeToggle("slow");
  $("#groupEvent").fadeToggle("slow");
  $("#shareCalendar").fadeToggle("slow");
  $(".extContainer").toggle("fold", 2500);
});


// Firebase database 

$("#test-button").click(function() {
  firebase.database().ref().child("test").set("testestetsetestest");
});

// var database = firebase.database();

// $("#")

// function writeNewPost(uid, username, picture, title, body) {
//   // A post entry.
//   var postData = {
//     author: username,
//     uid: uid,
//     body: body,
//     title: title,
//     starCount: 0,
//     authorPic: picture
//   };
// $('input[type=submit]')
//   // Get a key for a new Post.
//   var newPostKey = firebase.database().ref().child('posts').push().key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + uid + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }
