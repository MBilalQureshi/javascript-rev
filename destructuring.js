console.log('-------------- This does not use destructuring  -----------------')
let ages = [12,23,45]
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log('No destructring',john, mary, joe)

console.log('-------------- Destructuring arrays in ES6  -----------------')
let [john1, mary1, joe1] = ages; //Destructuring
console.log('destructring array',john, mary, joe)


console.log('-------------- Destructuring objects in ES6  -----------------')
let jobs = {
    mike: 'dev',
    alicai: 'painter',
    bob: 'carpenter'
}
let {mike, alicai, bob} = jobs; //Destructuring
console.log('Destructuring objects',mike, alicai, bob)


console.log('-------------- Destructuring subsets in ES6  -----------------')
console.log('Arrays first')
let languages = ['eng','urdu','german','french']
let [johnNative, AliNative] = languages; // LAST TWO ARE SKIPPED
console.log('Skipped last two=>',johnNative, AliNative)

// WHAT IF TO SKIP FIRST TWO USE , ,
let [, , maryNative, joeNative] = languages
console.log('Skipped first two=>',maryNative, joeNative)


console.log('Now objects')
let languages2 = {
    fiestLanguage: 'eng',
    secondLanguage: 'urdu',
    thirdLanguage: 'farsi',
    forthLangueage: 'German'
}
let {fiestLanguage, thirdLanguage} = languages2
console.log(fiestLanguage, thirdLanguage)

console.log('-------------- using rest parameter syntax  -----------------')
console.log('Arrays first')
let fruits = ['apple','banana', 'kiwi', 'peach','berries','watermelon']
let [favorite, secondFav, thirdFav, ...others] = fruits
console.log(favorite)
console.log(secondFav)
console.log(thirdFav)
console.log(others) // An array will be returned


console.log('Now objects')
let languages3 = {
    fiestLanguage1: 'eng',
    secondLanguage1: 'urdu',
    thirdLanguage1: 'farsi',
    forthLangueage1: 'German'
}
let {fiestLanguage1, secondLanguage1, ...restLanguages} = languages3
console.log(fiestLanguage1)
console.log(secondLanguage1)
console.log(restLanguages) // objects will be returned