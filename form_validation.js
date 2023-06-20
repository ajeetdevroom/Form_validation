function validate() {

    var fields = [
        "your_name", 
        "user_name",
        " email_id",
        "password",
        "mobile_number",
        

    ]
    fields.forEach((val) => {
        if (document.forms["myForm"][val].value === "") {
            return false;
        }
    })

    if (document.myForm.your_name.value == "") {
        alert("Please provide your name!");
        document.myForm.your_name.focus();
        return false;
    }
    if (document.myForm.user_name.value == "") {
        alert("Please provide your Email!");
        document.myForm.user_name.focus();
        return false;
    }
    if (document.myForm.Zip.value == "" || isNaN(document.myForm.Zip.value) ||
        document.myForm.Zip.value.length != 5) {

        alert("Please provide a zip in the format #####.");
        document.myForm.Zip.focus();
        return false;
    }
    if (document.myForm.Country.value == "-1") {
        alert("Please provide your country!");
        return false;
    }
    if (ddocument.myForm.EMail.value == '') {
        return false;
    } else {
        validateEmail();
    }
    let validateEmail = () => {
        var emailID = document.myForm.EMail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus();
            return false;
        }

    }
    return (true);
}