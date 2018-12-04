// hamburger rotation
$(".hamIcon").click(function () {
  // $(this).toggleClass("open")
  openNav();
});

$(".closebtn").click(function () {
  closeNav();
})

// david: open and close side bar nav!
function openNav() {
  document.getElementById("rightSideNav").style.width = "175px";
  // $('.topLeft, .leftSide, .rightSide').css('filter','blur(5px)');
  $('.topLeft, .leftSide, .rightSide, footer').css('-webkit-animation', 'image_blur 1s');
  $('.topLeft, .leftSide, .rightSide, footer').css('filter', 'blur(10px)');
}

function closeNav() {
  document.getElementById("rightSideNav").style.width = "0";
  $('.topLeft, .leftSide, .rightSide, footer').css('-webkit-animation', 'image_blur_reverse 1s');
  $('.topLeft, .leftSide, .rightSide, footer').css('filter', 'blur(0px)');
}

$(".eventButton").click(function () {
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

$(".shareButton").click(function () {
  $("#addEvent").fadeToggle("fast");
  // $("#groupEvent").fadeToggle("fast");
  $("#extensions").fadeToggle("fast");
  $(".shareContainer").toggle("fold", 1000);
});

// var ul = document.getElementsByClassName("fList")
// var li = ul[0].getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener("click", function() {
//     $(li[i]).toggleClass("selected");
//   });
// }


$(".extentionButton").click(function () {
  $("#addEvent").fadeToggle("fast");
  // $("#groupEvent").fadeToggle("fast");
  $("#shareCalendar").fadeToggle("fast");
  $(".extContainer").toggle("fold", 1000);
});

$(".groupAddFriends").click(function () {
  $(".shareWith").toggle("slide");
})
var ul0 = $(".shareList");
var li0 = ul0[0].getElementsByTagName("li");
for (let i = 0; i < li0.length; i++) {
  li0[i].addEventListener("click", function () {
    $(li0[i]).toggleClass("selected");
  });
}
$(".btnShare").click(function () {
  $(".shareWith").fadeToggle("slide");
});

var ul1 = $(".shareList1");
var li1 = ul1[0].getElementsByTagName("li");
for (let i = 0; i < li1.length; i++) {
  li1[i].addEventListener("click", function () {
    $(li1[i]).toggleClass("selected");
  });
}
$(".shareSubmit").click(function () {
  $(".shareWith").fadeToggle("slide");
});

// $(document).ready(function(){
//   var userId = firebase.auth().currentUser.uid;
//   var userRef = firebase.database().ref("users/" + userId)
//   userRef.once('value').then(function(snapshot) {
//     var userName = userRef.snapshot.child('name').val();
//   });
//   document.getElementsById('#user-greeting').innerHTML = "Welcome back," + userName;
// })

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


// david: creating a popup notification notifying a new user and database has been created.
// function newUserPopup() {
//   var newPopup = document.getElementById('new-user-popup');
//   var newClose = document.getElementById('new-close');

//   newPopup.style.display = "block";

//   newClose.onclick = function() {
//       newPopup.style.display = "none";
//   }

//   window.onclick = function(event) {
//       if (event.target == newPopup) {
//           newPopup.style.display = "none";
//       }
//   }

// }