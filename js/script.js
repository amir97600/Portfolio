/* Selected Section */
const navButtons = document.querySelectorAll(".nav-buttons");
function selected(button){
    if(!button.classList.contains("active")){
        button.classList.add("active");
    }
    navButtons.forEach( (element) => {
        if(element.getAttribute("title") !== button.getAttribute("title") && element.classList.contains("active")){
            element.classList.remove("active");
        }
    })
}

/* ======================= Typing animation ========================*/
var typed = new Typed(".typing",{
    strings:["Java Developer","Python Developer","Front-End Developer","Full-Stack Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});