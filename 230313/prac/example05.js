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


let {carName,carPh}=car;
console.log(carName,carPh);

let url="https://naver.com";
console.log(url);
console.log(url + "/news");
console.log(url + "/news" + "/test");
let name="이혜원"
console.log(`안녕하세요 ${name}님 ${url} 반갑습니다.`)