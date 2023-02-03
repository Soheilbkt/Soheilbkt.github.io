let $ = document;
let seviceTilte = $.querySelector(".head-art  div:nth-child(1) h4")
let seviceTiltePrice = $.querySelector(".head-art  p")
let containeritemsev = $.querySelector(".continer-ser")
let totalPrcieElm = $.querySelector(".total-prcie")
let SUMpriceService = 0;
// func get local and edit values header tilte
function getlocalANDchagneheadtext() {

     let headerText = sessionStorage.getItem('tilte-2')
     let headerPrice = sessionStorage.getItem('pric-2')
        // title side left head
      seviceTilte.innerHTML = headerText.slice(1,(headerText.length - 1))
        
      headerPrice = headerPrice.slice(1, (headerPrice.length - 1))
      // for details type mo or yr //
      let monthoryear = headerPrice.split(" ")[4]
      // for details prcie //
      headerPrice = headerPrice.split(" ")[2]
      SUMpriceService = SUMpriceService + Number(headerPrice)
  
      seviceTiltePrice.innerHTML = `$${headerPrice}${monthoryear}`
}

 function getlocalandservice(){
      // get local item serivce 
      let getitemssev = sessionStorage.getItem("label-pcire-2")
      // convert to array
      getitemssev =  JSON.parse(getitemssev)
        // foreac for new elmservcie
      getitemssev.forEach(element => {
          containeritemsev.insertAdjacentHTML("afterbegin",` 
          <div class="sevice">
          <h4>${element.title}</h4>
          <h4>${element.num}</h4>
          </div>`)
          // sum prices
          SUMpriceService = SUMpriceService + Number(element.num.split("")[2])
         
       
      });
        // show sum price
     totalPrcieElm.innerHTML = SUMpriceService
   
}

getlocalANDchagneheadtext()
getlocalandservice()
