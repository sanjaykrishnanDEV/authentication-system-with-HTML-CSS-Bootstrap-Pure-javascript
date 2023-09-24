const username = document.getElementById("username");
const password = document.getElementById("password");
const cnfpassword = document.getElementById("crfpassword");
const login = document.getElementById("signup");

login.addEventListener("click", (e) => {
  e.preventDefault();

  const allUsers = Object.values(localStorage);
  const allUsersObj = allUsers.map((user) => JSON.parse(user));
  console.log(allUsersObj);

  const findUser = allUsersObj.find((user) => {
    if (user.username === username.value && user.password === password.value) {
      (localStorage.setItem('username', JSON.stringify(user.username)));
      localStorage.setItem('key',JSON.stringify(user.id));
      return user;
    }
  });

  if (findUser) {
    window.location.assign("profile.html");
    
  }
  else{
    alert('Invalid Credentials');
  }
});
