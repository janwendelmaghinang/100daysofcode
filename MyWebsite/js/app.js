
    window.onscroll = function(){
    var header = document.querySelector('.nav-con')
    var sticky = header.offsetTop;
        if(window.pageYOffset > sticky){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }
    }

 const togglebtn = document.querySelector('.fas')
 const theme = document.querySelector('.light')

 function toggleClick(){
      console.log('true')
     togglebtn.classList.toggle('fa-toggle-off')
     togglebtn.classList.toggle('fa-toggle-on')

     theme.classList.toggle('dark')
     theme.classList.toggle('light')
 }
    