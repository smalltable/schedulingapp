
// hamburger rotation
$(".hamIcon").click(function() {
  $(this).toggleClass("open")
});


$(".eventButton").click(function() {
  $("#shareCalendar").fadeToggle("slow");
  // $("#shareCalendar").fadeToggle("slow");
$("#extensions").fadeToggle("slow");
  $(".addContainer").toggle("fold", 2000);
});


// $(".groupButton").click(function(){
//   $("#addEvent").fadeToggle("slow");
//   $("#extentions").fadeToggle("slow");
//   $(".groupContainer").toggle("fold", 2000);
// })

$(".shareButton").click(function(){
  $("#addEvent").fadeToggle("slow");
  // $("#groupEvent").fadeToggle("slow");
  $("#extensions").fadeToggle("slow");
  $(".shareContainer").toggle("fold", 2000);
});

var ul = document.getElementsByClassName("fList")
var li = ul[0].getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    console.log("you clicked region number " + i);
    $(li[i]).toggleClass("selected");
  });
}


$(".extentionButton").click(function(){
  $("#addEvent").fadeToggle("slow");
  // $("#groupEvent").fadeToggle("slow");
  $("#shareCalendar").fadeToggle("slow");
  $(".extContainer").toggle("fold", 2000);
});

$(".groupAddFriends").click(function(){
  $(".shareWith").toggle("slide");
})
var ul0 = $(".shareList");
var li0 = ul0[0].getElementsByTagName("li");
for (let i = 0; i < li0.length; i++) {
  li0[i].addEventListener("click", function() {
    console.log("you clicked region number " + i);
    $(li0[i]).toggleClass("selected");
  });
}
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
