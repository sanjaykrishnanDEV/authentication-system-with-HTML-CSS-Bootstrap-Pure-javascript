const userdetails = document.getElementById("users");

// let username = JSON.stringify(localStorage.getItem(name));
// userdetails.value += 'username';
// console.log(userdetails);

let username = localStorage.getItem("username");
let key = localStorage.getItem("key");

console.log(username);
document.getElementById("logout").addEventListener("click", () => {
  if (confirm("are you sure?")) {
    localStorage.removeItem("username");
    localStorage.removeItem("key");
    window.location.assign("login.html");
  }
});

userdetails.innerText = username;

document.getElementById("deleteprofile").addEventListener("click", () => {
    
  if (confirm("are you sure to delete the user")) {
    let r = key;
    console.log(key)
    localStorage.removeItem(r);
    localStorage.removeItem("username");
    localStorage.removeItem("key");
    window.location.assign("login.html");
    
  }
});

document.getElementById('editprofile').addEventListener('click',()=>{
    let newUserName = prompt('enter new username');
    let newPassword = prompt('enter new password');
    let r = key;
    let rs = JSON.parse(localStorage.getItem(r));
    rs.username = newUserName;
    rs.password = newPassword;
    localStorage.setItem(r,JSON.stringify(rs))
    userdetails.innerText = newUserName;
    console.log(rs)
})