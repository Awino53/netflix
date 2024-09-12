//variable

const accordion= document.getElementsByClassName("question");
for(i=0; i< accordion.length; i++){
    accordion[i].addEventListener("click", function(e){
        document.querySelectorAll(".content-container").forEach(cont=>{
            cont.classList.remove("active")? cont.classList.remove("active"):""
        })
        e.target.parentElement.classList.toggle("active");
        
    })
};