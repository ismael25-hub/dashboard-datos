import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import PanelAnalitico from './components/PanelAnalitico';
import PanelFiltros from './components/PanelFiltros';
import DashboardLayout from './components/DashboardLayout';
import { obtenerDatosVisualizacion, procesarDatos, filtrarDatos } from './services/dataService';

function App() {
  const [datosCrudos, setDatosCrudos] = useState([]);
  const [datosProcesados, setDatosProcesados] = useState(null);
  const [cargando, setCargando] = useState(true);

  // ESTADO GLOBAL DE FILTROS (Parte II del PDF)
  const [filtros, setFiltros] = useState({ 
    mes: 'todos', 
    categoria: 'todas' 
  });

  // Carga inicial de los datos
  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerDatosVisualizacion();
      setDatosCrudos(datos);
    };
    cargarDatos();
  }, []);

  // EFECTO QUE ESCUCHA LOS FILTROS (Parte III del PDF)
  useEffect(() => {
    if (datosCrudos.length > 0) {
      setCargando(true);
      // 1. Filtramos los datos según el estado global
      const datosFiltrados = filtrarDatos(datosCrudos, filtros);
      // 2. Procesamos los datos filtrados
      const procesados = procesarDatos(datosFiltrados);
      setDatosProcesados(procesados);
      setCargando(false);
    }
  }, [filtros, datosCrudos]); // Se ejecuta cada vez que cambian los filtros

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      
      {/* ESTRUCTURA DEL DASHBOARD (Parte I del PDF) */}
      <DashboardLayout 
        sidebar={
          <PanelFiltros filtros={filtros} setFiltros={setFiltros} />
        }
        main={
          cargando ? (
            <p>Cargando dashboard...</p>
          ) : (
            <>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <TarjetaMetrica titulo="Ventas Totales" valor={`$${datosProcesados?.totalVentas || 0}`} color="#3b82f6" />
                <TarjetaMetrica titulo="Usuarios Activos" valor={datosProcesados?.totalUsuarios || 0} color="#10b981" />
                <TarjetaMetrica titulo="Meses Mostrados" valor={datosProcesados?.datosOriginales.length || 0} color="#f59e0b" />
              </div>

              <h2 style={{ color: '#1e293b', marginTop: '20px' }}>Detalle Mensual</h2>
              <TablaDatos datos={datosProcesados?.datosOriginales || []} />
              
              <PanelAnalitico />
            </>
          )
        }
      />
    </div>
  );
}

export default App;