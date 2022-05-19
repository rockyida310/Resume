we can set our project using native mongodb but instead we will use mongoose

difference between put and batch
put - replacing the existing resource (just put the passed item and remove others)
bacth - partial update (only passed property will be updated not all)

instead of using try catch everywhere we can use a middleware function

const getAllTasks = asyncWrapper( async (req,res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks});  
        //using ES6 shorthands if var name is same as property name then just write any one
        // tasks : tasks   ===> tasks

        // res.status(200).json({tasks , amount: tasks.length});
        // res
        // .status(200)
        // .json({status: 'success', data: {tasks, nbHits: tasks.length}});
});


2:53:22