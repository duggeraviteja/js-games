// import React, { useState } from "react";

// const Flames =() =>{


//     const [name1,setName1]=useState("");
//     const [name2,setName2]=useState("");
//     const [result,setResult]=useState("");

    
 

//     const handle1 =(event) =>{
//         const name1=event.target.value;
//         setName1(name1);
//     }

//     const handle2 =(event) =>{
//          const name2=event.target.value;
//          setName2(name2);
//     }

// const validate =()=>{



//     var flames = ['Friends','Love','Affair','Marriage','Enemy','Sister'];
//     if(name1!="" && name2!="")
//       {
//        var lengthInput = name1.length+name2.length; 
//         while(flames.length != 1)
//       {
//         flames = flames.splice(lengthInput%6,1);
//       }   
    
    
//     }


// setResult(flames);
// }






//     return(
//         <>

//         <div className="col-md-10 col-12 mx-auto">

// <div class="card flames-card  m-3">
//   <div class="card-body m-3 p-3">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

//     <div class="form-user">
//           <div class="form-user d-flex "> 
//         <div> 
//           <i class="fas fa-male fa-2x m-auto ml-3"></i>
//         </div>
//           <input  onChange={handle1} className="form-control ms-3 "  type="text" name="name"  placeholder="Enter Your Name" /> 
    
//           </div>
//     </div>
//     <div class="form-user">
//           <div class="form-user d-flex "> 
//         <div> 
//           <i class="fas fa-female fa-2x m-auto ml-3 mt-3"></i>
//         </div>
//         <input  onChange={handle2} className="form-control ms-3 mt-3"  type="text" name="name"  placeholder="Enter Your Name" /> 
    
//           </div>
//     </div>
//     <div className="m">
//     <button className="btn btn-primary m-*-auto mt-4 btn-start" type="submit"   onClick={validate} > Calculate 💙 </button> 
//     </div>


//     <h1>{result}</h1>

//   </div>
// </div>
// </div>


//         </>
//     );
// }

// export default Flames;