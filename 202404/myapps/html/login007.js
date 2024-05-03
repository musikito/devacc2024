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
//  When are user logs in do not display their username display their first name instead
//  When you tell the user that they have logged in, show the total number of times that they have logged in
// The first version in your program will only be able to show the user that they've logged in one time
// Use JavaScript local storage to show users that they've logged in more than one time
// If a user types in the wrong username or password let them know that they typed in the wrong username or password
// Create an option that allows the user to create a new user account to be added to your object database
// Cre an option and the laws are user to reset their password
// add a logout feature (edited) 

document.getElementById("status").innerHTML = `<p style="color: red">Not logged in </p>`;

let loggedIn = false;
let loginCount = 0;
login = () => {
    event.preventDefault();
    let loginUserName = document.getElementById("username").value;
    let loginPassword = document.getElementById("password").value;

    for (let i = 0; i< users.length; i++) {
     if(loginUserName == users[i].username && loginPassword == users[i].password){
       // let loggedInUser = users[i].username;
        loggedIn = true;
        let firstName = users[i].firstName;
        
        // This will be used for version 2 with local storage
        // localStorage.setItem(loggedInUser,loginCount);
       
        document.getElementById("status").innerHTML = `<p style="color: green">Hello ${firstName}, you are logged in ${loginCount +1} times</p>`;
        document.getElementById("submit").value = "Sign Out";
        break;
     }else{ 
        document.getElementById("status").innerHTML = `<p style="color: red">Sorry, Wrong User Name or Password </p>`;
           
    }// End else
  }

  // End for
}// End function