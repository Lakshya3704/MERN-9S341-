// function scope(){
//     if(true){
//         // let num = 10;
//         // const num = 20;
//         var num = 20;
//         // console.log(num);
//     }
//     // console.log(num);
// }
// console.log(num);
// scope();

// console.log(num1);  //refrence Erorr cannot called before intsalized 
// console.log(num3); //refrence Erorr cannot called before intsalized 
// console.log(num2); // undefine
// let num1 = 10;
// const num2 = 20;
// var num3 = 30;

// clousers: When the inner function rememeber the variable of outer function even after the outer function finished.
// function outer(){
//     let count =0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const couinter = outer();
// couinter();
// couinter();


function createBankAccount(initialBalance){
    let balance = initialBalance;
    return{
        deposit(amount){
            balance+=amount;
            console.log(`INR ${amount} deposited succesfully`);
        },
        withdraw(amount){
            if(balance < amount){
                console.log("Insufficent balance!!");
                return;
            }
            balance-=amount;
            console.log(`INR ${amount} debited successfully`);
        },
        getBalance(){
            console.log(balance);
        }
    }
}
const account = createBankAccount(100);
account.deposit(100);
account.withdraw(30);
account.getBalance();
account.withdraw(200);