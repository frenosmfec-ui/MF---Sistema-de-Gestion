import Header from './components/Header';
import Nav from './components/Nav';
import IngresoServicio from './components/IngresoServicio';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main className="app-main">
        <h2>Registro de Servicio</h2>
        <IngresoServicio />
      </main>
    </>
  );
}

export default App;