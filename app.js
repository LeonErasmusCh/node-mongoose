const { ObjectId } = require('bson');
const mongoose = require('mongoose');

try {
    // Connection to database (practice)
    mongoose.connect('mongodb+srv://Leon:LEEpeanut83@practice.lewucis.mongodb.net/?retryWrites=true&w=majority', (err) => {
        if (err) throw err;
        console.log('Database connected sucessfully!');
    })

    // Create SCHEMA for database
     const todoSchema = mongoose.Schema({
        task: {
            type: String,
            required: [true, 'Task is required']
        },
        completed : Boolean,
    }) 

    // Create MODEL to interact in database 
    const Todo = mongoose.model('Todo', todoSchema);

    // Create a new todo (document) in the collection
/*    const todo = new Todo({
        task: "walk the dog",
        completed: false
    }) 

     todo.save((err) => {
        if (err) throw err;
        console.log('New task created');
    });  */
   
    // Search for element in collection
    /* const findTodo = Todo.find({ task: 'walk the dog' })
    console.log(findTodo); */

    // Update Todo
     Todo.updateOne({ _id: ObjectId('63226741f3c5f68a3364c776')} , { task : 'fly to the moon for mc Donalds and Milkshake' , completed : true}).exec((err) => {
        if (err) throw err;
        console.log('Task updated!');
    }) 


} catch (error) {
    console.log(error.message)
} finally {
   /*  mongoose.disconnect();
    console.log('Database disconnected') */
} 