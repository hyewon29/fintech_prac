import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from './components/Welcome';
import State from './components/State';
import List from './components/List';
import NewsSearch from "./pages/NewsSearch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome userName='홍길동'></Welcome>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/state" element={<State></State>}></Route>
          <Route path="/news" element={<NewsSearch />}></Route>
        </Routes> 
      </BrowserRouter>


    </div>
  );
}

export default App;
