import React, { useState } from "react";
import Swal from 'sweetalert2';


const FindAge =()=>{


    const [uage,setUage] =useState();

    
    const [years,setYear] =useState();
    const [months,setMonth] =useState();
    const [days,setDays] =useState();

    const [hours,setHours] =useState();
    const [seconds,setSeconds] =useState();


    // const [y,sety] =useState();
    // const [m,setm] = useState();
    // const [s,sets] =useState();
    // const [d,setd] = useState();
    // const [h,seth] =useState();



    const handle=(e) =>{
       var uage=e.target.value;
setUage(uage);

    }



    const validate=() =>{

     var dob = new Date(uage);
     var month_diff = Date.now() - dob.getTime();
     var age_dt = new Date(month_diff); 

    // var years = dob.getFullYear();
    // console.log("year " +years);

    // var months = dob.getMonth()+1;
    // console.log("month "+months);

    // var date = dob.getDate();
    // console.log("date "+date);

    // var minutes = dob.getMinutes();
    // console.log("min "+minutes);

    // var minutes = dob.getMinutes();




    // console.log("year : "+dobYear);
    // console.log("month : "+dobMonth);

    // console.log("date : " + dobDate);
     //extract year from date    
    var year = age_dt.getUTCFullYear();
     
     //now calculate the age of the user






    var DOB = uage;

var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
var millisecondsBetweenNowAnd1970 = Date.now();
var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;


  var milliseconds = ageInMilliseconds;
  var second = 1000;
  var minute = second*60;
  var hour = minute*60;
  var day = hour*24;
  // var month = day*30; 
/*using 30 as base as months can have 28, 29, 30 or 31 days depending a month in a year it itself is a different piece of comuptation*/ year = day*365;

//let the age conversion begin
var years = Math.round(milliseconds/year);
var months = years*12;
var days = years*365;
var hours = Math.round(milliseconds/hour);
var seconds = days *86400;

  setHours(hours);
  setMonth(months);
  setYear(years);
  setDays(days);
  setSeconds(seconds);

  



Swal.fire({
  
   icon: 'success',

   iconHtml:'💙',
  iconColor :'#55E6C1',
  confirmButtonColor:'#33d9b2',

  confirmButtonAriaLabel:true,
  allowOutsideClick:'true',

  padding: '3em',
  font :'2rem',
  footer: 'Designed by Ravi',


  confirmButtonText: 'Ok Cool',
   
  


   html :
  `
  Years : ${years} 
  <br/>
  Months :  ${months}  <br/>
  Days  : ${days} <br/>
  Hours : ${hours} <br/>
  Seconds : ${seconds} <br/>

     `,

});


     }
 
    



    return (
        <>



<div className="col-md-6 col-12 mx-auto  ">
<div className="m-3 p-3 age-home ">

  <h1 className="p-2 m-2">Enter/Select Your BIRTH DATE</h1>

<input  onChange={handle} className="form-control m-2 p-2"  type="date" name="name"  placeholder="Enter Your Name" autoFocus required/> 
<button className="btn btn-contact mt-4 mb-4" type="submit"   onClick={validate} > Calculate </button> 


{/* <h1 className="show"> {y} {years} <br/>  {m} {months}  <br/> {d} {days}   <br/> {h} { hours}  <br/> {s} {seconds} </h1> */}

</div>
</div>
        </>
    );
}

export default FindAge;