$(document).ready(function() {    
    
    
    // NOTES SYSTEM
    var notes = $("#notes");
    var storedNotes = [];
    
    function addNewNote() {
      console.log("adding notes");
      
      var hash = md5(new Date());
      
      notes.append('<div class="simple-note">' +
                     '<ul>' +
                         '<li id="posX"></li>' +
                         '<li id="posY"></li>' +
                    '</ul>' +
                   '</div>');
    }
    
    $("#addNewNote").click(function() {
        addNewNote();
    });
    
    
    $('#dragThis').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
        }
    });
});

localStorage.setItem("lastname", "Smith");//zapis
//localStorage.getItem("lastname");//odczyt
//localStorage.removeItem("lastname");//usuwanie

localStorage.setItem("name", "John");//zapis

for ( var i = 0, len = localStorage.length; i < len; ++i ) {//petla do odczytu wszystkich danych
  alert( localStorage.getItem( localStorage.key( i ) ) );
}

var obj={
    first:'ala',
    second:'kot'
    
}

