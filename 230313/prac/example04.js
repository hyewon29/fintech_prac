let array=[1,2,3,"test","test2",1,2,3,4,6];  //데이터를 담을 공간을 배열로서 만듦
//java private String [] nameList = new String[5]  //
console.log(array);
console.log(array[0]);
console.log(array[2]); 
console.log(array.lenghth);
 // 반복적인 작업e다수
 for( i=0;i<array.length;i++){
    console.log(array[i])
 }
 console.log("----------of--------")
 for (el of array){
    console.log(el);
 }
console.log("-----------map-------")


array.map((a)=>{
    console.log(a);
});
