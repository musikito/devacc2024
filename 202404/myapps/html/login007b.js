let users = [
  { username: "amil", password: "sup3rsecret", firstName: "Arnell", lastName: "Milhouse", totalLogins: 0 },
  { username: "bubbG1", password: "runFor3st!", firstName: "Bubba", lastName: "Green", totalLogins: 0 },
  { username: "charlie01", password: "Pass1234!", firstName: "Charlie", lastName: "Brown", totalLogins: 0 },
  { username: "deltaEcho", password: "deltaEcho2$", firstName: "Diana", lastName: "Echols", totalLogins: 0 },
  { username: "foxtrotG", password: "Foxtrot98@", firstName: "Frank", lastName: "Gallagher", totalLogins: 0 },
  { username: "golfSierra", password: "golfSierra#1", firstName: "Gary", lastName: "Sierra", totalLogins: 0 },
  { username: "hotelBravo", password: "Hotel@Bravo", firstName: "Hannah", lastName: "Bravo", totalLogins: 0 },
  { username: "india2Juliet", password: "indiaJ2$", firstName: "Ian", lastName: "Juliet", totalLogins: 0 },
  { username: "kiloLima", password: "KiloLima3^", firstName: "Karl", lastName: "Lima", totalLogins: 0 },
  { username: "mikeNovember", password: "mikeN7%", firstName: "Michael", lastName: "November", totalLogins: 0 },
  { username: "oscarPapa", password: "OscarP@2024", firstName: "Oliver", lastName: "Papa", totalLogins: 0 },
  { username: "quebecRomeo", password: "QuebecRomeo#5", firstName: "Quentin", lastName: "Romeo", totalLogins: 0 },
  { username: "sierraTango", password: "SierraT!99", firstName: "Samantha", lastName: "Tango", totalLogins: 0 },
  { username: "uniformVictor", password: "UVictor1*", firstName: "Ursula", lastName: "Victor", totalLogins: 0 },
  { username: "whiskeyXray", password: "WhiskeyX#8", firstName: "William", lastName: "Xray", totalLogins: 0 },
  { username: "yankeeZulu", password: "YanZul_7!", firstName: "Yasmine", lastName: "Zulu", totalLogins: 0 },
  { username: "alpha29", password: "AlphaTwoNine$", firstName: "Aaron", lastName: "Alpha", totalLogins: 0 },
  { username: "betaCharlie", password: "Beta$Charlie1", firstName: "Bella", lastName: "Charlie", totalLogins: 0 },
  { username: "gammaDelta", password: "GammaDelta2024!", firstName: "Gemma", lastName: "Delta", totalLogins: 0 },
  { username: "epsilonZeta", password: "EpsZeta@22", firstName: "Evan", lastName: "Zeta", totalLogins: 0 },
  { username: "thetaIota", password: "Theta*Iota3", firstName: "Theodore", lastName: "Iota", totalLogins: 0 }
];

// create files login007.html and js, that use the users object above and fulfill the following requirements:  Send whatever code you have by whatever time you leave tonight.


// Hide the Create Account and Reset Password forms at start
document.getElementById("createAccountForm").style.display = "none";
document.getElementById("resetPasswordForm").style.display = "none";


// Show Create Acoount form and hide login form
showHideForm = (form) => {
  switch (form) {
    case 'create':
      document.getElementById("createAccountForm").style.display = "block";
      document.getElementById("loginForm").style.display = "none";
      break;
    case 'reset':
      document.getElementById("resetPasswordForm").style.display = "block";
      document.getElementById("resetdiv").style.display = "none";
      document.getElementById("loginForm").style.display = "none";
      break;
    default:
      document.getElementById("resetPasswordForm").style.display = "none";
      document.getElementById("resetdiv").style.display = "none";
      document.getElementById("createAccountForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";

  }

}



document.getElementById("status").innerHTML = `<p style="color: red">Not logged in </p>`;

let loggedIn = false;
let found = false;
// let loginCount = 0;
let loginUserName = document.getElementById("username");
let loginPassword = document.getElementById("password");
let newPassword = document.getElementById("reset");
let loginButton = document.getElementById("submit");
let resetButton = document.getElementById("resetbutton");

// Cre an option and the laws are user to reset their password
resetPassword = () => {
  event.preventDefault();
  const username = newPassword.value;
  
  for (i = 0; i < users.length; i++) {
    if (username == users[i].username) {
      resetButton.value = "Reset Password";
      document.getElementById("resetdiv").style.display = "block";
      
      let firstName = users[i].firstName;
      resetButton.onclick = function () {
        // console.log("reset button");
        users[i].password = document.getElementById("newpassword").value;
        // document.getElementById("status").innerHTML = `<p style="color: green">Congrats ${firstName}, your password has been hanged</p>`;
        alert(`Congrats ${firstName}, your password has been hanged`);
        showHideForm(); 
      }
      break;
    } else {
      document.getElementById("reset").value = "";
      notFound();
    }
  }
  
}// End resetPassword

login = () => {
  event.preventDefault();
  
  const username = loginUserName.value;
  const password = loginPassword.value;
  
  
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      //  When are user logs in do not display their username display their first name instead
      let firstName = users[i].firstName;
      //  When you tell the user that they have logged in, show the total number of times that they have logged in
      // The first version in your program will only be able to show the user that they've logged in one time
      let loginCount = users[i].totalLogins;
      loginCount++;
      users[i].totalLogins = loginCount;
      // Use JavaScript local storage to show users that they've logged in more than one time
      localStorage.setItem("totalLogin", loginCount); // Store login count in local storage
      
      document.getElementById("status").innerHTML = `<p style="color: green">Hello ${firstName}, you have logged in ${loginCount} times</p>`;
      loggedIn = true;
      break;
      
    }
  }
  if (loggedIn) {
    
    loginButton.value = "Log Out";
    // add a logout feature (edited) 
    loginButton.onclick = function () {
      localStorage.removeItem("totalLogin");
      // Clear form fields after submission 
      // loginButton.value = "Log In";
      // loginUserName.value = "";
      // loginPassword.value = ""; 
      // document.getElementById("status").innerHTML = `<p style="color: red">Not logged in </p>`;
      // console.log(loginButton.value);
      location.reload();
    };
    
  } else {
    // If a user types in the wrong username or password let them know that they typed in the wrong username or password
    notFound();
    
  }// End else
}// End function


// Create an option that allows the user to create a new user account to be added to your object database
createAccount = () => {
  event.preventDefault();
  let userName = document.getElementById("create-username").value;
  let password = document.getElementById("create-password").value;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  
  let newUser = {
    username: userName,
    password: password,
    firstName: firstName,
    lastName: lastName,
    totalLogins: 0
  };
  
  // Add new user to array
  users.push(newUser);
  console.log(users);
  
  // Show/Hide forms
  showHideForm();
}
// Error handling
notFound = () => {
  event.preventDefault();
  document.getElementById("status").innerHTML = `<p style="color: red">Sorry, Wrong User Name or Password </p>`;
}
