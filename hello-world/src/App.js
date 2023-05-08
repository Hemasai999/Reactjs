// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="bruce" heroname="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name ="banner" heroname="Hulk"/>
      <button>Action</button>
      <Greet name="tony" heroname="ironman"/>
      <Welcome name = "diana" heroname = "wonderwomen"/>
      <button>This is button</button>
      
      <Welcome name = "thor" heroname= "god of thunder">
        <p>I am god of thunder</p>
      </Welcome>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
