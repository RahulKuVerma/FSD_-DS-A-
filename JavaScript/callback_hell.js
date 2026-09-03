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
function test4(cb) {
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
