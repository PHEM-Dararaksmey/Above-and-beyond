$(function(){

    $("#hide").click(function(){$("img").hide();});
    $("#show").click(function(){$("img").show();});
    $("#toggleHS").click(function(){$("img").toggle();});
    $("#fadeOut").click(function(){$("img").fadeOut(5000);});
    $("#fadeIN").click(function(){$("img").fadeIn(5000);});
    $("#fadeIO").click(function(){$("img").fadeToggle(5000);});
    $("#slideUp").click(function(){$("img").slideUp(5000,$(this).val()/100);});
    $("#slideDown").click(function(){$("img").slideDown(5000);});
    $("#slideUD").click(function(){$("img").slideToggle(5000);});
});