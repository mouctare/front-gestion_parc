import './App.css';
import Site from './containers/Site';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Site/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
