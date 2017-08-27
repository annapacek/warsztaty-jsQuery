// warsztat 2 
$(document).ready(function() { //document ready dla bezpieczenstwa
    $("#button-type").click(function() {
    pobierzDane();
})
    function pobierzDane() {
   
$.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {//do zmiennej data wejda wszystkie dane z jsona
    console.log(data);
    console.log(data.userId);
    console.log(data.userName);
    console.log(data.userURL);
});   
}
})





