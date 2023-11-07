import { Homepage } from "./Navigation";
import { UsestateTernary } from "./TernarywithUseState";
import { Registrationform } from "./RegisterForm";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Hook1 } from "./usingUseState";
import { Listingpage, listingpage } from "./Listingpage";


function App() {
  return (
    <>
      <BrowserRouter>
         <Homepage/>
         <Routes>
            <Route path="list1" exact element={<Listingpage/>}></Route>
         </Routes>

      </BrowserRouter>
      {/* <UsestateTernary/> */}
    </>
  );
}

export default App;
