import { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import LeftDashboard from './Components/LeftDashboard';
import RightDashboard from './Components/RightDashboard';

function App() {

  const [query, setQuery] = useState("Hyderabad");
  
  return (
    <div className="App">
      {/* Header */}
      <Header></Header>

      <div className="body">
          {/* Left */}
          <LeftDashboard setQuery={setQuery}/>
          {/* Middle */}
          <Content query={query}/>
          {/* Right */}
          <RightDashboard />
      </div>
      
    </div>
  );
}

export default App;
