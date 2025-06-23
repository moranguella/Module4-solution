// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// STEP 3: Create an object, called 'helloSpeaker' to which you will attach the "speak" method
// STEP 4: Attach the 'speak' function ao objeto helloSpeaker
// STEP 5: Expose 'helloSpeaker' ao escopo global

(function (window) {
  var speakWord = "Hello";

  var helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
