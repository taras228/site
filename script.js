
var msg="div";
/////////////////////////////////////////////////
$(document).ready(function(){
			$("h1.text").mouseover(function(){
			$("h3.text1").show();
			});
			});
			
			$(document).ready(function(){
			$("h1.text").mouseout(function(){
			$("h3.text1").hide();
			});
			});	
////////////////////////////////
$(document).ready(function() {
   $("div img").mouseenter(function() {
       $(this).animate({
           height: '+=25px',
		   width: '+=25px'
       });
   });   
   $("div img").mouseleave(function() {
       $(this).animate({
           height: '-=25px',
		   width: '-=25px'
       }); 
   });
   $("div img").dblclick(function() {
       $(this).toggle(1000);
   });
   
   ///////////////////   
});

$(document).ready(function(){
			$("h1.text").click(function(){
			$("p.t").reverseText(0, 100);  

			});
			});
////////////////////////
	(function($) {  
 $.fn.reverseText = function(params) {  
 params = $.extend( {minlength: 0, maxlength: 99999}, params);  
 this.each(function() {     
var $t = $(this);

    var origText = $t.text(), newText = '';    
            if (origText.length >= params.minlength &&  origText.length <= params.maxlength) {      
          for (var i = origText.length-1; i >= 0; i--) newText += origText.substr(i, 1);  
                $t.text(newText);  
            }  
        });          
        return this;  
    }; 
})(jQuery);



