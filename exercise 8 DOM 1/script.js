// var cb = document.querySelector("ul li");

// cb.classList.toggle("addition");

var ls = document.querySelectorAll("li");
for(var i=0;i<ls.length;i++){
    ls[i].addEventListener("click", function(){
        this.style.color = this.style.color==="pink" ? "black" : "pink";
    });
};
