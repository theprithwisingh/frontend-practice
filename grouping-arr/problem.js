/*const products = [
  { id: 1, category: 'Clothing', name: 'T-Shirt', price: 25 },
  { id: 2, category: 'Automotive', name: 'Car Battery', price: 150 },
  { id: 3, category: 'Books', name: 'Fiction Novel', price: 15 },
  { id: 4, category: 'Groceries', name: 'Rice (1kg)', price: 2 },
  { id: 5, category: 'Beauty', name: 'Face Cream', price: 25 },
  { id: 6, category: 'Toys', name: 'Action Figure', price: 20 },
  { id: 7, category: 'Electronics', name: 'Laptop', price: 999 },
  { id: 8, category: 'Books', name: 'Science Textbook', price: 45 },
  { id: 9, category: 'Appliances', name: 'Microwave', price: 150 },
  { id: 10, category: 'Clothing', name: 'Jacket', price: 120 },
  { id: 11, category: 'Beauty', name: 'Lipstick', price: 15 },
  { id: 12, category: 'Sports', name: 'Football', price: 30 },
  { id: 13, category: 'Toys', name: 'Lego Set', price: 45 },
  { id: 14, category: 'Electronics', name: 'Smartphone', price: 699 },
  { id: 15, category: 'Groceries', name: 'Milk (1L)', price: 1.5 },
  { id: 16, category: 'Automotive', name: 'Car Vacuum Cleaner', price: 60 },
  { id: 17, category: 'Sports', name: 'Tennis Racket', price: 80 },
  { id: 18, category: 'Books', name: 'Biography', price: 22 },
  { id: 19, category: 'Appliances', name: 'Refrigerator', price: 1200 },
  { id: 20, category: 'Beauty', name: 'Shampoo', price: 10 },
  { id: 21, category: 'Toys', name: 'RC Car', price: 70 },
  { id: 22, category: 'Clothing', name: 'Jeans', price: 60 },
  { id: 23, category: 'Groceries', name: 'Eggs (12pc)', price: 3 },
  { id: 24, category: 'Electronics', name: 'Headphones', price: 199 },
  { id: 25, category: 'Appliances', name: 'Washing Machine', price: 800 },
  { id: 26, category: 'Sports', name: 'Yoga Mat', price: 25 },
  { id: 27, category: 'Automotive', name: 'Engine Oil', price: 40 },
  { id: 28, category: 'Clothing', name: 'T-Shirt', price: 250 },
];
*/

/*const groupBy = (products, categoryName) => {
  return products.filter(product => product.category === categoryName);
};
const result = groupBy(products, 'Clothing');*/

/*
function groupBy1(array, key) {
  return array.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(obj);
    return acc;
  }, {});
}

const grouped = groupBy1(products, 'category');
console.log(">>>",grouped['Clothing']);
*/

const people = [
  { name: "Prithwi", age: 25 },
  { name: "Aarav", age: 24 },
  { name: "Saanvi", age: 24 },
  { name: "Vivaan", age: 25 },
  { name: "Anaya", age: 26 },
  { name: "Krishna", age: 26},
  { name: "Meera", age: 25 },
  { name: "Ishaan", age: 27 },
  { name: "Diya", age: 26 },
  { name: "Rudra", age: 29 },
  { name: "Arjun", age: 29 }
];

 function groupBy1(people, age){
   const value =  people.filter(e=>e.age===age);
   return value
 }
 const exampleResult = groupBy1(people, 25);/*[{ name: 'Prithwi', age: 25 },{ name: 'Vivaan', age: 25 }, { name: 'Meera', age: 25 }]*/


 function groupBy2(people, age){
  
 }
 //'25':[{name:"Prithwi",age:25},{name:"johnny",age:25}]

const obj = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
  { Phase: "Phase 1", Step: "Step 3", Task: "Task 2", Value: "10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
  { Phase: "Phase 1", Step: "Step 5", Task: "Task 2", Value: "15" },
  { Phase: "Phase 1", Step: "Step 6", Task: "Task 3", Value: "15" },
  { Phase: "Phase 1", Step: "Step 7", Task: "Task 4", Value: "15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
  { Phase: "Phase 2", Step: "Step 3", Task: "Task 2", Value: "30" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
  { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" },
];

function groupBy(obj, property) {
  return obj.reduce((result, item) => {
    const key = item[property];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
}

console.log(groupBy(obj, "Task"));

//console.log(groupBy(products, 'category'));
