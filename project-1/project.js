let eveent=document.getElementById('input')
let lamep=false
function onclicck(){
  
  if(lamep){
    eveent.setAttribute("src","/project-1/bulboff.gif")
    lamep=false
  }else {
    eveent.setAttribute("src","/project-1/bulbon.gif")
    lamep=true
  }
  console.log(lamep)
}
