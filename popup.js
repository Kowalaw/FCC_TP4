let popup = document.getElementById('popup')

function popupOn(){
    let openPop = document.getElementsByClassName("com")
    for(let i=0;openPop.length;i++){
        openPop[i].addEventListener("click",()=>{
            popup.classList.remove('popupNone')
        })
    }
}

popupOn()
