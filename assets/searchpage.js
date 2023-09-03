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
  var q = getUrlParameter('q');
  if (!q) {
    history.back();
  }
  const qf = q.replaceAll('+', '%20');
  const qfc = decodeURIComponent(qf);
  checkForBangs(q);
  document.getElementById('default-search').value = qfc;
  window.addEventListener('popstate', function (event) {
    q = getUrlParameter('q');
    qf = q.replaceAll('+', '%20');
    qfc = decodeURIComponent(qf);
    checkForBangs(q);
    document.getElementById('searchbox').value = qfc;
  });
  document.title = qfc + " - Prizmarine Search";
  const queryString = window.location.search;
