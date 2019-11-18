var input = document.querySelector("input");
var kilo = document.querySelector("#kilo span");
var gram = document.querySelector("#span"); 


input.addEventListener("input", function() {
    gram.textContent =  input.value * 453.592; 
    kilo.textContent = input.value * 0.453592;
});

