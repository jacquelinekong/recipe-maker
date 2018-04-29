// Jacqueline Kong
// jek2179
// UI Design Final Project

function takeScreenshot(source, dest) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');
  var new_image = document.createElement("img");
  var new_div = $("<div>")

  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  // dest.append(canvas);
  var data = canvas.toDataURL('image/jpeg');
  new_image.src = data;

  new_div.append(new_image);
  dest.append(new_div);
  dest.scrollTop(dest.prop('scrollHeight'));
}

function addNote(dest) {
  var note = $("#note-form").val();
  var new_note = $("<div>");
  $(new_note).text(note);

  dest.append(new_note);
  $("#note-form").val("");
  dest.scrollTop(dest.prop('scrollHeight'));
}

function switchButton(old_button, new_button) {
  old_button.hide();
  new_button.show();
}

$(document).ready(function() {
  var video = $("video").get(0);
  video.pause();
  $("#pause").hide();

  // /* play/pause with spacebar */
  // $(window).on("keypress", (function(e) {
  //   /* https://stackoverflow.com/questions/26981018/how-to-play-pause-html5-video-with-spacebar */
  //
  //   if (e.which == 32) {
  //     if (video.paused == true)
  //       video.play();
  //     else
  //       video.pause();
  //   }
  // }))

  /* submit note with enter -- should implement? */
  // $("#note-form").focus(function() {
  //   $(window).on("keypress", (function(e) {
  //     if (e.which == 13) {
  //       console.log("enter");
  //     }
  //   }))
  // })

  $("#capture").on("click", function() {
    video.pause();
    takeScreenshot(video, $("#recipe-list"));
  })

  $("#add-note").on("click", function() {
    console.log("add note");
    addNote($("#recipe-list"));
    video.play();
  })

  $("#finished").on("click", function() {
    $("#video-interface").hide();
    $("#recipe-list").toggleClass('col-md-6 col-md-12');
  })

  $("#back-5").on("click", function() {
    console.log("back");
    video.currentTime -= 5;
  })

  $("#play").on("click", function() {
    switchButton($("#play"), $("#pause"));
    video.play();
  })

  $("#pause").on("click", function() {
    switchButton($("#pause"), $("#play"));
    video.pause();
  })
})
