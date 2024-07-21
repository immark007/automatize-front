var btn=document.querySelector(".switch")

btn.addEventListener ("click" ,function(e){
    if(btn.classList.contains("active")){
        btn.classList.remove("active")
    }else{
        btn.classList.add("active")
    }
});