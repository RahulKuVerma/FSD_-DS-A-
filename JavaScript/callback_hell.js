function test1(cb) { 
    setTimeout(() => {
        console.log("Test 1 completed");
        cb();
    }, 1000);   
}
function test2(cb) {
    setTimeout(() => {
        console.log("Test 2 completed");
        cb();
    }, 2000);
}   


function test3(cb) {
    setTimeout(() => {
        console.log("Test 3 completed");
        cb();
    }, 1500);
}
function test4() {
    setTimeout(() => {
        console.log("Test 4 completed");
    }, 1000);

}

test1(() => {
    test2(() => {
        test3(() => {   
            test4();    
        });        
   });  
    });

    /*
Callback

A callback is a function passed as an argument to another function and executed later,
 often after an asynchronous operation completes.

Promise

A Promise is an object representing the eventual completion or failure of an asynchronous operation and
 its resulting value.

Async/Await

Async/await is syntactic sugar built on top of Promises that allows asynchronous code to be written 
in a more synchronous and readable style.
*/
