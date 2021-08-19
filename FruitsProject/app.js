const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    rating:{
        type : Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 10,
    review: "Peaches are so yummy!"
    
})

fruit.save()

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    rating: 37,

})
// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// })
// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// })
// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
});



// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Insert some documents
//     collection.insertMany([
//     { 
//           name: "Apple",
//         score: 8,
//         review: "Great Fruit"
//     }, 
//     {
//           name: "Orange",
//       score: 8,
//       review: "Kinda Sour"
//     }, 
//     {
//           name: "Banana",
//       score: 8,
//       review: "Great Stuff!"
//     }
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
//   }

//   const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('fruits');
//     // Find some documents
//     collection.find({}).toArray(function(err, fruits) {
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(fruits)
//       callback(fruits);
//     });
//   }