// const users = [
//   {
//     username: "amil",
//     password: "sup3rsecret",
//   },
//   {
//     username: "bubbG1",
//     password: "runFor3st!",
//   },
// ];
let users = [
  {
      username: "amil",
      password: "sup3rsecret"
  },
  {
      username: "bubbG1",
      password: "runFor3st!"
  },
  {
      username: "charlie01",
      password: "Pass1234!"
  },
  {
      username: "deltaEcho",
      password: "deltaEcho2$"
  },
  {
      username: "foxtrotG",
      password: "Foxtrot98@"
  },
  {
      username: "golfSierra",
      password: "golfSierra#1"
  },
  {
      username: "hotelBravo",
      password: "Hotel@Bravo"
  },
  {
      username: "india2Juliet",
      password: "indiaJ2$"
  },
  {
      username: "kiloLima",
      password: "KiloLima3^"
  },
  {
      username: "mikeNovember",
      password: "mikeN7%"
  },
  {
      username: "oscarPapa",
      password: "OscarP@2024"
  },
  {
      username: "quebecRomeo",
      password: "QuebecRomeo#5"
  },
  {
      username: "sierraTango",
      password: "SierraT!99"
  },
  {
      username: "uniformVictor",
      password: "UVictor1*"
  },
  {
      username: "whiskeyXray",
      password: "WhiskeyX#8"
  },
  {
      username: "yankeeZulu",
      password: "YanZul_7!"
  },
  {
      username: "alpha29",
      password: "AlphaTwoNine$"
  },
  {
      username: "betaCharlie",
      password: "Beta$Charlie1"
  },
  {
      username: "gammaDelta",
      password: "GammaDelta2024!"
  },
  {
      username: "epsilonZeta",
      password: "EpsZeta@22"
  },
  {
      username: "thetaIota",
      password: "Theta*Iota3"
  }
];
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Get username and password from the form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the username and password match any user in the users array
  let loggedIn = false;
  for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
          loggedIn = true;
          break;
      }
  }

  // Show appropriate message based on login status
  if (loggedIn) {
      loginMessage.textContent = `Hello!! ${username} you are logged in!`;
      alert(`Hello!! ${username} you are logged in!`);
  } else {
      
    loginMessage.textContent = "Sorry, wrong username or password.";
    alert("Sorry, wrong username or password.");  
  }
});
 
