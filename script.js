// Jacqueline Kong
// jek2179

$(document).ready(function() {
  var video = $("video").get(0);
  video.pause();

  $(window).on("keypress", (function(e) {
    /* https://stackoverflow.com/questions/26981018/how-to-play-pause-html5-video-with-spacebar */

    if (e.which == 32) {
      if (video.paused == true)
        video.play();
      else
        video.pause();
    }
  }))

  var canvas = $("#canvas").get(0);
  var ctx = canvas.getContext('2d');
  $("#canvas").draggable({
    stack: "*"
  });

  $(".btn-primary").on("click", function() {
    video.pause();

    console.log(video.width);
    console.log(video.height);
    console.log($("#canvas").width());
    console.log($("#canvas").height());

    ctx.drawImage(video, 0, 0, $("video").width(), $("video").height());
  })
})
