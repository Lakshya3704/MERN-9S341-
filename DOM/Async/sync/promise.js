// const promise = new Promise((resolve, rejected)=>{
//     let success = true;
//     setTimeout(()=>{
//         if(success){
//             resolve('Sucess');
//         }else{
//             rejected('Rejected');
//         }
//     },1000);
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finished!!");
// })

function login(){
    console.log("1 .Login....");
    setTimeout(()=>{
        console.log("2. Loged in successfully");
    },5000);
}

function getUser(){
    console.log("3 .getting users details");
    setTimeout(()=>{
        console.log("4. User details...");
    },2000);
}

function getOrder(){
    console.log("5. Getting order ...");
    setTimeout(()=>{
        console.log("6. Order... ");
    },1000);
}

function getOrderDetails(){
    console.log("7. Getting order details.....");
    setTimeout(()=>{
        console.log("8. Order details ...");
    },3000);
}

