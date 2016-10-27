$(document).ready(function(){
    $("#next").click(function(){
        $('html,body').scrollTop(0);
        $("#previous").show(500);
        if ($("#first_page:visible").length){
             $("#first_page").hide(500);
             $("#second_page").show(500);}
    });
    $("#previous").click(function(){
    	$('html,body').scrollTop(0);
    	$("#next").show(500);
    	if ($("#first_page:hidden").length){
             $("#first_page").show(500);
         	 $("#previous").hide(500)}
        if ($("#second_page:visible").length){
             $("#second_page").hide(500);
             $("#first_page").show(500);}
    });
});
