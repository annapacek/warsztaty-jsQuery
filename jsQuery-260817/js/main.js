
/* word press zamiast $ - jQuery*/

$(document).ready(function() {
        changeBackgroundColor(); 
        changeAllPararaphs();
        addContent();
        removeContent();
        changeValue();
        addClassToAnchor();
        equal();
        hovered();
        changeButton();
        showHide();
        animateDiv();

$(window).scroll(function() {
        addScrolledClass();
});

$(window).resize(function() {
    $('#main-nav').css('background-color', 'red');
});

// definicje funkcji

function changeBackgroundColor() {
//  css, przy podaniu jednej właściwości nie używamy nawiasu klamrowego, wlasciwosci od wartosci oddzielamy przecinkiem
//  $('#first').css('background-color','red');
    
    $('#first').css({'background-color':'aqua', 'height':'100vh'});
}

function changeAllPararaphs() {
    //selektor elementu
    //zeby zlapalo wszystkie paragrafy metoda ponizej
//    var allP = $('p');
//    allP.css('color','green');
   // tutaj tylko paragrafy z diva 
    var parent = $('#first');
    parent.find('p').css('color','green');
    //UWAGA na pseudoklasy, nie wszystkie wersje jQuery je obsluguja
    parent.find('p:first-child').text('Jakis przykladowy tekst');
    
    // metoda text() - zwraca tekstowa zawartosc elementu
//    console.log(parent.find('p:first-child').text());
    
    // metoda html - zwraca content ze znacznikami
    parent.find('p:first-child').html('<span>Lorem ipsum dolor</span>');
     console.log(parent.find('p:first-child').html());
}

//append(), prepend(), before(), after()

function addContent() {
    var parent = $('#addedContent');
    
    // append() - dodaje tresc (html) wewnatrz znacznika, na jego koncu 
    parent.find('.append').append('<span>1234567890</span>').css('color', 'red');
    parent.find('.append span').css('color', 'green');

    //prepend() - dodaje tresc (html) wewnatrz znacznika, na jego poczatku 
    parent.find('.prepend').prepend('1234567890');
    
    //before() - dodaje tresc html (lacznie ze znacznikami) przed wybranym elementem
    parent.find('.before').before('<div>1234567890</div>');
    
    //after() - dodaje tresc html (lacznie ze znacznikami) za wybranym elementem
    parent.find('.after').after('<div>1234567890</div>');
}

function removeContent() {
    var parent = $('#deleteContent');
    
    // remove() - usuwa cały element lacznie z zawartoscia (usuwa go z DOM)
    
    parent.find('.remove').remove();
    
    // usuwa content (bez znaczników) wraz z potomkami w dopasowanym elemencie
    parent.find('.empty').empty();
}

function changeValue() {
    //change(), each(), $(this)
    // w formie wyszukuje nam wszystkie inputy, i dla kazdego inputu (each) jesli zmieni sie jego wartosc (change) to wywolujemy sfunkcje, ktora wklada nam ta wartosc do konsoli
    var parent = $('#form');
    parent.find('input').each(function() {
        $(this).change(function() {
            console.log($(this).val());
        });
    });
    
    //dodanie contentu do inputa
//    parent.find('input').val('123');
}

//dodawanie i usuwanie klas

function addClassToAnchor() {
    var parent = $('#main-nav');
    
    parent.find('li').each(function() {
        $(this).click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    });
}


//skrolowanie okna, dodanie klas do nawigacji

function addScrolledClass() {
    var height = $('#first').height();
//    console.log(height);
    
    //aktualna pozycja
    var actual = $(window).scrollTop();
//    console.log(actual);
    //jezeli aktualna pozycja jest wieksza lub rowna wysokosci diva
    if(actual >= height) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');

    }
}

function equal() {
    $('#main-nav').find('li').eq(3).css('font-size', '36px');
}

// zdarzenia on 
//mouseover - po najechaniu na myszka zmienia sie na czerwono i nie wraca do innego koloru
function hovered() {
    $('#main-nav').find('li').find('a').on({
       'mouseenter': function() {
          $(this).css('color', 'red'); 
       }, 
         'mouseleave': function() {
          $(this).css('color', 'white'); 
       }
    });
}

function changeButton() {
    $('#formularz').find('.button').click(function() {
      $(this).css('background-color', 'red');  
    }); 
}

function showHide() {
// show i hide dzialaja na display, margin, padding, opacity, width, height, 
//    $('#hide').hide(10000);
//    $('#show').show(10000);
    
// fadeIn fadeOut dzialaja na display i opacity
//     $('#hide').fadeOut(10000);
//     $('#hide').fadeIn(10000);
    $('#hide').slideUp(10000);
    $('#show').slideDown(10000);
}

function animateDiv() {
    $('animacja').find('button').click(function() {
        $('#animacja . animated').animate({
            'left': '100px',
            'height': '400px',
        }, 1000, function() {
           $('#animacja . animated').animate({
            'left': '0px',
            'height': '400px',  
          });
        });
        })
}




























