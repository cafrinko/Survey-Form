$(document).ready(function() {
  $("form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var bornInput = $("input#born").val();
    var colorInput = parseInt($("input#color").val());
    var vegetableInput = $("input:radio[name=vegetable]:checked").val();
    var genre = $("#genre").val();
    $("form").remove();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".born").text(bornInput);
    $(".color").text(colorInput);
    $(".vegetable").text(vegetableInput);
    $(".genre").text(genre);

    $("#results").show();
    event.preventDefault();

  });
});
