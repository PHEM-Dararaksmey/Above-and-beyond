// អាច សរសេរ JS + JQury បាន  JS សុទ្ធ តែមិនអាចសរសេរ JQury សុទ្ធបានទេ
// រាល់ឯកសា Jqury ត្រូវផ្ដើមដោយសញ្ញា $ (document).ready()block 
// $ (document).ready() 
//      webpage. event វាចំឲ្យ html document រួចរាល់
// A $( document ).ready() block.
// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// // Shorthand for $( document ).ready()
// $(function() {
//     console.log( "ready!" );
// });

$(function(){
    document.write("<h1> jqury ready event is up </h1>");
});

/*   11/12/2023  
Notebook: 
    ដើម្បីប្រើប្រាស់​ Jqury ត្រូវធ្វើ

    ក ប្រើធាតុ Script ដើម្បីភ្ជាប់ទៅកាន់ឯកសារបណ្ណល័យ Jqury
    ខ បង្កើត ឯកសារ JavaScript ថ្មីមួយទៀតសម្រាប់សរសេរកូដ Jqury
    គ ប្រើធាតុ Script ដើម្បីភ្ចាប់ទៅកាន់ឯកសារ JavaScript ទើបបានបង្កើត
    ឃ​ ផ្លើមសរសេរក្នុង​ ឯកសារ​ JavaScript ដោយប្រើ Jqury ready event


    JQuery Selectors
        $("CSS Selector") ប្រើប្រាស់ CSS selector ក្នុង jQuery
        $(document)ជ្រើរើសយកវេបផេក
        $(this)ជ្រើរើសយកធាតុបច្ចុប្បន្ន 

    JQuery events 
        $(Selector).eventname(function(បញ្ជីប៉ារ៉ាម៉ែត្របើមាន){
            //block of code
        });
    ឬ
        $(Selector).on("eventname",function(បញ្ជីប៉ារ៉ាម៉ែត្របើមាន){

        });

    ប្រើប្រាស់ធាតុដែលបានជ្រើសរើស
        .html()ទាញយកតម្លៃឬកែតម្លៃមិនថាខ្លឹមសារឬHTML 
        .text()ទាញយកតម្លៃឬកែតម្លៃជាខ្លឹមសារ
        .attr()ទាញយកតម្លៃឬកែតម្លៃនៃគុណលក្ខណះ
        .val()ទាញយកតម្លៃឬកែតម្លៃធាតុឋិតនៅក្នុងសំណុំបែបបទ(form)
    
    14/12/2024
    change 
*/