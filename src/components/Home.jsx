import React from "react";
import d1 from "./images/1002.jpg";
import d2 from "./images/1001.jpg";
import d3 from "./images/15457.jpg";


import {NavLink } from "react-router-dom";




const Home =()=>{
    return(
        <>

    <div>
        {/* <div className="img-fluid bgimg">        
        </div> */}

        
        <div className="col-12 md-col-12"> 

       
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={d3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-caption d-none d-md-block">
        <h2 className="pl">Play Games </h2>
        <p>Explore Games and play games of Your Choice </p>
      </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src={d2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-caption d-none d-md-block">

    <h2 className="pl">Play Games </h2>
        <p>Explore Games and play games of Your Choice</p>
      </div>

    <div class="carousel-item">
      <img src={d1} class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-caption d-md-block">
    <h2 className="pl">Play Games </h2>
        <p>Explore Games and play games of Your Choice</p>
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

    <div className="bgimg2"> 
        <NavLink exact activeClassName="nav-active"className="btn btn-start" to="/dice"> <h3> ExploreGames </h3></NavLink>
        </div>

    </div>

        </>
    );
}

export default Home;