console.log("hii");
let num=Math.floor(Math.random()*10);
console.log(num);

function guess(){
    let x=Number(document.getElementById("txtfield").value);

    if(x===num){
        console.log("YEs well done");
        Swal.fire({
            title: "Correct Guess!",
            icon: "success",
            draggable: true
            });
        
    }else if(x>num){
        console.log("wrong gues-gini gini");
        
    }else if(x<num){
        console.log("wrong gues-siithalai");
    }

}