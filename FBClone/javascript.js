function validateInput() {
    var fieldValue = document.getElementById("email_or_mobile").value;

    var mobileValidation = /^([\s\(\)\-]*\d[\s\(\)\-]*){8}$/;
    var emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fieldValue.match(mobileValidation)) {
        return true;
    } else if (fieldValue.match(emailValidation)) {
        return true;
    } else {
        return false;
    }
}