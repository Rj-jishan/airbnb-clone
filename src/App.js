
// import styling from styles folder 
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import  "./App.css";
import Home from "./pages/Home"; 
import Nav from "./components/Nav";
// import Nav from "./components/Nav";
 
function App(){
  return (
  <>
  <BrowserRouter>
  {/* <Nav />  */}
  <Nav />
  <Routes>
 
     <Route path={"/"} element={ <Home />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
