// Gonder
function validateForm() {
    if (isEmptyOrSpaces(document.forms['form']['name'].value)) {
        alert("Please clear the Name field");
        return false;
    }

    if (isEmptyOrSpaces(document.forms['form']['reason'].value)) {
        alert("Please fill out the contact reason field");
        return false;
    }

    if (isEmptyOrSpaces(document.forms['form']['details'].value)) {
        alert("Please clear the Detail field");
        return false;
    }

    if (isEmptyOrSpaces(document.forms['form']['email'].value)) {
        alert("Please fill the Email field");
        return false;
    }

    if (!isEmail(document.forms['form']['email'].value)) {
        alert("Please enter a valid Email");
        return false;
    }
    return true;
}

function isEmptyOrSpaces(str) {
    //https://stackoverflow.com/a/10232792
    return str === null || str.match(/^ *$/) !== null;
}

function isEmail(s) {
    var str = String(s);
    var strArr = str.split("@");
    if (strArr.length != 2 || strArr[0].length < 1 || strArr[1] < 1)
        return false;
    var dotArr = strArr[1].split(".");
    for (var i = 0; i < dotArr.length; i++) {
        var element = dotArr[i];
        if (element.length < 1) {
            return false;
        }
    }
    return true;
}


// delete
function eraseForm() {
    document.forms['form']['name'].value = "";
    document.forms['form']['email'].value = "";
    document.forms['form']['reason'].value = "";
    document.forms['form']['details'].value = "";
    document.forms['form']['gender'].selectedIndex = 2;
}