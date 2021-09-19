function myTime(){
    const myDate = new Date();
    let hr, min = (myDate.getMinutes() < 10) ? '0' + myDate.getMinutes() : myDate.getMinutes();
    const sec = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds();
    const minutes = (myDate.getHours() >= 12) ? 'PM' : 'AM';

    if(myDate.getHours() == 0){
        hr = 12;
    }
    else if(myDate.getHours() > 12){
        hr = myDate.getHours() - 12;
    }
    else{
        hr = myDate.getHours();
    }

    const currentTime = hr + ':' + min + ':' + sec + ':';

    document.getElementsByClassName('hour')[0].innerHTML = currentTime;
    document.getElementsByClassName('minute')[0].innerHTML = minutes;

    const myDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

    myMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

     day = myDate.getDate();

    const currentDate = myDay[myDate.getDay()] + ',' + myMonth[myDate.getMonth()] + day;
    document.getElementsByClassName('date')[0].innerHTML = currentDate;
}
myTime();

setInterval(() => {
    myTime();
}, 1000);