// function one(){
//     console.log("this is one");
// }
// function tow(fn){
//     fn();
//     console.log("THis is tow");
// }

// tow(one);

// 1 3 5 7 6 4 8 2

// function login(){
//     console.log("1 .Login....");
//     setTimeout(()=>{
//         console.log("2. Loged in successfully");
//     },5000);
// }

// function getUser(){
//     console.log("3 .getting users details");
//     setTimeout(()=>{
//         console.log("4. User details...");
//     },2000);
// }

// function getOrder(){
//     console.log("5. Getting order ...");
//     setTimeout(()=>{
//         console.log("6. Order... ");
//     },1000);
// }

// function getOrderDetails(){
//     console.log("7. Getting order details.....");
//     setTimeout(()=>{
//         console.log("8. Order details ...");
//     },3000);
// }

// login();
// getUser();
// getOrder();
// getOrderDetails();


// Above are not getting printed in sequnetial order to make them sequential we will pass a callback function in every function
function login(callback){
    console.log("1 .Login....");
    setTimeout(()=>{
        console.log("2. Loged in successfully");
        callback();
    },5000);
}

function getUser(callback){
    console.log("3 .getting users details");
    setTimeout(()=>{
        console.log("4. User details...");
        callback();
    },2000);
}

function getOrder(callback){
    console.log("5. Getting order ...");
    setTimeout(()=>{
        console.log("6. Order... ");
        callback();
    },1000);
}

function getOrderDetails(){
    console.log("7. Getting order details.....");
    setTimeout(()=>{
        console.log("8. Order details ...");
    },3000);
}

login(()=>{
    getUser(()=>{
        getOrder(()=>{
            getOrderDetails();    //it will print in 1 2 3 4 5 6 7 8 order  this is called callback hell

        });
    });
});


