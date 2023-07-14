import {Route,Routes} from 'react-router-dom'
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="font-bodyFont">
    
    <Header/>
    <HeaderBottom/>
      <Routes>
                <Route path='/' element={<Home/>}/>
                
                
            </Routes>

    </div>
  );
}

export default App;
