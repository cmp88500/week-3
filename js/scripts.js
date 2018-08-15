$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var aVar = 0;
    var bVar = 0;
    var cVar = 0;

    $("input:checkbox[name=input1]:checked").each(function() {
      var checkOne = $(this).val();
      $("#response").append(checkOne + "<br/>");
      aVar += 1;
      console.log(aVar);

    // $("input:checkbox[name=input2]:checked"].each(function() {
    //   var checkTwo = $(this).val();
    //   $("#response").append(checkTwo) + "<br/>");
    //   bVar += 1;
    //
    // $("input:checkbox[name:input3]:checked").each(function() {
    //   var checkThree = $(this).val();
    //   $("#response").append(checkThree) + "<br/>");
    //   cVar += 1
// })
});
  });
});
