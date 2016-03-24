$(document).ready(function() {
  $("form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var name2Input = $("input#name2").val();
    var vegetablesInput = $("input:radio[name=vegetables]:checked").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".vegetables").text(vegetablesInput);

    $("#results").show();
    event.preventDefault();

  });
});
