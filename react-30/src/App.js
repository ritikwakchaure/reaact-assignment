import "./App.css";
import { Eight } from "./Eight";
import { Seven } from "./Seven";
import { Six } from "./Six";
import { Five } from "./Five";
import { Three } from './Three';
import { Two } from './Two';
import { Four } from './Four';
import { Nine } from "./Nine"
import { Ten } from "./Ten";
import { Eleven } from "./Eleven";
import Thirteen from "./Thirteen";
import { Fifteen } from "./Fifteen";
import { Sixteen } from "./Sixteen";
import { Eighteen } from "./Eighteen";
import { Ninety } from "./Ninety";
import { Twenty } from "./Twenty";





function App() {

  const items = ["a", "b", "cid", "dango","e" ]

  return (
    <div className="App">
      {/* <Two/>*/}
      {/* <Three/> */}
      {/* <Four/> */}
      {/* <Five/> */}
      {/* <Six/> */}
      {/* <Seven/> */}
      {/* <Eight/> */}
      {/* <Nine/> */}
      {/* <Ten /> */}
      {/* <Eleven/> */}
      {/* <Thirteen/> */}
       {/* <Fifteen items={items}/> */}
       {/* <Sixteen items = {items} itemsPerPage={2}/> */}
       {/* <Eighteen/> */}
       {/* <Ninety/> */}
       <Twenty/>
      

    </div>
  );
}

export default App;
