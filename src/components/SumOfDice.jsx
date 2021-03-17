import React, { useState } from 'react';
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";
import Swal from 'sweetalert2';

const SumOfDice=() =>{

    const [name,setName]=useState("");
    const [num,setNum]=useState();
    const [d1,setd1]=useState(dice1);
    const [d2,setd2]=useState(dice1);
    const [pla,setpla]=useState("");
    var [sum,setsum]=useState();



    const handle =(event) =>{
        const name=event.target.value;
        setName(name);
    }

    const handle2 =(event) =>{
         const num=event.target.value;
        setNum(num);
    }
   
    const game =()=>{

     if(name){

const array=[dice1,dice2,dice3, dice4,dice5,dice6];

const p1=Math.floor(Math.random()*array.length);
const p2=Math.floor(Math.random()*array.length);

const d1 = array[p1];
setd1(d1);

const d2 = array[p2]
setd2(d2);

const win ="Wins";
const lost="Lost";

sum=p1+1+p2+1;
  





setsum(sum);

setNum(Math.floor(num));


if(num === sum){
setpla(name+" "+win);
} else if(num > 12 || num===0){
    Swal.fire({
        icon: 'info',
        title: num,
       input:name,
        text: 'Please enter your Number from 1 to 12 ',
        confirmButtonText: 'Ok Cool',
       
    })
}

else {
    setpla(name+" "+lost);
}
    } else{
       
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your Name and Number from1 to 12 ',
          confirmButtonText: 'Ok Cool'


        })
    }
   
    }

    return (
        <> 
        
<div className="ludo-main m-auto p-auto">   
<div className=" col-md-10 col-12 mx-auto text-center m-auto">


<h1 className="sumofdice-heading">Sum Of Two Dice </h1>
<h3>Enter A Number from 1 t 12 </h3>
<div className="col-md-6 col-10 mx-auto d-flex"> 
<input  onChange={handle} className="form-control m-2"  type="text" name="name"  placeholder="Enter Your Name" value={name}/> 
<input  onChange={handle2} className="form-control m-2"  type="number" name="name"  placeholder="Enter A Number" /> 

</div>
<h2 className="winner">   {pla} </h2>    

<div className="container-fluid d-flex m-auto p-5  text-center">
<div className=" m-auto p-1">   
<img className="one" src={d1} alt=" dice"/>
</div> 
<div className="m-auto p-1">   

<img className="two" src={d2} alt=" dice"/>
</div>
</div>

<div className="m-auto d2"> 
<button className="btn btn-primary mt-4" type="submit"   onClick={game} > StartGame </button> 
 </div>
</div>
</div>
        </>
    );
 }


export default SumOfDice;