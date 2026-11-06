import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import { obtenerDatosVisualizacion, procesarDatos } from './services/dataService';

function App() {
  // Estados
  const [datosProcesados, setDatosProcesados] = useState(null);
  const [cargando, setCargando] = useState(true);

  // useEffect para cargar los datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      const datosCrudos = await obtenerDatosVisualizacion();
      const datosListos = procesarDatos(datosCrudos);
      setDatosProcesados(datosListos);
      setCargando(false);
    };

    cargarDatos();
  }, []);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#1e293b' }}>Panel de Control</h1>
        
        {cargando ? (
          <p>Cargando datos del servicio...</p>
        ) : (
          <>
            {/* Sección de Tarjetas Métricas */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <TarjetaMetrica titulo="Ventas Totales" valor={`$${datosProcesados.totalVentas}`} color="#3b82f6" />
              <TarjetaMetrica titulo="Usuarios Activos" valor={datosProcesados.totalUsuarios} color="#10b981" />
              <TarjetaMetrica titulo="Meses Analizados" valor={datosProcesados.datosOriginales.length} color="#f59e0b" />
            </div>

            {/* Sección de Tabla */}
            <h2 style={{ color: '#1e293b', marginTop: '40px' }}>Detalle Mensual</h2>
            <TablaDatos datos={datosProcesados.datosOriginales} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;