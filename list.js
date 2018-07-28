
function listAjax() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
        console.log("do")
  
        console.log(this.responseText);
    });    
   oReq.open("GET", "unithon-env.xv7gsd9iec.us-east-2.elasticbeanstalk.com/api/list");//parameter를 붙여서 보낼수있음. 
   oReq.send();
}
