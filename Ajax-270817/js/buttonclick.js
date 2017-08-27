// warsztat 1

var buttonType = document.getElementById('button-type');

// definicja funkcji ajax
function ajax ( ajaxOptions ) {
    
//  parametry połączenia i typu
    var options = {
        type: ajaxOptions.type || 'POST',
        url: ajaxOptions.url || '',
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || 'text'
    };
    
//  funkcja sprawdzająca status połączenia - czy połączenie się udało, funkcja za parametr przyjmuje obiekt XMLHttpRequest
    function httpSuccess( httpRequest ) {
        try { // i teraz kod programu, ktory moze generowac wyjatki
            return (httpRequest.status >= 200 && httpRequest.status < 300 || httpRequest.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpRequest.status == 'undefined');
        } catch (e) {
            return false;
        }
    }
    
//  1. utworzenie obiektu XMLHttpRequest
    var httpReq = new XMLHttpRequest();
    
// 2. otwarcie połączenia na obiekcie
    httpReq.open(options.type, options.url, true);
    
// 3. sprawdź stan dokumentu - onreadystatechange (0m1,2,3,4 z prezentacji)
    httpReq.onreadystatechange = function () {
        
//  sprawdzamy czy dane są zwrócona i gotowe do użycia
        if(httpReq.readyState == 4) {
//      sprawdzamy status połączenia
            if ( httpSuccess(httpReq) ) {
                var returnData = (options.dataType == 'XML')?
                httpReq.responseXML : httpReq.responseText;
                
//          jesli wszystko ok, to funkcja on Success
                options.onSuccess( returnData );
                
//          zeruj obiekt zeby nie wysyłać żadań do serwera i nie utzymywac połączenia
                httpReq = null;
                
//           else jezeli blad wykonaj funkcje onError
            } else {
                options.onError( httpReq.statusText );
            }
        }
    }

// wysyłamy obrobione zadanie do serwera
    httpReq.send();
}
function pobierzDane(event) {
    event.preventDefault();
    
    ajax({
    type: 'GET',
    url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
    
//  jezeli polaczenie zwraca blad
    onError: function (msg) {
        console.log(msg);
    },
    
//    jezeli polaczenie nawiazane i gotowe do uzycia
    onSuccess: function (response) {
        
        var jsonObj = JSON.parse(response);
//        console.log(jsonObj);
//        
//        console.log(jsonObj.userId);
//        console.log(jsonObj.userName);
//        console.log(jsonObj.userURL);
        var userID = document.createElement('p');
        var userName = document.createElement('p');
        var userURL = document.createElement('p');
        
        userID.innerHTML = "User ID: " + jsonObj.userId;
        userName.innerHTML = "User Name: " + jsonObj.userName;
        userURL.innerHTML = "User URL: " + jsonObj.userURL;
        
        document.body.appendChild(userID);  
        document.body.appendChild(userName); 
        document.body.appendChild(userURL); 
    }   
})  
}

buttonType.onclick = pobierzDane;




