import React from "react";
import Ludo from "./Ludo";
import SumOfDice from "./SumOfDice";
import Navbar from "./Navbar";
import Home from "./Home";
import Quiz from "./Quiz";
import {Switch,Route} from "react-router-dom";
import SevenUpDown from "./SevenUpDown";
import Dice from "./Dice";
import Contact from "./Contact";
import FindAge from "./FindAge";


function App() {
  return (
    <div>
    <div>

    <Navbar />
  

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ludo" component={Ludo} />
                <Route exact path="/sevenupdown" component={SevenUpDown} />
                <Route exact path="/sumofdice" component={SumOfDice} />
                <Route exact path="/dice" component={Dice} />
                <Route exact path="/sumofdice" component={SumOfDice} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/sevenupdown" component={SevenUpDown} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/findage" component={FindAge} />





                </Switch>
</div>
    </div>
  );
}

export default App;
