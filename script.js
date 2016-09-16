$(document).ready(function() {
    setCookie('us','helloworld','');
    
    
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
