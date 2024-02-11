// TODO alert option
let alertClose = document.getElementById("alertClose").addEventListener('click',function(){
    document.getElementById("alertArea").style.display = "none";
})
let alertClose2 = document.getElementById("alertClose2").addEventListener('click',function(){
    document.getElementById("alertArea2").style.display = "none";
})

// TODO submitBtn option
let submitBtn = document.getElementById("submitBtn").addEventListener('click',function(){
    let inputField = document.getElementById("inputField");
    let inputFieldValue = inputField.value;
    if(inputFieldValue == false){
        let alertArea = document.getElementById("alertArea");
        alertArea.style.display ="block";
    }else{
        if(inputFieldValue.length > 30){
            let alertArea2 = document.getElementById("alertArea2");
            alertArea2.style.display ="block";
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
    }
})