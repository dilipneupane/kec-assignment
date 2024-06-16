// Level 3 Questions

// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
const AgeGroup = (person) => {
    const age = person.age;
    if (age <= 12) return 'Child';
    if (age <= 19) return 'Teen';
    if (age <= 59) return 'Adult';
    return 'Senior';
};
console.log(AgeGroup(person1));
// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
const totalItems = (inventory) => {
    return Object.values(inventory).reduce((total, count) => total + count, 0);
};
console.log(totalItems(inventory2));
// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
const getStudentNames = (students) => {
    return Object.values(students);
};
console.log(getStudentNames(students3));
// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
const PropertiesFilled = (details) => {
    return Object.values(details).every(value => value !== undefined && value !== null && value !== '');
};
console.log(PropertiesFilled(details4));
// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 100 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
const averagePrice = (products) => {
    const prices = Object.values(products).map(product => product.price);
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total / prices.length;
};
console.log(averagePrice(products5).toFixed(2));
// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
const highestScore = (scores) => {
    return Math.max(...Object.values(scores));
};
console.log(highestScore(scores6))
// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
const averageSalary = (employees) => {
    const total = Object.values(employees).reduce((sum, employee) => sum + employee.salary, 0);
    return total / Object.values(employees).length;
};
console.log(averageSalary(employees7));
// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
const sortedValues = (data) => {
    return Object.values(data).sort((a, b) => (typeof a === 'number' && typeof b === 'number') ? a - b : (typeof a === 'number') ? -1 : (typeof b === 'number') ? 1 : a.localeCompare(b));
};
console.log(sortedValues(data8));
// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };
const totalCost = (order) => {
    return order.quantity * order.price;
};
console.log(totalCost(order9));
// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };
const totalExpenses = (expenses) => {
    return Object.values(expenses).reduce((total, amount) => total + amount, 0);
};
console.log(totalExpenses(expenses10));