
window.onscroll = function(){
    var header = document.querySelector('.nav-con')
    var sticky = header.offsetTop;
        if(window.pageYOffset > sticky){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }
}
/***********************Toggle theme***************************/ 
const togglebtn = document.querySelector('.fas')
const theme = document.querySelector('.light')
function toggleClick(){
    togglebtn.classList.toggle('fa-toggle-off')
    togglebtn.classList.toggle('fa-toggle-on')

    theme.classList.toggle('dark')
    theme.classList.toggle('light')
}
/**********************Text truncate*******************************/ 
truncate()
function truncate(){
      const desc = document.querySelector('.gallery-container');
      var truncated;
      var maxLength = 150;
      for(var i=0;i<document.querySelector('.gallery-container').childElementCount; i++){
          truncated = desc.children[i].children[2].innerText;
          if (truncated.length > maxLength) {
              truncated = truncated.substr(0,maxLength) + '...';
          }
          desc.children[i].children[2].innerText = truncated;
      }
}
/****************************Modal**********************************/
modal()
function modal(){
const body = document.querySelector('body')
let modal = document.getElementById("myModal");
const img = document.querySelector('.gallery-container')
const images = document.querySelector('.modal-content')
const name = document.querySelector('.item-name')
const paragh = document.querySelector('.pp')
// const vid = document.querySelector('.vid')
//  console.log(modal.children[1].children[0])

for(var i=0 ; i<document.querySelector('.gallery-container').childElementCount; i++){
    img.children[i].children[0].classList.add(i)
    img.children[i].children[0].onclick = function(){
    modal.style.display = "grid";
    name.innerText = img.children[this.classList.value].children[1].innerText
    images.src = this.src;
    paragh.innerText = img.children[this.classList.value].children[2].innerText
    // modal.children[1].children[0].style.display="auto"
    //  modal.children[1].children[1].style.display="auto"
        body.style.overflow = "hidden"
        // modal.children[1].children[this.classList.value].style.display="auto"
}
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
  if(this.onclick){
    body.style.overflow = "auto"
}
}
}