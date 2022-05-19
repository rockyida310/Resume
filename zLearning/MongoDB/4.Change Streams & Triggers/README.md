```
we can use change streams and triggers to react immediately to the changes in databases

change streams :- change streams allow you to recieve notification about changes made to mongodb
                    databases and collections 

changeStream inherits from node built in eventEmitter class so as a result we can use its on method

another way to work with changeStreams is using while loops

third way using node.js stream API

we can use changeStream resume token to encounter any failures
        ---> refer official documentation for this

we can use trigger in atlas web ui
```