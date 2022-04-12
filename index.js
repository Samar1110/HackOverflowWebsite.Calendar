function display_ct5() {
    var x = new Date()
    let currentMonth=x.getMonth() + 1 ;
    
    let date=x.getDate() +"/" + currentMonth + "/" + x.getFullYear(); 
    let x1 = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();

    let currentDay=x.getDay();
    let day="";
    switch(currentDay){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
        default:
            console.log("Sorry No this day does not exist");
    }
    document.querySelector("#day").innerHTML = day;
    document.querySelector("#date").innerHTML = date;
    document.querySelector("#time").innerHTML = x1;
    display_c5();
     }
     function display_c5(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct5()',refresh)
    }
    display_c5()