'use strict'

document.addEventListener("DOMContentLoaded", function () {
  // select elements
  let button = document.querySelector("#btn");
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  // add event listener
  button.addEventListener("click", function () {
    let text = input.value.trim();
    let wordCount = countWords(text);
    output.innerHTML = "<h2>" + wordCount + "</h2>";
  });
});

function countWords(text) {
  let words = text.split(/\s+/);
  return words.length + ' Words';
}