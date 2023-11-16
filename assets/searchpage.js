// Forked & modified from https://github.com/clickette/main under CC-BY-SA 4.0
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  }
  var queryParam = getUrlParameter('q'); // Gets the query from the url param
  if (!queryParam) {
    history.back();
  }
  const searchTerm = decodeURIComponent(queryParam.replaceAll('+', '%20')); // replaces the + with %20 then space, 
                                                        // e.g "search+test" -> search%20test" -> "search Test"
  checkForBangs(queryParam);
  document.getElementById('default-search').value = searchTerm;

  window.addEventListener('popstate', function (event) {
    queryParam = getUrlParameter('q');
    searchTerm = decodeURIComponent(queryParam.replaceAll('+', '%20'));
    checkForBangs(queryParam);
    document.getElementById('searchbox').value = searchTerm;
  });
  document.title = searchTerm + " - Pepsearch Search";
  const queryString = window.location.search;
