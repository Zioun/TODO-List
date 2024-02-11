// TODO alert option
let alertClose = document.getElementById("alertClose").addEventListener('click',function(){
    document.getElementById("alertArea").style.display = "none";
})

// TODO submitBtn option
let submitBtn = document.getElementById("submitBtn").addEventListener('click',function(){
    let alertArea = document.getElementById("alertArea");
    let inputField = document.getElementById("inputField");
    let inputFieldValue = inputField.value;
    if(inputFieldValue == false){
        alertArea.style.display ="block";
    }else{
        let empty = document.getElementById("empty");
        empty.style.display = "none";
        let createElement = document.createElement("p");
        createElement.style.borderBottom = "2px solid teal";
        createElement.innerText = inputFieldValue;
        let paragraphArea = document.getElementById("paragraphArea");
        paragraphArea.appendChild(createElement);
        console.log(paragraphArea)
        inputField.value = " ";
    }
})