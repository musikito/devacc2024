function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = meal_cost * (tip_percent / 100);
    let tax = meal_cost * (tax_percent / 100);
    let totalCost = meal_cost + tip + tax;

     console.log(Math.round(totalCost));

} 

solve(12.00, 20, 8);