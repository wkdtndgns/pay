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

let payday = 23; // 월급날 
let pay = 100;  //월급

let startTime = 9;  // 근무 시작시간
let workTime = 9;   //근무 시간 

//시연할떄 필요할 거 같아서 

let adminDate = 25; // 날짜 지정
let adminHours = 0;    // 시간 지정  

if(payday>31 || payday<0 ){
    console.log("다시 입력");
}

else{

    var dt = new Date();

    if(adminDate!==0 ){
        dt.setDate(adminDate);        
    }
    if(adminHours!==0){
        dt.setHours(adminHours);
    }

    let date = dt.getDate();
    let nowMonth = dt.getMonth()+1;
    let month = month2018[nowMonth]; 


    var preMonth = new Date();
    preMonth.setDate(payday);
    preMonth.setMonth(dt.getMonth()-1);

    // // test
    // dt.setHours(10);
    // dt.setDate(2);

    let monthCount =0;
    var test =preMonth;

    // for(var i=0; i<31; i++){
    //     test.setDate(test.getDate()+1)

    //     if(test.getDay()!==6 && test.getDay()!==0){
    //         monthCount++;
    //     }
      
    // }

    monthCount=30;

    console.log(monthCount);

    var preMonth = new Date();
    preMonth.setDate(payday);
    preMonth.setMonth(dt.getMonth()-1);
    var test =preMonth;
    let workCount = 0;



    let second = ((((pay/30)/24)/60)/60)*dt.getSeconds()-(((pay/30)/60)/60);
    let minute = (((pay/30)/24)/60)*dt.getMinutes()-((pay/30)/60);

    let monthGaze=0;



    if(payday>dt.getDate()){
        
        while(true){
            test.setDate(test.getDate()+1)

            // if(test.getDay()!==6 && test.getDay()!==0){
            //     workCount++;
            // }

            workCount++;

            if(test.getDate()===dt.getDate() && test.getMonth()===dt.getMonth()){
                break;
            }
        }

        monthGaze = (pay/monthCount)*workCount +minute+second;
    }

    else if(payday===dt.getDate()){
        monthGaze = pay +minute+second;
    }

    else{

        var test = new Date(); 
        test.setDate(payday);

        // console.log(payday + " " + test.getDate());
        
        for(var i=payday; i<dt.getDate(); i++){
            test.setDate(test.getDate()+1)   

            // if(test.getDay()!==6 && test.getDay()!==0){
            //     workCount++;
            // }

            workCount++;
            
        }

        monthGaze = (pay/monthCount)*workCount +minute+second;

    }

    console.log(dt);
    console.log(workCount);



        let todayGaze = 0;

        // if(dt.getDay()!==6 && dt.getDay()!==0){      // 오늘이 평일이라면 지금까지 번 돈이 todayGaze랑 같이 올라가도록 하루치를 뺴고 todayGaze 플러스 

            if(startTime<dt.getHours() && dt.getHours()<(startTime+workTime)){   //지금 시간이 오전 9 to 6 사이일떄
                todayGaze = ((pay/month[1])/9)*(dt.getHours()-9)+minute+second;    
            }
        
            else if((startTime+workTime)<=dt.getHours() && dt.getHours()<24){      // 6시 부터 12시까지
                todayGaze=pay/month[1];
            }

            monthGaze = monthGaze-(pay/month[1])+todayGaze;
        // }

        if(monthGaze>pay){
            monthGaze=pay;
        }

        console.log("오늘 번 돈 " + todayGaze + " 만원");
        console.log("지금까지 번 돈  " + monthGaze +" 만원");


    }



