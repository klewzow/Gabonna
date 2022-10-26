document.addEventListener("DOMContentLoaded", ()=>{

    var burger =  document.querySelector('.header__burger' );

    burger.addEventListener('click', () =>{

         document.querySelector( '.header__burger-menu').classList.toggle("_active");

         document.querySelector( '.header__burger').classList.toggle("_active");


        
});

});
 
 
 