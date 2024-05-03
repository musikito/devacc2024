const users = [
    {
      username: "amil",
      password: "sup3rsecret",
    },
    {
      username: "bubbG1",
      password: "runFor3st!",
    },
  ]; 
  
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginMessage = document.getElementById("loginMessage"); // Reference the p tag
  
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const username = usernameInput.value;
    const password = passwordInput.value;
  
    // Check if username and password match any user in the list
    const foundUser = users.find(user => user.username === username && user.password === password);
  
    if (foundUser) {
      loginMessage.style.color = "green";
      loginMessage.textContent = `Hello!! ${username} you are logged in`;
      alert(`Hello!! ${username} you are logged in`); 
      
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Sorry, wrong username or password.";
      alert("Sorry, wrong username or password.");  
    }
    
    // Clear form fields after submission (optional)
    usernameInput.value = "";
    passwordInput.value = "";
    
  });
  