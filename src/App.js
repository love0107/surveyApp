import './App.css';
// import HomePage from './components/Dashboard';
import Question from './components/Question';
import Navbar from "./components/Navbar";
// import Submit from './components/Submit';
function App() {
  return (
    <div className="App">
      <Navbar/>
     {/* <HomePage/> */}
     <Question/>
     {/* <Submit/> */}
    </div>
  );
}

export default App;
