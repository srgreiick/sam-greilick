
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper("calculateAge", function (birthYear) {
    let age = new Date().getFullYear()-birthYear;
    if (age > 0) {
        return age + " years old"
    }
    else{
        return"less that a yo"
    }
})

function createHTML(petsData) {
    let rawTemplate = document.getElementById("petsTemplate").innerHTML
    let compiledTemplate =  Handlebars.compile(rawTemplate);
    let outGeneratedHTML = compiledTemplate(petsData);

    let petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = outGeneratedHTML;
}

