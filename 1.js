let month1 = [31 , 22]; 
let month2 = [31 , 22];
let month3 = [31 , 22]; 
let month4 = [31 , 22]; 
let month5 = [31 , 22];
let month6 = [31 , 22];
let month7 = [31 , 22]; 
let month8 = [31 , 22];
let month9 = [30 , 17]; 
let month10 = [31 , 22]; 
let month11 = [30 , 22];
let month12 = [31 , 20];

let month2018 = [month1 , month2 , month3 , month4, month5, month6, month7, month8, month9, month10, month11, month12]; 

let payday = 30; // 월급날 
let pay = 200;  //월급

var dt = new Date();

//test
// dt.setHours(19);
// dt.setDate(31);

let date = dt.getDate();
let nowMonth = dt.getMonth()+1;

let month = month2018[nowMonth];  



var count=0;        // 남은 평일 카운트

for(var i =1; i<=(month[0]-date); i++){     //남은날 중 평일의 개수를 계산   
    var dt1 = new Date();
    dt1.setDate(dt.getDate()+i);

    if(dt1.getDay()!==6 && dt1.getDay()!==0){
        count++;
    }
}


let todayGaze = 0;

if(9<dt.getHours() && dt.getHours()<18){   //지금 시간이 오전 9 to 6 사이일떄
    todayGaze = ((pay/month[1])/9)*(dt.getHours()-9)+(((pay/30)/60)/60)*dt.getSeconds();       
}

else if(18<=dt.getHours() && dt.getHours()<24){      // 6시 부터 12시까지
    todayGaze=pay/month[1];
}

let monthGaze = pay*((month[1]-count)/month[1]) +(((pay/30)/60)/60)*dt.getSeconds();       
 // (이번달 평일 - 남은 평일수) /  이번달 평일 수    

 if(dt.getDay()!==6 && dt.getDay()!==0){      // 오늘이 평일이라면 지금까지 번 돈이 todayGaze랑 같이 올라가도록 하루치를 뺴고 todayGaze 플러스 
    monthGaze = monthGaze-(pay/month[1])+todayGaze;
}

if(monthGaze>pay){
    monthGaze=pay;
}

console.log("오늘 번 돈 " + todayGaze + " 만원");
console.log("지금까지 번 돈  " + monthGaze +" 만원");



