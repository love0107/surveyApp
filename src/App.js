import './App.css';
// import HomePage from './components/Dashboard';
import Question from './components/Question';
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <HomePage/> */}
     <Question/>
    </div>
  );
}

export default App;
