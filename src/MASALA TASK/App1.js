import { Homepage } from "./Navigation";
import { RegMasala } from "./homepageR"
import { Masalalist } from "./MasalaList"
import {BrowserRouter, Route, Routes} from 'react-router-dom'




function App1() {
  return (
    <>
      <BrowserRouter>
         <Homepage/>
         <Routes>
            <Route path="list" exact element={<MasalaList/>}></Route>
         </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App1;