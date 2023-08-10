let popup = document.getElementById('popup')

function popupOn(){
    let openPop = document.getElementsByClassName("com")
    for(let i=0;openPop.length;i++){
        openPop[i].addEventListener("click",()=>{
            popup.classList.remove('popupNone')
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
        console.log('clik')
    })
}

popupDef()
popupOff()
popupOn()