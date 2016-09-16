$(document).ready(function() {
    
    // DOUBLE CLICK FUNCTION
    $( ".dragThis" ).dblclick(function() {
//        $(".dragThis").css('width', '100%');
//        $('.dragThis').css("height", $(document).height());
    });
    
    // NOTES SYSTEM
    var notes = $("#notes");
    var storedNotes = [];
    
    function changeZIndex(className) {
      var element = $("."+className)[0];
      var zIndex = $(element).css('z-index') || 1;
      element.style.zIndex=zIndex+1;
    }
    
    function makeDraggable(className) {
      $('.'+className).draggable(
      {
          drag: function(){
              var offset = $(this).offset();
              var xPos = offset.left;
              var yPos = offset.top;
              $(this).find('.posX').text('x: ' + xPos);
              $(this).find('.posY').text('x: ' + yPos);
              
              var currentNote = _.find(storedNotes, (note)=> {
                return note.hash === className;
              });
              
              currentNote.xPos = xPos;
              currentNote.yPos = yPos;
              
              var afterRemoveCurrent = _.remove(storedNotes, function(note) {
                return note.hash === className;
              });
              
              storedNotes.push(currentNote);
          }
      });
    }
    
    function addNewNote() {
      console.log("adding notes");
      
      var hash = md5(new Date());
      
      notes.append('<div class="dragThis '+hash+'"> '+
                    '<div class="drag-head"> '+
                        '<span class="glyphicon glyphicon-remove remove" aria-hidden="true"></span> '+
                    '</div> '+
                    '<div class="drag-inner"> '+
                      '  <ul class="position"> '+
                          '  <li class="posX"></li> '+
                          '  <li class="posY"></li> '+
                      '  </ul> '+
                        '<textarea name="txt" class="dragThis-txt" placeholder="note..."></textarea> '+
                  '  </div> '+
                '</div>');
                
      $( "."+hash ).on( "click", function() {
        changeZIndex(hash);
      });
                
      storedNotes.push({createdAt: new Date(), hash : hash, content : '' });
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
    
};
console.log(obj);
var stringJson =JSON.stringify(obj);//przerobienie obiektu na string do zapisu
console.log(stringJson);
var objBack=JSON.parse( stringJson );//odczyt obiektu ze stringa
console.log(objBack);
