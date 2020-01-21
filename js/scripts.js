$(document).ready(function () {
  // $("h1").click(function () {
  //   alert("This is a header.");
  // });

  // $("p").click(function () {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function () {
  //   alert("This is an image.");
  // });
  var htmlTags = ["h1", "p", "img"];
  htmlTags.forEach(function(htmlTag) {
    $(htmlTag).click(function() {
      alert("This is a " + htmlTag + " html element.");
    });
  });
});