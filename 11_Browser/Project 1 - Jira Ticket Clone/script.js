let addBtn = document.querySelector('.add-btn')

let modalCont = document.querySelector('.modal-cont')

let addFlag = false

addBtn.addEventListener('click' , function(e){
       //Display the Modal

  // addFlag , true - Modal Display
  //addFlag , false - Modal Hide

  addFlag = !addFlag

 if(addFlag==true){
   modalCont.style.display = 'flex'
 }

 else{
       modalCont.style.display = 'none'
 }





})