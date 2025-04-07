const domSection = document.getElementById("dom-play-ground") 
const changeTitleHeading=document.getElementById("change-heading")
const temporaryText=document.getElementById('temporary-text')
const clearTextBtn= document.getElementById("clear-text")

console.log(domSection,changeTitleHeading)
function changeTitle (){
    changeTitleHeading.addEventListener('click',function(){
        domSection.querySelector('h2').textContent='Document Money Printer 😂😂'
        console.log('button clicked')
    })
}

function clearText(){
    domSection.querySelector('.temporary-text').classList.add('hidden')
    console.log("cleared text")
}
clearTextBtn.addEventListener('click',clearText)
