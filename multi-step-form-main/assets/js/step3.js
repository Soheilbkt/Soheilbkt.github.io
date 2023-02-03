let checkBOXes = document.querySelectorAll(".isCHeck")
let DATAtilteandprcie = []

checkBOXes.forEach((item) => {
   // contains add envet 
   item.addEventListener("click", (event) => {
      // selcet sting prcie
      // selcet  elm parnet
      let elmParentcart = event.target.parentElement.parentElement.parentElement.classList;
      // seclet TItle & price
      let Tilte = event.target.parentElement.parentElement.parentElement
         .childNodes[1].childNodes[3].childNodes[1]
      let NUMpcire = event.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1]
      if (event.target.checked == true) {

         // add class acitv
         elmParentcart.add("selcet-activ");


         // add obejt elm
         DATAtilteandprcie.push(
            {
               title: `${Tilte.innerHTML}`,
               num: NUMpcire.innerHTML,

            }
         )
            setLocal()
         console.log("before", DATAtilteandprcie);

      }

      else {

         elmParentcart.remove("selcet-activ")






         DATAtilteandprcie.forEach((item) => {
            if (item.title == Tilte.innerHTML) {
               item.title = ""

               // sort for mpty 
               sortMPty()
               // REMOVE LAST ELM
               DATAtilteandprcie.pop()
               setLocal()
            }
         })
      }
   })
})




function sortMPty() {
   DATAtilteandprcie.sort((item, item2) => {
      return item2.title.length - item.title.length
   })

}
function setLocal(){
   sessionStorage.setItem("label-pcire-2",JSON.stringify(DATAtilteandprcie))
}