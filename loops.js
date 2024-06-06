console.log('-------------- For Loop -----------------')
let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]+10)
}

console.log('-------------- While Loop -----------------')
let i = 0
while(i<=10){
    console.log(i)
    i++
}
console.log('-------------- Do/While Loops -----------------')
let attemptedUploads = 0
do{
    console.log("Attempting upload...")
    attemptedUploads++
}while(attemptedUploads < 5)
console.log("Upload attempts exceeded maximum")

console.log('-------------- Break/continue -----------------')
for(let i = 0;i<=20;i++){
    if(i%2 !== 0){
        continue;
    }
    if(i === 10){
        break;
    }
    console.log(i)

}

console.log('-------------- Nested Iteration  -----------------')
for(let x = 0 ; x <4; x++){
    for(y = 200; y < 204;y++){
        console.log('Outer loop x:', x,'Inner loop y:', y)
    }
}
