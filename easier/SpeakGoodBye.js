// STEP 6–9: Envolver em uma IIFE, criar o objeto byeSpeaker, adicionar a função speak, e expor ao escopo global

(function (window) {
  var speakWord = "Good Bye";

  var byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
