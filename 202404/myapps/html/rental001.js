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

const carListEl = document.getElementById('car-list');
const availabilityFilterEl = document.getElementById('availability-filter');


function displayCars(filterValue = 'all') {
    let carHtml = '';
    for (let i = 0; i < cars.length; i++) {
        if (filterValue === 'all' || cars[i].availability === (filterValue === 'available')) {
            // Change availability
            const availability = cars[i].availability ? 'Available' : 'Unavailable';
           showIt(cars[i])
            carHtml += `
          <div>
            <h2>${cars[i].make} ${cars[i].model} (${cars[i].year})</h2>
            <p>Daily Rate: $${cars[i].rentalRatePerDay}</p>
            
            <p>Availability: ${availability}</p>
            
            
          </div>
        `;
        
       
        } // End of availability
       
        // if(cars[i].availability){
        //     let newBtn = document.createElement('button');
        //     newBtn.innerHTML = 'Rent it ';
        //     document.body.appendChild(newBtn);
        //     // alert(`${cars[i].make}` )
        // }
        if(filterValue == 'model'){
            console.log("${cars[i].model}");
        }

    } // End for
    carListEl.innerHTML = carHtml;
}

availabilityFilterEl.addEventListener('change', (event) => {
    const filterValue = event.target.value;
    displayCars(filterValue);
});

// Helper function for display selection
showIt = (car) => {
    console.log(car);
}
displayCars();
