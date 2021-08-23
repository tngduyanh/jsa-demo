const form = document.getElementById("form")


form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const data = {
        name: form.name.value.trim(),
        username: form.username.value.trim(),
        password: form.password.value.trim(),
    }
    
    if(data.name === ""){
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = "Name cannot be empty"
        nameError.style = "display: block"
    }
    else{
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = ""
        nameError.style = "display: none"
    }

    if(data.username === ""){
        const usernameError = document.getElementById('username-error')
        usernameError.innerHTML = "Username cannot be empty"
        usernameError.style = "display: block"
    }
    else{
        const usernameError = document.getElementById('username-error')
        usernameError.innerHTML = ""
        usernameError.style = "display: none"
    }    

    if(data.username.length < 4) {
        const shorterError = document.getElementById('shorter-error')
        shorterError.innerHTML = "Username cannot shorter than 4 letters"
        shorterError.style = "display: block"
      } else {
        const shorterError = document.getElementById('shorter-error')
        shorterError.innerHTML = ""
        shorterError.style = "display: none"
      }

      if(data.username.length > 16) {
        const longerError = document.getElementById('longer-error')
        longerError.innerHTML = "Password cannot longer than 16 letters"
        longerError.style = "display: block"
      } else {
        const longerError = document.getElementById('longer-error')
        longerError.innerHTML = ""
        longerError.style = "display: none"
      }

    if(data.password === ""){
        const passwordError = document.getElementById('password-error')
        passwordError.innerHTML = "Password cannot be empty"
        passwordError.style = "display: block"
    }
    else{
        const passwordError = document.getElementById('password-error')
        passwordError.innerHTML = ""
        passwordError.style = "display: none"
    }

    if(data.password.length < 8) {
        const shortError = document.getElementById('short-error')
        shortError.innerHTML = "Password cannot shorter than 8 letters"
        shortError.style = "display: block"
      } else {
        const shortError = document.getElementById('short-error')
        shortError.innerHTML = ""
        shortError.style = "display: none"
      }

      if(data.password.length > 16) {
        const longError = document.getElementById('long-error')
        longError.innerHTML = "Password cannot longer than 16 letters"
        longError.style = "display: block"
      } else {
        const longError = document.getElementById('long-error')
        longError.innerHTML = ""
        longError.style = "display: none"
      }
     



    // console.log(localStorage.getItem("user"));

      logIn(data);

}) 

function logIn(LoginData){
    if (localStorage.getItem(LoginData.username) == null) {
        alert("Username này không tồn tại!")
    }
    else if (localStorage.getItem(LoginData.username) != LoginData.password) {
        alert("Passwork không đúng!")
    }
    else{
        localStorage.setItem("currentUser", LoginData.username)
        alert("Login thành công!")
    }
}