'use strict';
// Create variable to store document.query selector for easy use in the furture.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Create a function to store behavir of code
const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//Using for loop due to the clss called show-modal is used for mutiple class.
for(let i = 0 ; i < btnOpenModal.length; i ++){
    btnOpenModal[i].addEventListener('click',openModal);
}
btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

//keyboard events are so-called global events.

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key == 'Escape' && !modal.classList.contains('hidden') ){
        closeModel();
    }
})