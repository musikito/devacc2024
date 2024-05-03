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

document.getElementById("status").innerHTML = `<p style="color: red">Logged Out </p>`;

login = () => {
    event.preventDefault();
    let loginUserName = document.getElementById("username").value;
    let loginPassword = document.getElementById("password").value;

    for (let i = 0; i< users.length; i++) {
     if(loginUserName == users[i].username && loginPassword == users[i].password){
        let loggedInUser = users[i].username;
        document.getElementById("status").innerHTML = `<p style="color: green">Hello ${loggedInUser}, you are logged in </p>`;
        break;
     }// End if
       
    }// End if

}// End function

