import Header from './components/Header';
import Nav from './components/Nav';
import PageHeader from './components/PageHeader';
import IngresoServicio from './components/IngresoServicio';
import TablaServicios from './components/TablaServicios';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <ProtectedRoute>
      <Header />
      <Nav />
      
      <main className="app-main">
        <PageHeader 
          title={<>Registro de <span className="highlight">Servicio</span></>}
          subtitle="Complete los datos del vehículo y cliente"
          icon="🔧"
        />
        
        <IngresoServicio />
        
        {/* Aquí se mostrará la tabla y se actualizará en tiempo real */}
        <TablaServicios />
      </main>
    </ProtectedRoute>
  );
}

export default App;