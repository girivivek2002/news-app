import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx';
import NewsBoard from './components/NewsBoard.jsx';

function App() {
  const [category, setCategory] = useState("general")

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>

  );
}

export default App;
