function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123"){
        sessionStorage.setItem("role","admin");
        return true;
    } else if (username === "user" && password==="user123"){
        sessionStorage.setItem("role","user");
        return true;
    } else{
        alert("Invalid credentials!");
        return false;
    }
}

function checkRoleAccess(){
    const role = sessionStorage.getItem("role");
    if(role !== "admin"){
        document.getElementById("admin-menu").style.display = "none";
    }
}

