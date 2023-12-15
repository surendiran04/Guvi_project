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

const miscarr = [1,2,3,"dbs",true]
const slicearr = miscarr.slice(1,4); //slice the array from start index to before the end index
console.log(slicearr,miscarr) //does not affect the original array

//we can delete from a index and replace
const splicearr = miscarr.splice(1,3,"ram","hari") //array.splice(startindex,count, newelements...)
 console.log(splicearr,miscarr) //two elements are deleted from the original array
 miscarr.splice(2,0,"sanjay") //here i'm just adding the element after the index (so,it doesn't return anything)
 console.log(miscarr)

 const indexed = splicearr.findIndex((n)=> n == 'dbs')
 console.log(indexed)

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

//foreach loop(no need to specify the length of the array)   parameter1=element parameter2=index(optional) parameter3=arr(optional)
const samplearr=[1,2,3,4,5,6]
samplearr.forEach((ele,index,accarr)=>{   //does not return a new array,incase we try to return it returns undefined(we can only read and print the array)
console.log(                              //it calls a fn for each element
        `Element:${ele}
         Index:${index}
         actualarr:${accarr}`
    );
});

//examples of foreach loop
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item, index, arr) {
     arr[index] = item * 10;
  }
  console.log(numbers)

  let sum = 0;
  numbers.forEach(myFunction1);
  function myFunction1(item) {
    sum += item;
  }
  console.log(sum)

  //map  A function to be run for each array element.
  numbers1=[2,4,6,8,10]
  const maparray = numbers1.map((ele,index,arr) => {
    return ele;  //unlike foreach loop it returns a array
  }).reverse();  //build-in fn can be used
  console.log(maparray)

  //example of map
 const numbers2=[4,9,64]
  const root=numbers2.map(Math.sqrt);
  console.log(root)

  //filter returns a new array based on conditions
  const filteredarray=numbers2.filter((ele)=>{
    return ele!=4;
  }
  ).reverse(); //work same as map fn
  console.log(numbers2,filteredarray)

  //reduce method returns a single value after every callback
  const sum1=numbers2.reduce((sum,ele,index,arr)=>{ //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    return sum+ele;
  },3)
  console.log(sum1)

  //chaining methodlogies
  const classmark=[
    {
    name:"sarvesh",
    mark:60
  },
  {
    name:"sanjay",
    mark:90
  },
  {
    name:"Adi",
    mark:40
  },
  {
    name:"kumar",
    mark:45
  },
]
//chaining of MRF fn
const passedstudents = classmark
.map((ele)=>{
    console.log("after mapping",ele)
return ele;
})
.filter((ele)=>
{
  return ele.mark >= 50;
})
.reduce((acc,ele,i)=>
{
    return acc + i;
},1)
console.log(passedstudents)


var totalmarks = classmark.reduce((totalmarks,ele,i)=>
{return totalmarks+ele.mark;
},0)
console.log(totalmarks)