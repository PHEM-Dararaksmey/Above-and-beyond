$(function(){
    // ប្រើព្រឹត្តិការណ៍ Change ដើម្បីទាញយកតម្លៃពី text box password box and text area
    $("#txt").change(function(){$("#data").html($(this).val())});
    $("#pwd").change(function(){$("#data").html($(this).val())});
    $("#tar").change(function(){$("#data").html($(this).val())});
    // ប្រើ change evernt ទាញតម្លៃពី checked property នៃ check box & radio button
    $("#ch1").change(function(){$("#data").html($(this).prop("checked"))});
    $("#rdo1").change(function(){$("#data").html($(this).prop("checked"))});
    // ប្រើ chane g ដើម្បីទាញយកតម្លៃពី drop down list and list box
    $("#ddl").change(function(){$("#data").html($(this).val())});
    $("#lst").change(function(){$("#data").html($(this).val())});
});