let doller =document.getElementById('doller')
let pound =document.getElementById('pound')
let omobl =document.getElementById('omobl')
let demo =document.getElementById('demo')



doller.addEventListener('keyup',function(){
  pound.value=doller.value * 18.63 ;

})



pound.addEventListener('keyup',function(){
  doller.value=pound.value / 18.63 ;

})


omobl.addEventListener('click',function(){
  doller.value=""
  pound.value=""
})

document.addEventListener('contextmenu',function(e){
  e.preventDefault()


})

document.addEventListener('keydown', function(e){
  if(e.key=="f12")
  {
    e.preventDefault()
  }
})