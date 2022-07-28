
import './App.css';
import addComp from '../components/add';
import subComp from '../components/Sub';
import resulfComp from '../components/resulf';

function App() {
  return (
    <div className="App">
      <subComp/>
      <resulfComp/>
      <addComp/>
    </div>
  );
}

export default App;
