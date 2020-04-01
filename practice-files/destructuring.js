//example 1
const stuff = { a:1, b:2, c:3};
const {a:d,b,c} = stuff;
console.log(b,c,d)//2,3,1

//example 2
const array = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const {a,b,c} = array[0];
console.log(a,b,c);//1,2,3;

//example 3
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return ({a,b,c});
})
console.log(objects)