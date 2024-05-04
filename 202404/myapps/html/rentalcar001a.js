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

cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        rentalRatePerDay: 45, // in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2021,
        rentalRatePerDay: 40, // in dollars
        availability: false
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        rentalRatePerDay: 50, // in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2023,
        rentalRatePerDay: 47, // in dollars
        availability: true
    }
];

// Convert the users array to a string
let localUsersObj = JSON.stringify(users)


// Check if the user is already logged in
if (localStorage.getItem("localUsers")) {
    console.log("local storage exists");
    let localUsersText =  localStorage.getItem("localUsers")
    users = JSON.parse(localUsersText)
    
    let loginCheck = 0;
    
    users.forEach((user) => {
        if (user.currentlyLoggedIn) {
            loginCheck++;
            document.getElementById("status").innerHTML = `<p style="color: green">Hello ${user.firstName}, You are Logged In! You have logged in ${user.totalLogins} times</p>`;
        }
    }); // End forEach
    
    
    
    if (loginCheck == 0) {
        document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
        // document.getElementById("newAccountStatus").innerHTML = ``
        
    } // End if loginCheck == 0
    
    
} else {
    // Create the local storage
    let usersString = JSON.stringify(users)
    localStorage.setItem("localUsers", usersString)
} // End else statement

/*
We first check if the user is logged in. If they are, we check if their username and password match. If they do, we set their currentlyLoggedIn property to true and increment their totalLogins property by 1. If they do not match, we set their currentlyLoggedIn property to false.
*/
login = () =>{
    // console.log("enter login function");
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let loginCheck = false;
    users.forEach((user) => {
        if (user.username == username && user.password == password) {
            let loggedInUser = user.firstName; // Assign the logged in user to a variable
            user.currentlyLoggedIn = true;
            user.totalLogins++;
            loginCheck = true;
            let loggedInCount = user.totalLogins;
            localUsersObj = JSON.stringify(users);
            localStorage.setItem("localUsers", localUsersObj);
            // Display MSGS
            document.getElementById("status").innerHTML = `<p style="color: green">Hello ${loggedInUser}, You are Logged In! You have logged in ${loggedInCount} times</p>`;
            // Change login button to logout
            document.getElementById("login-logout").innerHTML = `<button id="login-logout" onclick="logout()">Log Out</button>`;
            // Show the car list
            document.getElementById("rent-div").style.display = "block";
            // Hide the new account form
            // document.getElementById("login-div").style.display = "none";
            
        } else{
            user.currentlyLoggedIn = false;
            loginCheck = false;
            document.getElementById("status").innerHTML = `<p style="color: red">Invalid Username or Password</p>`;
            document.getElementById("login-logout").innerHTML = `<button id="login-logout" onclick="logout()">Login</button>`;
             
        }
    }); // End forEach
} // End login function

logout = () => {
   
    console.log("enter logout function");
    event.preventDefault();
    loginCheck = false;
    users.forEach((user) => {
        if (user.currentlyLoggedIn) {
            user.currentlyLoggedIn = false;
        } // En if
           
            localUsersObj = JSON.stringify(users);
            localStorage.setItem("localUsers", localUsersObj);
            // Display MSGS
            document.getElementById("status").innerHTML = `<p style="color: red">No Users Currently Logged In</p>`
            //Hide the car list
            document.getElementById("rent-div").style.display = "none";
            // Show the new account form
            document.getElementById("login-div").style.display = "block";
        }); // end ofrEacch loop
}// End of logout function








const availabilityFilterEl = document.getElementById("availability-filter");
displayAvailableCars = () => {   
    // console.log("function called"); 
    availabilityFilterEl.innerHTML = "";
    const available = cars.filter(car => car.availability === true);
    // Using a ForEach loop to create a new <option> element for each car in the array
    available.forEach(car => {
        // console.log(car);
        const option = document.createElement('option');
        option.value = car.make + ' ' + car.model;
        option.innerText = car.make +' ' + car.model;
        // Add the filter to the list
        availabilityFilterEl.appendChild(option);
        // option.textContent = car.make +'' + car.model;
        // const option = document.createElement('option');
        // option.value = car.availability;
        // option.innerText = car.availability? 'Available' : 'Unavailable';
        // availabilityFilterEl.appendChild(option);
    });

  

    // const filterValue = availabilityFilterEl.value;
    // const filteredCars = cars.filter(car => car.availability === (filterValue === 'available'));
    // const tableBody = document.getElementById('cars-table-body');
    // tableBody.innerHTML = '';
    // filteredCars.forEach(car => {
    //     const row = document.createElement('tr');
    //     row.innerHTML = `
    //         <td>${car.make}</td>
    //         <td>${car.model}</td>
    //         <td>${car.year}</td>
    //         <td>${car.rentalRatePerDay}</td>
    //         <td>${car.availability}</td>
    //     `;
    //     tableBody.appendChild(row);
    // });
} // End of function filterCars()

// Call the function to populate the Dropdown List
displayAvailableCars();
