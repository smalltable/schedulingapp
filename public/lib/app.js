
// hamburger rotation
$(".hamIcon").click(function() {
  $(this).toggleClass("open")
});


$(".eventButton").click(function() {
  $("#shareCalendar").fadeToggle("fast");
  // $("#shareCalendar").fadeToggle("fast");
$("#extensions").fadeToggle("fast");
  $(".addContainer").toggle("fold", 1000);
});


// $(".groupButton").click(function(){
//   $("#addEvent").fadeToggle("fast");
//   $("#extentions").fadeToggle("fast");
//   $(".groupContainer").toggle("fold", 1000);
// })

$(".shareButton").click(function(){
  $("#addEvent").fadeToggle("fast");
  // $("#groupEvent").fadeToggle("fast");
  $("#extensions").fadeToggle("fast");
  $(".shareContainer").toggle("fold", 1000);
});

var ul = document.getElementsByClassName("fList")
var li = ul[0].getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    $(li[i]).toggleClass("selected");
  });
}


$(".extentionButton").click(function(){
  $("#addEvent").fadeToggle("fast");
  // $("#groupEvent").fadeToggle("fast");
  $("#shareCalendar").fadeToggle("fast");
  $(".extContainer").toggle("fold", 1000);
});

$(".groupAddFriends").click(function(){
  $(".shareWith").toggle("slide");
})
var ul0 = $(".shareList");
var li0 = ul0[0].getElementsByTagName("li");
for (let i = 0; i < li0.length; i++) {
  li0[i].addEventListener("click", function() {
    $(li0[i]).toggleClass("selected");
  });
}
$(".btnShare").click(function(){
  $(".shareWith").fadeToggle("slide");
});

// Firebase database

// **** david: removing test button ****
// $("#test-button").click(function() {
//   firebase.database().ref().child("test").set("testestetsetestest");
// });

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
