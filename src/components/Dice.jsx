import React from "react";
import {NavLink } from "react-router-dom";




const Dice =()=>{
    return(
        <>
            
<div className="container-fluid home-main ">
  <div className="row">
    <div className="col-10 mx-auto">
        <div className="row gy-4 mb-5 mt-2 sc2">

            <div className="col-md-4 col-10 mx-auto home-card">
            <div className="card vit-card">
  <div className="card-body">
    <h1>  <b className="title">Dice Game</b> </h1>
      <p className="card-text">Guess the Dice Number</p> 
      {/* <div className="go-arrow">
        →
      </div> */}
    <NavLink  exact to="/ludo" className="btn btn-start m-2">StartGame</NavLink>
   
  </div>
</div>
 </div>

 <div className="col-md-4 col-10 mx-auto  home-card">
            <div className="card vit-card">
  <div className="card-body">
  <h1> <b className="title">SevenUpDown</b></h1>
    <p className="card-text"> Choose A Number Above Or Below or Seven </p>
    <NavLink exact to="/sevenupdown" className="btn btn-start m-2">Let's Start</NavLink>
  </div>
</div>
 </div>

          <div className="col-md-4 col-10 mx-auto home-card">
            <div className="card vit-card">
  <div className="card-body">
  <h1><b className="title">Sum Of Dice</b></h1>
    <p className="card-text"> Guess Sum Of two Dice</p>
    <NavLink to="/sumofdice" className="btn btn-start m-2">Let's start</NavLink>
  </div>
</div>
     </div> 

     {/* <div className="col-md-4 col-10 mx-auto home-card">
            <div className="card vit-card">
  <div className="card-body">
  <h1><b className="title">Flames Calculator</b></h1>
    <p className="card-text"> Guess Sum Of two Dice</p>
    <NavLink to="/flames" className="btn btn-start m-2">Let's start</NavLink>
  </div>
</div>
     </div> */}



     <div className="col-md-4 col-10 mx-auto home-card">
            <div className="card vit-card">
  <div className="card-body">
  <h1><b className="title">Find Your Age</b></h1>
    <p className="card-text">get Your Age and days</p>
    <NavLink to="/findage" className="btn btn-start m-2">Let's start</NavLink>
  </div>
</div>
     </div> 

        </div>
        </div>
        </div>
        </div>
        









        </>
    );
}

export default Dice;