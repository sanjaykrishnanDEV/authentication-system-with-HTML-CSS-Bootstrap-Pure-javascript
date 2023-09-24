const username = document.getElementById("username");
const password = document.getElementById("password");
const cnfpassword = document.getElementById("crfpassword");
const signup = document.getElementById("signup");
const email = document.getElementById('email');
signup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "" || password === "" || cnfpassword === "" ||email ==="") {
    if (username.value === "") {
      let textalert = document.createElement("div");
      textalert.innerHTML = `<p class="text-danger">Please enter a valid username</p>`;
      username.insertAdjacentElement("afterend", textalert);
    }
    if(password.value === ""){
        let textalert = document.createElement("div");
        textalert.innerHTML = `<p class="text-danger">Please enter a valid password</p>`;
        password.insertAdjacentElement("afterend", textalert);
    }
    if(email.value === ""){
      let textalert = document.createElement("div");
      textalert.innerHTML = `<p class="text-danger">Please enter a valid mail id</p>`;
      email.insertAdjacentElement("afterend", textalert);
  }
  
  }
  else{
    if(password.value === cnfpassword.value){
        let userId = Math.floor(Math.random()*351);
        let userData = {
            id : userId,
            username:username.value,
            password:password.value,
        }
        localStorage.setItem(userId,JSON.stringify(userData));
        username.value ="";
        password.value="";
        cnfpassword.value="";
        email.value="";
        alert('user successfully added');
        
    }else {
        alert("Enter password and confirm password as same");
      }
  }
});

