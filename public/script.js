// Jacqueline Kong
// jek2179
// UI Design Final Project

function takeScreenshot(source, dest) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');
  var new_image = document.createElement("img");
  var new_item = $("<li class=\"screenshot\">");

  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  // dest.append(canvas);
  var data = canvas.toDataURL('image/jpeg');
  new_image.src = data;

  new_item.append(new_image);
  dest.append(new_item);
  dest.scrollTop(dest.prop('scrollHeight'));
}

function addNote(dest) {
  var note = $("#note-box").val();
  var new_note = $("<div>");
  var new_item = $("<li class=\"note\">");
  $(new_note).text(note);

  $(new_item).append(new_note);
  dest.append(new_item);
  $("#note-box").val("");
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

  $("#recipe-list").sortable();

  $("video").on("pause", function() {
    switchButton($("#pause"), $("#play"));
  })

  $("video").on("play", function() {
    switchButton($("#play"), $("#pause"));
  })

  $("#capture").on("click", function() {
    video.pause();
    takeScreenshot(video, $("#recipe-list"));
  })

  $("#note-box").on("focus", function() {
    console.log("focus");
    $(window).on("keypress", (function(e) {
        if (e.which == 13) {
          e.preventDefault();
          console.log("enter");
          addNote($("#recipe-list"));
          video.play();
        }
    }))
  })

  $("#add-note").on("click", function() {
    console.log("add note");
    addNote($("#recipe-list"));
    video.play();
  })

  $("#undo").on("click", function() {
    $("#recipe-list").children().last().remove();
  })

  $("#finished").on("click", function() {
    video.pause();
    $("#video-interface").hide();
    $("#recipe").toggleClass('col-md-6 col-md-12');
  })

  $("#back-5").on("click", function() {
    console.log("back");
    video.currentTime -= 5;
  })

  $("#play").on("click", function() {
    video.play();
  })

  $("#pause").on("click", function() {
    video.pause();
  })
})
