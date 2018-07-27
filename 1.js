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


var dt = new Date();

let date = dt.getDate();
let nowMonth = dt.getMonth()+1;

let month = month2018[nowMonth];  //  


var count=0;

for(var i =1; i<=(month[0]-date); i++){
    var dt1 = new Date();
    dt1.setDate(dt.getDate()+i);

    if(dt1.getDay()!==6 && dt1.getDay()!==0){
        count++;
    }
}



let gaze = (month[1]-count)/month[1];


console.log("게이지 " +gaze );



