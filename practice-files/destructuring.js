//example 1
const stuff = { a:1, b:2, c:3};
const {a:d,b,c} = stuff;
console.log(b,c,d)//2,3,1

//example 2
const array = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const {a,b,c} = array[1];
console.log(a,b,c);//4,5,6;

//example 3
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return ({a,b,c});
})
console.log(objects)// [{1,2,3},{4,5,6}]

//example 4
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return (a,b,c);
})
console.log(objects)//[3,5] why is it only returning c

//example 5
const arrayWithObjects = [
    {a:1,b:2,c:3},
    {a:3,b:4,c:5},
]
const objects = arrayWithObjects.map((object)=>{
   const{a,b,c} = object;
   return (object);
})
console.log(objects) //[{1,2,3},{4,5,6}], this is the case, because you are ignoring the assigning to const a, b & c and returning the actually object parameter from each iteration
