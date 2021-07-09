//1.grab my credentials from creds file

//Connect to firestore library

const admin = require("firebase-admin");
//Connect to firestore library
//1. npm init -y
//2. npm i firebase-admin
const creds = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(creds),
});

//Now connected to all services in firebase project
const db = admin.firestore() //shortcut

//Create a customer. building an array in an object
const newCustomer = {
  firstName: "Nayla",
  lastName: "Leserra",
  tel: "561-715-2345",
  email: "nayla@gmail.com",
  dob: "05-31-1969",
  pets: [
    {
      name: "Bingo",
      type: "Dog",
      size: "Large",
      age: 1,
    },{
        name: 'Simba',
        type: 'Dog',
        size: 'xtrasmall',
        age: 4

    }],
}



db.collection('customers') //db customer collection - add this new customer
  .add(newCustomer)
  //.doc(luiz-silva) .add(newCustomer)
  .then((doc) => console.log("Created customer", doc.id))
  //doc.id creates id for us
  .catch((err) => console.error('Error Adding Customer:' , err))

//Get all customers
db.collection('customers').get()   //get whole collection
.then(collection => {
const allCustomers = collection.docs.map(doc => doc.data()) //grab data for each one and console log array
console.log (allCustomers)
})
.catch((err) => console.error('Error Getting Customers:' , err))

