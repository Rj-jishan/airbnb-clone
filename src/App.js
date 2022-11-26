
// import styling from styles folder 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  "./App.css";
//  import other stafs from module packages ✈ 
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
function App(){
  return (
  <>
  <BrowserRouter>
  <Header /> 
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/search" element={<SearchPage />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
  </>
  )
}

export default App;
