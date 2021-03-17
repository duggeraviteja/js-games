import React, { useState } from 'react';
import dice1 from "./images/dice1.png";
import dice2 from "./images/dice2.png";
import dice3 from "./images/dice3.png";
import dice4 from "./images/dice4.png";
import dice5 from "./images/dice5.png";
import dice6 from "./images/dice6.png";
import Swal from 'sweetalert2';

 const Ludo=() =>{

    const [name,setName]=useState("");
    const [name2,setName2]=useState("ply2");
    const [d1,setd1]=useState(dice1);
    const [d2,setd2]=useState(dice1);
    const [pla,setpla]=useState("");


    const handle =(event) =>{
        const name=event.target.value;
        setName(name);
    }
    const handle2 =(event) =>{
        const name2=event.target.value;
        setName2(name2);
    }
    const game =()=>{

     if(name && name!==name2){

const array=[dice1,dice2,dice3, dice4,dice5,dice6];

const p1=Math.floor(Math.random()*array.length);
const p2=Math.floor(Math.random()*array.length);
const d1 = array[p1];
setd1(d1);

const d2 = array[p2]
setd2(d2);
const win ="Wins";

if(p1 > p2){
setpla(name+" "+win); 
} else if(d1===d2){
    setpla("draw");
} else{ 
    setpla(name2+ " "+win);
}
    } else{
       
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your  Unique Name to start the game',
      
        })
    }
    }

    return (
        <> 
        
<div className="ludo-main m-auto p-auto">   
<div className=" col-md-10 col-12 mx-auto text-center m-auto">
<h1 className="title"> Lets start the Game  </h1>
<h2 className="winner">   {pla} </h2> 


<div className="container-fluid d-flex m-auto p-5 cnt text-center">
<div className=" m-auto p-1">   
 <input  onChange={handle} className="form-control m-3 ms-0"  type="text" name="name"  placeholder="Enter ply1 Name" value={name}/> 
<img className="one" src={d1} alt=" dice"/>
</div> 
<div className="m-auto p-1">   
 <input type="text" onChange={handle2} className="form-control m-3 ms-0" name="name"  placeholder="Enter ply2 Name" value={name2} />
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




 export default Ludo;