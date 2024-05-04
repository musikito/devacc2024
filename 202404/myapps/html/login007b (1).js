let users = [
    { username: "zzz", password: "zzz", firstName: "zzzperson", lastName: "zzzLastname", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "amil", password: "sup3rsecret", firstName: "Arnell", lastName: "Milhouse", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "bubbG1", password: "runFor3st!", firstName: "Bubba", lastName: "Green", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "charlie01", password: "Pass1234!", firstName: "Charlie", lastName: "Brown", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "deltaEcho", password: "deltaEcho2$", firstName: "Diana", lastName: "Echols", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "foxtrotG", password: "Foxtrot98@", firstName: "Frank", lastName: "Gallagher", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "golfSierra", password: "golfSierra#1", firstName: "Gary", lastName: "Sierra", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "hotelBravo", password: "Hotel@Bravo", firstName: "Hannah", lastName: "Bravo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "india2Juliet", password: "indiaJ2$", firstName: "Ian", lastName: "Juliet", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "kiloLima", password: "KiloLima3^", firstName: "Karl", lastName: "Lima", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "mikeNovember", password: "mikeN7%", firstName: "Michael", lastName: "November", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "oscarPapa", password: "OscarP@2024", firstName: "Oliver", lastName: "Papa", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "quebecRomeo", password: "QuebecRomeo#5", firstName: "Quentin", lastName: "Romeo", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "sierraTango", password: "SierraT!99", firstName: "Samantha", lastName: "Tango", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "uniformVictor", password: "UVictor1*", firstName: "Ursula", lastName: "Victor", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "whiskeyXray", password: "WhiskeyX#8", firstName: "William", lastName: "Xray", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "yankeeZulu", password: "YanZul_7!", firstName: "Yasmine", lastName: "Zulu", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "alpha29", password: "AlphaTwoNine$", firstName: "Aaron", lastName: "Alpha", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "betaCharlie", password: "Beta$Charlie1", firstName: "Bella", lastName: "Charlie", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "gammaDelta", password: "GammaDelta2024!", firstName: "Gemma", lastName: "Delta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "epsilonZeta", password: "EpsZeta@22", firstName: "Evan", lastName: "Zeta", currentlyLoggedIn: false, totalLogins: 0 },
    { username: "thetaIota", password: "Theta*Iota3", firstName: "Theodore", lastName: "Iota", currentlyLoggedIn: false, totalLogins: 0 },
    
];

let localUsersObj = JSON.stringify(users)

if (localStorage.getItem("localUsers")) {
    console.log("local storage exists");
    let localUsersText =  localStorage.getItem("localUsers")
    users = JSON.parse(localUsersText)

    let loginCheck = 0

        for (let i = 0; i < users.length; i++) {
            if (users[i].currentlyLoggedIn) {
                loginCheck++
                document.getElementById("status").innerHTML = `<p style="color: green">Hello ${users[i].firstName}, You are Logged In! You have logged in ${users[i].totalLogins} times</p>`
                break
            }
        }
        
        if (loginCheck == 0) {
            document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
            document.getElementById("newAccountStatus").innerHTML = ``
    
        }


} else {
    console.log("local storage DOES NOT exists");
    let usersString = JSON.stringify(users)
    localStorage.setItem("localUsers", usersString)
}




login = () => {
    event.preventDefault()
    let loginUserName = document.getElementById("username").value
    let loginPassword = document.getElementById("password").value
    let badUserCount = 0

    for (let i = 0; i < users.length; i++) {
        // console.log(Boolean(loginUserName == users[i].username && loginPassword == users[i].password));
        if (loginUserName == users[i].username && loginPassword == users[i].password) {
            let loggedInUser = users[i].firstName
            users[i].totalLogins++
            users[i].currentlyLoggedIn = true
            let loggedInCount = users[i].totalLogins

            localUsersObj = JSON.stringify(users)
            localStorage.setItem("localUsers", localUsersObj)

            document.getElementById("status").innerHTML = `<p style="color: green">Hello ${users[i].firstName}, You are Logged In! You have logged in ${loggedInCount} times</p>`
            document.getElementById("newAccountStatus").innerHTML = ``
            console.log(badUserCount);


            break

        } else {
            badUserCount++
        }

    }
    
    if (badUserCount == users.length) {
        console.log(badUserCount);
        console.log(users.length);
        console.log("username or password issue");

        document.getElementById("status").innerHTML = `<p style="color: red">Username or Password is incorrect. Enter the correct Username or Reset Password Below.</p>`
        document.getElementById("resetPassword").innerHTML = `<hr><form onSubmit="resetPw()"> <input type="submit" value="Reset Password"> </form>`
    }

    localUsersObj = JSON.stringify(users)
    localStorage.setItem("localUsers", localUsersObj)

    document.getElementById("username").value = ""
    document.getElementById("password").value = ""


}

createAccount = () => {
    event.preventDefault()

    let loginFirstName = document.getElementById("newFirstName").value
    let loginLastName = document.getElementById("newLastName").value
    let loginUserName = document.getElementById("newUsername").value
    let loginPassword = document.getElementById("newPassword").value
    console.log(loginFirstName);
    console.log(loginLastName);
    console.log(loginUserName);
    console.log(loginPassword);

    console.log(`{ username: ${loginUserName}, password: ${loginPassword}, firstName: ${loginFirstName}, lastName: ${loginLastName}, currentlyLoggedIn: false, totalLogins: 0 },`); 
    
    users.push({ username: loginUserName, password: loginPassword, firstName: loginFirstName, lastName: loginLastName, currentlyLoggedIn: false, totalLogins: 0 }); 

    localUsersObj = JSON.stringify(users)
    localStorage.setItem("localUsers", localUsersObj)


    // let newAccount = `{ username: ${loginUserName}, password: ${loginPassword}, firstName: ${loginFirstName}, lastName: ${loginLastName}, currentlyLoggedIn: false, totalLogins: 0 },`
    document.getElementById("newAccountStatus").innerHTML = `<p style="color: green">Hello ${loginFirstName}, Youre account has been created.  You may now login above</p>`
    console.log(users);
}


logout = () => {
    event.preventDefault()

    for (let i = 0; i < users.length; i++) {
            users[i].currentlyLoggedIn = false
        }

        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)

        document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
        document.getElementById("newAccountStatus").innerHTML = ``


    }


resetPw = () => {
    event.preventDefault()
    document.getElementById("resetAccount").innerHTML = 
    `<br>    
    <hr>
    <p>Create New Password:</p>
    <form onSubmit="writeNewPassword()">
    <label for="">Last Name:</label>
    <input type="text" id="accountLastname">
    <label for="">Username:</label>
    <input type="text" id="accountUsername">
    <label for="">New Password:</label>
    <input type="password" id="accountPassword">
    <input type="submit" value="submit">
    </form>`
    
} 

writeNewPassword = () => {
    event.preventDefault()
    console.log("write new pw stuff");

    let accountLastname = document.getElementById("accountLastname").value
    let accountUsername = document.getElementById("accountUsername").value
    let accountPassword = document.getElementById("accountPassword").value

    let pwChange = 0
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == accountUsername) {
            users[i].password = accountPassword
            pwChange++
            document.getElementById("resetAccount").innerHTML = ""
            document.getElementById("resetPassword").innerHTML = ""

            document.getElementById("status").innerHTML = `<p style="color: green">Your password has been updated</p>`

        }
    }

    if (pwChange != 0) {
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
        localUsersObj = JSON.stringify(users)
        localStorage.setItem("localUsers", localUsersObj)
    }

}
