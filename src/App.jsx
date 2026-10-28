import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Bienvenido al Dashboard</h1>
        <p style={{ color: '#64748b' }}>
          Proyecto base inicializado correctamente para la integración de modelos de ciencia de datos.
        </p>
      </main>
    </div>
  );
}

export default App;