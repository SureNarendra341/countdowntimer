
const counterformAera=document.querySelector('.form-area');
const counterform=document.getElementById('counter-form');
const counterE1=document.getElementById('counter');

const counterTitleE1=document.getElementById('counter-title');
const timeElements=document.querySelectorAll('span');
const counterResetbtn=document.getElementById('counter-reset');

const complete=document.getElementById('complete');
const  completeinfo=document.getElementById('complete-info');
const completbtn=document.getElementById('complete-button');

const datepicker=document.getElementById('counter-date')

let  countdownvalue=Date;
let countdownActive;

const second=1000;
const minute=second*60;
const hour=minute*60;
const day =hour*24;

let title='';
let date='';

let today=new Date().toISOString().split('T')[0];
console.log(today);

datepicker.setAttribute('min',today);





function updateDom(){
    countdownActive=setInterval(()=>{
        let now=new Date().getTime();
    let distance=countdownvalue-now;
    // console.log(distance);
    const days=Math.floor(distance/day);
    const hours=Math.floor(distance%day/hour);
    const minutes=Math.floor(distance%hour/minute);
    const seconds=Math.floor(distance%minute/second);

    if(distance<0){
        counterE1.hidden=true;
        counterformAera.hidden=true;
        complete.hidden=false;
        clearInterval(countdownActive);
        completeinfo.textContent=`${title} is finished on ${date}`;
    }else{
        timeElements[0].textContent=days;
        timeElements[1].textContent=hours;
        timeElements[2].textContent=minutes;
        timeElements[3].textContent=seconds;
        counterTitleE1.textContent=title;
        counterformAera.hidden=false;
        counterE1.hidden=false;
    }
  },1000);
 }

     function updatecountdown(e){
       e. preventDefault();
       title= e.srcElement[0].value;
       date=e.srcElement[1].value

      const savedCountdown={
        title:title,
        date:date,
      };
      localStorage.setItem('countdown',JSON.stringify(savedCountdown));



        console.log(title,date);
     if(date===""){
        alert("please enter a date")
     }else{
        countdownvalue=new Date(date).getTime();
        console.log(countdownvalue);
        updateDom();
        
     }
    }

function reset(){
    counterE1.hidden=true;
    complete.hidden=true;
    clearInterval(countdownActive);
    title='';
    date='';
    counterformAera.hidden=false;
}



   counterform.addEventListener('submit',updatecountdown);
   counterResetbtn.addEventListener('click',reset)
   completbtn,addEventListener('click',reset)