document.getElementById("booking-form").onsubmit = () =>{



    let isValid = true;
    clearErrors();

    let destination = document.getElementById("destination").value;
    if(destination == "none"){
        document.getElementById("err-destination").style.visibility = "visible";
        isValid = false;
    }

    let date = document.getElementById("date").value;
    if(!date){
        document.getElementById("err-date").style.visibility = "visible";
        isValid = false
    }

    let travelers = document.getElementById("travelers").value;
    if(travelers < 1){
        document.getElementById("err-travelers").style.visibility = "visible"
        isValid = false
    }

    return isValid;
}


function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.visibility = "hidden"
    }

}