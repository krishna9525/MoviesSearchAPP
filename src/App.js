import './App.css';
import Home from "./page/Home/Home"
import {Routes,Route} from "react-router-dom"
import SingleMovies from "./components/SingleMovies/SingleMovies"
import Error from "./components/Error/Error"

function App() {
  return (
  
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='movies/:id' element={<SingleMovies/>}/>
      <Route  path='*' element={<Error/>}/>


   
    </Routes>
    
  );
}

export default App;
