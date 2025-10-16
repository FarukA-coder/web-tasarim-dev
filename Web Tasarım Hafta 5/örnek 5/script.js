function verify() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var msg = "";

    user.className = "inpBox";
    pass.className = "inpBox";

    if(user.value === "") {
        msg += "Please enter a username !\n";
        user.className = "inpBoxError";
    }

    if(pass.value === "") {
        msg += "Please enter a password !\n";
        pass.className = "inpBoxError";
    }

    if (msg === "") {
        return true;
    }
    else {
        alert(msg);
        return false;
    }
}