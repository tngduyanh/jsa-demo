let hello = document.getElementById("hello")

if (localStorage.getItem("currentUser") == null ) {
    hello.innerHTML = "Bạn chưa đăng nhập!"
}
else{
    hello.innerHTML = "Xin chào  " + localStorage.getItem("currentUser") +"! Chào mừng bạn đến với PTA Gaming!"  
}


const signOutLink = document.getElementById("sign-out")
signOutLink.addEventListener("click", () => {
    if (localStorage.getItem("currentUser") == null) {
        alert("Bạn chưa đăng nhập, hiện không thể đăng xuất!")
    }
    else{
        localStorage.removeItem("currentUser")
        location.reload()
    }
})

if (localStorage.getItem("currentUser") == null) {
    signOutLink.innerHTML = ""
}
else{
    signOutLink.innerHTML = "SIGN OUT"
}



let signInLink = document.getElementById("in")
if (localStorage.getItem("currentUser") == null) {
    signInLink.innerHTML = "SIGN IN"
}
else{
    signInLink.innerHTML = ""
}
