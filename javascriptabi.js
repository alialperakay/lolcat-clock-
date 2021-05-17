var wakeup=9;
var lunch=14;
var nap=15;
var noon=00;
var afternoon=12;



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  var updateClock=function(){
    var lolcatImage=document.getElementById('lolCat');
    var image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    var message= document.getElementById('timeEvent');
  
    if(startTime==wakeup){
      image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText="IZ TIME TO GETUPP";
    }

    else if(startTime=nap){
      image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText="I NEED SOME SLEEP";
    }
    else if(startTime==lunch){
      image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
      messageText="LETZ EAT";
    }
    message.innerText=messageText;




  }