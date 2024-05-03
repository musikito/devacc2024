
  
  const loginForm = document.getElementById("forgotForm");
  const emailInput = document.getElementById("email");
  const loginMessage = document.getElementById("sentMessage"); // Reference the H tag
  
  forgotForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const email = emailInput.value;
    
  
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
  