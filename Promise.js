// let promise = new Promise(function (resolve, reject) {
// 	const x = "geeksforgeeks";
// 	const y = "geeksforgeeks"
// 	if (x === y) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// promise.
// 	then(function () {
// 		console.log('Success, You are a GEEK');
// 	}).
// 	catch(function () {
// 		console.log('Some error has occurred');
// 	});

// let myPromise = new Promise(function(myResolve, myReject){
//     setTimeout(function(){
//         myResolve("hello I am Kinjal");}, 3000);

//     });

//     myPromise.then(function (myResolve) {
//         console.log("is present");
//     }).catch(function () {
//         console.log("is not present");
//     });

    let myPromise = new Promise((resolve , reject)=>{
        let x = 0;
        setTimeout(()=>{
            (x !== 0)? reject("y"): resolve("x");
        },3000);
    });

    myPromise.then((x)=>{
        console.log("promise resolved successfully",x);
    }).catch((y)=>{
        console.log("promise is rejected",y);
    });
