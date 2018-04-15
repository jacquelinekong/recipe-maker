// Jacqueline Kong
// jek2179

function takeScreenshot(source, dest) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext('2d');

  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  dest.append(canvas);
  // var dataURI = canvas.toDataURL('image/jpeg');
}

$(document).ready(function() {
  var video = $("video").get(0);
  video.pause();

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

  $("#capture").on("click", function() {
    video.pause();

    takeScreenshot(video, $("#recipe-list"));

  })

  $("#add-note").on("click", function() {
    console.log("add note")
    var note = $("#note-form").val();
    var new_note = $("<div>");

    console.log(note);
    $(new_note).text(note);
    $("#img-list").append(new_note);
    $("#note-form").val("");
  })
})
