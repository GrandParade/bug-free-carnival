$(document).ready(function() {
    
    
    // NOTES SYSTEM
    var notes = $("#notes");
    var storedNotes = [];
    
    function makeDraggable(className) {
      $('.'+className).draggable(
      {
          drag: function(){
              var offset = $(this).offset();
              var xPos = offset.left;
              var yPos = offset.top;
              $('#posX').text('x: ' + xPos);
              $('#posY').text('y: ' + yPos);
          }
      });
    }
    
    function addNewNote() {
      console.log("adding notes");
      
      var hash = md5(new Date());
      
      notes.append('          <div class="dragThis '+hash+'"> '+
                    '<div class="drag-head"> '+
                        '<span class="glyphicon glyphicon-remove remove" aria-hidden="true"></span> '+
                    '</div> '+
                    '<div class="drag-inner"> '+
                      '  <ul class="position"> '+
                          '  <li id="posX"></li> '+
                          '  <li id="posY"></li> '+
                      '  </ul> '+
                        '<textarea name="txt" class="dragThis-txt" placeholder="note..."></textarea> '+
                  '  </div> '+
                '</div>');
                
      makeDraggable(hash);

    }
    
    $("#addNewNote").click(function() {
        addNewNote();
    });
    makeDraggable("dragThis");

});

localStorage.setItem("lastname", "Smith");//zapis
//localStorage.getItem("lastname");//odczyt
//localStorage.removeItem("lastname");//usuwanie

localStorage.setItem("name", "John");//zapis

for ( var i = 0, len = localStorage.length; i < len; ++i ) {//petla do odczytu wszystkich danych
  //alert( localStorage.getItem( localStorage.key( i ) ) );
}

var obj={//przykladowy obiekt
    first:'ala',
    second:'kot'
    
}
console.log(obj);
var stringJson =JSON.stringify(obj);//przerobienie obiektu na string do zapisu
console.log(stringJson);
var objBack=JSON.parse( stringJson );//odczyt obiektu ze stringa
console.log(objBack);
