function getRandomPhrase() {
    var randomPhrase;
     fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
       "headers": {
          "content-type": "application/json",
          "x-api-key": "1HHHukaNEC5Kh3iDOLeZjQ==nxxKAnwy9XbK9bYM"
       },
       "method": "GET",
       "credentials": "omit",                  
    }).then(response => response.json())
    .then(json => randomPhrase = json[0]['fact']) 

    document.getElementById("phrase").innerHTML = randomPhrase
 }
 
window.onload = getRandomPhrase();