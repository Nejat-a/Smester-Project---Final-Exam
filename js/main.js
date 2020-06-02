const dropDownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const arrowDownIcon = document.querySelector('.arrow-down');
const burger = document.querySelector('.fa-bars');
const burgerIcon = document.querySelector('.hamburger-icon');
const mobileNav = document.querySelector('.mobile-nav');



// dropDownBtn.addEventListener('click', ()=>{
//     dropdownContent.classList.toggle('show');
//     arrowDownIcon.classList.toggle('arrow-up');
//     dropDownBtn.classList.toggle('drop-down-background-change')
// })


dropDownBtn.addEventListener('click', ()=>{
    dropDownBtn.classList.toggle('drop-down-background-change');
    arrowDownIcon.classList.toggle('arrow-up');
   if(dropdownContent.style.maxHeight){
       // close panel
       dropdownContent.style.maxHeight = null;
   }else{
       //open panel
       dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
   }
})




burgerIcon.addEventListener('click', ()=>{
    mobileNav.classList.toggle('show-nav');
    burger.classList.toggle('fa-times');
})



