function clearHTML(node){
  while (node.hasChildNodes()){
    node.removeChild(node.lastChild);
  }
}
$(document).ready(function(){
  var results = document.getElementById("results");
  $("#searchbtn").on("click", function(){
    if (results.hasChildNodes()){
      $("results").fadeOut();
    }
    clearHTML(document.getElementById("results"));
    var query = $("#searchbar").val();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&limit=1000&format=json&callback=?",function(data){
      for (var i=0; i < data[1].length; i++){
        var e = document.createElement("div");
        e.innerHTML = "<a class='result' href='" + data[3][i] + "'><h1>" + data[1][i] + "</h1> <p>"+ data[2][i] + "</p></a>";
        results.appendChild(e);
      }
    })
    $("results").fadeIn();
  })
})
