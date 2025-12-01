onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/736x/c4/22/36/c422364dbb8c933254246e2fbfe26244.jpg");
});
