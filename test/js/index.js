let hello = document.getElementById("hello")

if (localStorage.getItem("currentUser") == null ) {
    hello.innerHTML = "Bạn chưa đăng nhập!"
}
else{
    hello.innerHTML = "Xin chào  " + localStorage.getItem("currentUser") +"! Welcome to our website!"  
}


const signOutButton = document.getElementById("sign-out")
signOutButton.addEventListener("click", () => {
    if (localStorage.getItem("currentUser") == null) {
        alert("Bạn chưa đăng nhập, hiện không thể đăng xuất!")
    }
    else{
        localStorage.removeItem("currentUser")
        location.reload()
    }
})