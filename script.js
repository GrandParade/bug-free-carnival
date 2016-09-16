var storedNotes = [];
$(document).ready(function() {
    
    // DOUBLE CLICK FUNCTION    
    $('.dragThis').dblclick(function() {
        $(this).css({"position": 'fixed', 'width': '100%', 'height': '100%', 'top': '0', 'left': '0'});
        $(this).find('.drag-head').css('height', '40px');
        $(this).find('textarea').css('font-size', '20px');
        $(this).find('.remove').css('font-size', '30px');
    });
    
    $('.dragThis').click(function() {
        $(this).css({"position": "relative", "width": "200px", "height": "auto"});
        $(this).find('.drag-head').css('height', '25px');
        $(this).find('textarea').css('font-size', '13px');
        $(this).find('.remove').css('font-size', '14px');
    });
    
    // NOTES SYSTEM
    var notes = $("#notes");
    
    
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
                        '<textarea name="txt" ondblclick="mysave(\''+hash+'\',this.value);" class="dragThis-txt" placeholder="note..."></textarea> '+
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




function mysave(fieldId,val){//field id jest hashem
    
    for(i=0;i<storedNotes.length;i++){
        if(storedNotes[i].hash==fieldId){
            temp = storedNotes[i];
            temp.content = val;            
        }
        
        var stringJson = JSON.stringify(temp);//przerobienie obiektu na string do zapisu
        localStorage.setItem(fieldId, stringJson);//zapis
        alert(stringJson);
    }    
}
