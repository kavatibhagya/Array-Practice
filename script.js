const items = [
    { name: 'Bike',  price: 100 },
    { name: 'TV',  price:200 },
    { name: 'Album',  price: 10 },
    { name: 'Book',  price: 5 },
    { name: 'Phone',  price: 500 },
    { name: 'Computer',  price: 1000 },
    { name: 'Key Board',  price: 25 },
]
const filterdItems = items.filter((item) => {
    return item.price <= 100
})
const itemName = items.map((item) => {
    return item.name
})
const foundItem = items.find((item) => {
     return item.name === "Book"
})
    console.log(filterdItems); 
    console.log(itemName);
    console.log(foundItem);
    