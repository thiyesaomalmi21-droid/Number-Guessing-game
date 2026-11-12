
let num=Math.floor(Math.random()*10);
let attempts=3;

function guess(){
    attempts--;
    let x=Number(document.getElementById("txtfield").value);

    if(x===num){
        
        Swal.fire({
            title: "Correct Guess!",
            icon: "success",
            draggable: true
            });
        
    }else if(x>num){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have only "+ attempts +" more attemps left!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
        
    }else if(x<num){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have only "+ attempts +" more attemps left!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
            });
    }

}