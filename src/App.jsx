import Header from './components/Header';
import Nav from './components/Nav';
import PageHeader from './components/PageHeader';
import IngresoServicio from './components/IngresoServicio';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main className="app-main">
        <PageHeader 
          title={<>Registro de <span className="highlight">Servicio</span></>}
          subtitle="Ingrese los datos del vehículo y cliente"
          icon="🔧"
        />
        <IngresoServicio />
      </main>
    </>
  );
}

export default App;