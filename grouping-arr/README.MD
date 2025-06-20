This coding problem is about implementing a function called `groupBy(arr, key)` that takes:

* `arr`: an array of objects
* `key`: a string representing a property name

And returns an object that groups the items in `arr` by the value of the specified property `key`.

---

### ✅ Objective:

Group the objects in the array by the value of a specific key. The result should be an object where:

* Each key is a unique value from the given `key` field.
* Each value is an array of all objects that have that key's value.

---

### 🔍 Example:

#### Example 1:

```js
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

groupBy(users, 'age');
```

**Output:**

```js
{
  '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 } ]
}
```

#### Example 2:

```js
const products = [
  { id: 1, category: 'Electronics' },
  { id: 2, category: 'Clothing' },
  { id: 3, category: 'Electronics' }
];

groupBy(products, 'category');
```

**Output:**

```js
{
  'Electronics': [
    { id: 1, category: 'Electronics' },
    { id: 3, category: 'Electronics' }
  ],
  'Clothing': [
    { id: 2, category: 'Clothing' }
  ]
}
```

---

### 💡 Constraints:

* The array may be empty → return `{}`.
* The values of `key` can be of any type but will be stringified when used as object keys.
* The key might not exist on some objects (edge case, not shown in example).

---

### ✅ Solution (JavaScript):

```js
function groupBy(arr, key) {
  return arr.reduce((acc, obj) => {
    const groupKey = obj[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(obj);
    return acc;
  }, {});
}
```

---

### 🧠 Explanation:

* Use `.reduce()` to build the result object.
* For each item in the array, extract `obj[key]` as the group key.
* If it doesn't exist in the accumulator, initialize it as an empty array.
* Push the current object into the correct group.

---

