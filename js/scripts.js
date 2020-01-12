// $(function() {
//   $("h1").click(function() {
//   alert("This is a header.");
//   alert("I told you, THIS IS A HEADER!");
//   });

//   $("p").click(function() {
//   alert("This is a paragraph.");
//   });

//   $("img").click(function() {
//   alert("This is an image.");
//   });
// });

$(function() {
  var elements = ['h1' ,'p', 'img'];
  elements.forEach(function(element) {
    $(element).click(function() {
      alert("This element is wrapped in a <" + element + "> tag.");
    })
  })
})



