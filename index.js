const dateE1=document.getElementById("date");
const monthE1=document.getElementById("month-name");
const weekdayE1=document.getElementById("week-day");
const yearE1=document.getElementById("year");
const date=new Date();
const month=date.getMonth();
monthE1.innerText=date.toLocaleString("en",{
    month:"long"
});
weekdayE1.innerText=date.toLocaleString("en",{
    weekday:"long"
})
dateE1.innerText=date.getDate();
yearE1.innerText=date.getFullYear();
