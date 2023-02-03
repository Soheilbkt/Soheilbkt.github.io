let $ = document;
let btnback = $.querySelector(".back")
let togglebtn = $.querySelector(".toggle")
let textfree = $.querySelectorAll(".box p:nth-child(3)")
let priceStep2 = $.querySelectorAll(".box p:nth-child(2)")
let boxes = $.querySelectorAll(".box")
let prcie;



// chagne price step-2
function changeprcieStep2() {

    priceStep2[0].innerHTML = `$ <span> 90 </span> /yr`
    priceStep2[1].innerHTML = `$ <span> 120 </span> /yr`
    priceStep2[2].innerHTML = `$ <span> 150 </span> /yr`
}
function defultprcieStep2() {

    priceStep2[0].innerHTML = `$ <span> 9 </span> /mo`
    priceStep2[1].innerHTML = `$ <span> 12 </span> /mo`
    priceStep2[2].innerHTML = `$ <span> 15 </span> /mo`
}
// ENd chagne price step-2
// STyle TExt free month
function styleTextfree() {
    textfree.forEach((item) => {
        item.style.display = "block"
    })
}







function styleTextfreeNONe() {
    textfree.forEach((item) => {
        item.style.display = "none"
    })

}
//  end STyle TExt free month





btnback.addEventListener("click", () => {
    window.history.back()
})


boxes.forEach((item) => {
    toggleBTn(item)
   
    item.addEventListener("click", (event) => {

        event.target.classList.add("activ-box")
        if (item.classList.contains("activ-box")) {
            for (let i = 0; i < boxes.length; i++) {

                boxes[i].classList.remove("activ-box")
                if (!item.classList.contains("activ-box")) {
                    event.target.classList.add("activ-box")


                    if (event.target.classList.contains("activ-box")) {
                        prcie = event.target.children[1];

                        let titlestep2 = prcie.children[0].innerHTML;
                        let prcie1 = prcie.children[1].innerHTML;

                        setLOcal(titlestep2, prcie1)



                    }


                }
            }

        }



    })

})



function setLOcal(titile, pcie) {
    sessionStorage.clear()
    sessionStorage.setItem("tilte-2", JSON.stringify(titile ?? "0"))
    sessionStorage.setItem("pric-2", JSON.stringify(pcie ?? "0"))

}


function toggleBTn(itmes) {
    togglebtn.addEventListener("click", (event) => {
        itmes.classList.remove("activ-box")
        togglebtn.classList.toggle("yearly")
        if (togglebtn.classList.contains("yearly")) {

            styleTextfree()
            changeprcieStep2()



        }
        else {
            styleTextfreeNONe()
            defultprcieStep2()


        }
    })

}