// Jacqueline Kong
// jek2179

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

  var canvas = $("#canvas").get(0);
  var ctx = canvas.getContext('2d');
  $("#canvas").draggable({
    stack: "*"
  });

  $("#capture").on("click", function() {
    video.pause();

    aspect = $("video").height() / $("video").width();

    console.log("canvas.width " + canvas.width);
    console.log("canvas.height " + canvas.height);
    console.log("$(\"video\").height() " + $("video").height());
    console.log("$(\"video\").width() " + $("video").width());
    console.log((canvas.width * aspect));

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // var dataURI = canvas.toDataURL('image/jpeg');
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
