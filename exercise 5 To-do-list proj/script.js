var list = [];

do{
    var whatToDO = prompt("What do you want to do?");

    if(whatToDO == "add" || whatToDO == "Add" || whatToDO == "ADD" ){
        addIt();
        
    }else if(whatToDO == "list" || whatToDO == "List" || whatToDO == "LIST" ){
        showIt();
    }else if(whatToDO == "delete" || whatToDO == "Delete" || whatToDO == "DELETE" ){
        deleteIt();
    }
}while (whatToDO !== "quit" && whatToDO !== "Quit" && whatToDO !== "QUIT" )

function addIt(){
    var addd = prompt("Add it"); 
    list.push(addd);
    console.log("Item Added");
}
function showIt(){
    console.log(" * * * * * * *");
    list.forEach( function(show, index ){
        console.log( index + ": " + show );
    })    
    console.log(" * * * * * * *");
}
function deleteIt(){
    var indx = prompt("Enter index:");
    list.splice(indx,1);
    console.log("Item deleted");
}