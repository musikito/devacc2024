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
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    // Get username and password from the form
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // Check if the username and password match any user in the users array
    var loggedIn = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === usernameInput && users[i].password === passwordInput) {
            loggedIn = true;
            break;
        }
    }

    // Show appropriate message based on login status
    if (loggedIn) {
        alert("Successfully logged in!");
    } else {
        alert("Sorry, wrong username or password.");
    }
});
