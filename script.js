
let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

  // TASK1: "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

  // let arrupdate=arr.filter((item)=>item.name.toLowerCase().startsWith("t"))

  // console.log(arrupdate)






// TASK2:   "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// console.log(arr.filter((item)=>item.name.toLowerCase()[0] == "t" && item.name[item.name.toLowerCase().length-1] == "t"))






// TASK3:   "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let cemi=0;

// arr.forEach((item)=>{if(
//     item.name.startsWith("t")  && item.name.endsWith("t") 
// )
// cemi+=item.key

// })
// console.log(cemi)






// TASK4 :  "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.


// arr.forEach((item)=>{
//   if (item.name.toLowerCase().endsWith("e")) {
  
//     item.name=("superdev")
    
//   }
// })
// console.log(arr)






// TASK5:   "name"-i en uzun olan obyekti tapin

// let maximum = arr [0]

// arr.forEach((item)=>{if (item.name.length>maximum.name.length) {maximum=item
    
// }})
// console.log(maximum)







// TASK6:  "name"-i en uzun olan obyektin key'ni tapin
// let maximum =arr[0]

// arr.forEach((item)=>{if (item.name.length>maximum.name.length) {maximum=item
    
// }})
// console.log(maximum.key)











// TASK8: "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)


// let result =arr.filter((item)=>item.name.length===4)

// console.log(result)










// TASK10 KEYlerin cemini tapin

// let sum= 0;

// arr.forEach((item)=>{ if (item.key>0) 
// {console.log(sum =sum +item.key)
  
// }})


// console.log(arr.reduce((sum,item)=> sum+item.key ,0))









// TASK11 //  terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// console.log(arr.filter((item)=>item.name.toLowerCase().indexOf("t")!== 
// item.name.toLowerCase().lastIndexOf("t")))





// TASK12 key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// let filtered = arr.filter((item)=>item.name.toLowerCase().startsWith("l")
// && item.key>10)
// console.log(filtered)















