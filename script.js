function calculator(){
    var birthday=parseInt(document.getElementById('Birthday').value);
    var birthmonth=parseInt(document.getElementById('Birthmonth').value);
    var Birthyear=parseInt(document.getElementById('Birthyear').value);

    var currentDate=new Date();

    var day=currentDate.getDate()-birthday;
    var month=currentDate.getMonth()+1-birthmonth;
    var year=currentDate.getFullYear()-Birthyear;
    if(day < 0){
        month--;
        day += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    
    }
    if(month < 0){
        year --;
        month+=12;
    }
    document.getElementById('result').innerHTML="your Age is "+year+" years "+ month + " months and "+day+" days";
}