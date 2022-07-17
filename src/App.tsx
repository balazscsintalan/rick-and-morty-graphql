import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Characters from './pages/characters/Characters';

function App() {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
