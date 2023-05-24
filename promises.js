//this all the code is asycronus in nature.
let ticket =new Promise(function(resolve,reject){
    let isboorde=true;
    console.log("great Web")
    setTimeout(()=>{    
        if(isboorde){
            resolve("Yes this is ossaom ");
        }
        else{
            reject("Not this is failed");
        }
    },2000)
});
ticket.then((data)=>{
    console.log("wahoo is great ",data);
}).catch(()=>{
    console.log("Not ",data);
})

//this the ascronus .

// let tiket=new Promise(function(resove,reject){
//     let isboorde=true;
//     console.log("That Wep page is the ankur page ");
//     setTimeout(()=>{
//         if(isboorde){
//             resove("Yes Ankur your are great");
//         }
//         else{
//             reject("Not a great");
//         }
//     },2000)
// })
// ticket.then((data)=>{
//     console.log("wahoo is great ",data);
// }).catch(()=>{
//     console.log("Not ",data);
// })
