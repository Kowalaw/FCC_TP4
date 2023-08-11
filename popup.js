let popup = document.getElementById('popup')
let fondPop = document.getElementById('fondPopUp')

function popupOn(){
    let openPop = document.getElementsByClassName("com")
    for(let i=0;openPop.length;i++){
        openPop[i].addEventListener("click",()=>{
            popup.classList.remove('popupNone')
            fondPop.classList.remove('popupNone')
        })
    }
}
function popupDef(){
    let formpop = document.getElementById('popForm')
    formpop.addEventListener('submit',(event)=>{
        event.preventDefault()
    })
}
function popupOff(){
    let closePop = document.getElementById('valider')
    closePop.addEventListener('click',()=>{
        popup.classList.add('popupNone')
        fondPop.classList.add('popupNone')
    })
    let closePopup = document.getElementById('closePopup')
    closePopup.addEventListener("click",()=>{
        popup.classList.add('popupNone')
        fondPop.classList.add('popupNone')
    })
}

popupDef()
popupOff()
popupOn()