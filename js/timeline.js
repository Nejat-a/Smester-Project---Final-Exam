const accordionBtns = document.getElementsByClassName('accordion-btn');
for (let i = 0; i< accordionBtns.length; i++){

    accordionBtns[i].onclick = function showPanel(){
        this.classList.toggle('is-active');
        const panel = accordionBtns[i].nextElementSibling;
        if(panel.style.maxHeight){
            //close panel
            panel.style.maxHeight = null;
        }else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    }
}
   
//nexelementsibling