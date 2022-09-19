function showOptions() {
  var input = document.getElementById("searchBar");
  var li = document.getElementById("heatmaps").getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
      li[i].style.display = "";
    } 
    else {
      li[i].style.display = "none";
    }
  }
}