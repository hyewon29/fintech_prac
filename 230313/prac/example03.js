let car={
    carName : "sonata",
    carPh : 130,
    start : function(){
        console.log("engine start");
    },
    stop: ()=>{
        console.log("engine stop");
    }
};

//객체도 기능이라 보기때문에 
console.log(car.carName);
console.log(car.carPh);
console.log(car.start);
car.start();
car.stop();