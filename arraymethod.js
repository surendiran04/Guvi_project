const arr=[1,2,3,4]
//alters the original array
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.push(8,9,0)
console.log(arr)
arr.unshift(1)
console.log(arr)

//sorting
var strngarr=["a","b","e","c"]
var numarr=[4,2,7,6,1]
strngarr.sort()
numarr.sort()
numarr1=numarr.reverse()
strngarr1=strngarr.reverse()
console.log(strngarr,numarr)

//returns a new array
var arr1=["a","b"]
var newarr1=arr1.concat("c")
console.log(newarr1)
var newarr2=arr.join(",")
console.log(newarr2)
function access(){
    return true;
}
const token=access();
console.log(token)

//template literals
const name="sanjay"
const age=15
console.log("my name is "+name+" and I'm "+age+" years old")
console.log(`my name is ${name} and I'm ${age} years old`)

const samplearr=[1,2,3,4,5,6]
samplearr.forEach((ele,index,accarr)=>{
    console.log(
        `Element:${ele}
         Index:${index}
         actualarr:${accarr}`
    );
});

