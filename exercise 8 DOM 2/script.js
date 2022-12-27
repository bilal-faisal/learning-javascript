var btn = document.querySelector("button");

// btn.addEventListener( "click", function(){
//     if(document.body.style.backgroundColor == "purple"){
//         document.body.style.backgroundColor = "white"
//     }else{
//         document.body.style.backgroundColor = "purple"
//     }
// });

btn.addEventListener("click", purple);

function purple(){
    document.body.classList.toggle("changeColor");
}