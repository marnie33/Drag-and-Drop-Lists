$(document).ready(function(){
    
  //makes list items draggable
    $('li').draggable({
        cursor: 'pointer',
        opacity: 0.70,
        revert: true,
        containment: 'document',
        start: function(){
            contents = $(this).text();
        },
    });//end draggable
    
    //controls the fantasy drop zone
    $('#dz1').droppable({
        hoverClass: 'hoverChange',
        accept: '.fantasy',
        tolerance: 'pointer',
        drop: function(){
            $('#dz1').append('<img src="http://fc07.deviantart.net/fs70/f/2014/075/b/5/fairy_silhouette__24__by_clipartcotttage-d7ahsnl.png" height="15" width="15" class="invert"> &nbsp' + contents + '<br>');
        },
    });//end droppable dz1
    
    //controls the sci fi drop zone
    $('#dz2').droppable({
       hoverClass: 'hoverChange',
        accept: '.scifi',
        tolerance: 'pointer',
        drop: function(){
          $('#dz2').append('<img src="https://openclipart.org/image/300px/svg_to_png/24802/Angelo_Gemmi_alien_space_ship.png" height="15" width="15" class="invert"> &nbsp' + contents + '<br>');  
        },
    });//end droppable dz2
    
    //controls the 'other' drop zone
    $('#dz3').droppable({
       hoverClass: 'hoverChange',
        accept: '.other',
        tolerance: 'pointer',
        drop: function(){
          $('#dz3').append('<img src="http://upload.wikimedia.org/wikipedia/commons/a/a3/Contour_comedy_mask.png" height="15" width="15"> &nbsp' + contents + '<br>');  
        },
    });//end droppable dz3
    
});//end jQuery

//  runs the custom alert/dialog box/popover   
    function CustomAlert(){
    
    //dialog passes in from Alert.render and opens dialog box
    this.render = function(dialog){
        
        //gets window size
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        //gets box holder div from page
        var boxholder = document.getElementById('boxholder');
        
        //creates dialog box in box holder, adds css
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
        $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        //gets box overlay holder from page
        var boxoverlay = document.getElementById('boxoverlay');
        
        //creates dialog overlay and adds css
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        //formats overlay
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        //formats dialog box on screen
        boxholder.style.left = (winW/2) - (550 * .5) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        //creates dialog box content, calls custom content from Alert.render()
        $('#dialogboxhead').text("Directions");
        $('#dialogboxbody').append(dialog);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    }//end render function
    
    //this closes the dialog
    this.ok = function(){
        
        //removes css classes
        $('#boxholder').removeClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        $('#boxoverlay').removeClass('dialogoverlay');
        
        //removes css that formatted box and overlay on screen 
        $('#boxholder').css('top','').css('left','').css('display','none');
        $('#boxoverlay').css('display','none').css('height','');
        
        //empties boxholder and boxoverlay divs
        $('#boxholder').empty();
        $('#boxoverlay').empty();
        
    }//end okay function
    
}//end custom dialog function

//initiates dialog
var Alert = new CustomAlert();
