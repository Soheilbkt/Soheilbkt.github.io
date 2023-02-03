
let btnNext = document.querySelector(".btns button a")

 let inputs = document.querySelectorAll(" .form input")
let textinvalid = document.querySelectorAll('.vaild p:nth-child(2)')
 let flag = 0;
let stepnum = document.querySelectorAll(".step")

btnNext.addEventListener('click', () =>{
    if(inputs[0].value && inputs[1].value && inputs[2].value){
          flag++    
          stepNum()
          btnNext.setAttribute("href","step2.html")
    }
   else{
    
    isfiled()

   }
                 
             
             
     
    


})

let d = document.querySelector(".count-setp")


/*step 01*/
function stepNum(){
    if(stepnum[0].classList.contains("active-step")){
        stepnum[flag].previousElementSibling.classList.remove("active-step")
        stepnum[flag].classList.add("active-step")

    }

} 
function isfiled(){
    if(!inputs[0].value){
        textinvalid[0].style.display="block"
}
else{
    textinvalid[0].style.display="none"
}
if(!inputs[1].value){
        textinvalid[1].style.display="block"
    
      
}
else{
    textinvalid[1].style.display="none"
}

if(!inputs[2].value){
        textinvalid[2].style.display="block"
}
else{
    textinvalid[2].style.display="none"
}
}
/*end step 01*/
