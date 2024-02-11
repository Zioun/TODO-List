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
    }
})