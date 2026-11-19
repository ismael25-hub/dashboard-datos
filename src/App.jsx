import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TarjetaMetrica from './components/TarjetaMetrica';
import TablaDatos from './components/TablaDatos';
import PanelAnalitico from './components/PanelAnalitico';
import PanelFiltros from './components/PanelFiltros';
import DashboardLayout from './components/DashboardLayout';
import GraficoTendencia from './components/charts/GraficoTendencia';
import GraficoComparativo from './components/charts/GraficoComparativo';
import { obtenerDatosVisualizacion, procesarDatos, filtrarDatos, formatearParaGrafico } from './services/dataService';

function App() {
  const [datosCrudos, setDatosCrudos] = useState([]);
  const [datosProcesados, setDatosProcesados] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [filtros, setFiltros] = useState({ mes: 'todos', categoria: 'todas' });

  useEffect(() => {
    const cargarDatos = async () => {
      const datos = await obtenerDatosVisualizacion();
      setDatosCrudos(datos);
    };
    cargarDatos();
  }, []);

  useEffect(() => {
    if (datosCrudos.length > 0) {
      setCargando(true);
      const datosFiltrados = filtrarDatos(datosCrudos, filtros);
      const procesados = procesarDatos(datosFiltrados);
      setDatosProcesados(procesados);
      setCargando(false);
    }
  }, [filtros, datosCrudos]);

  const datosGrafico = datosProcesados ? formatearParaGrafico(datosProcesados.datosOriginales) : { labels: [], values: [] };

  return (
    // FONDO Y TIPOGRAFÍA MODERNA
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <Navbar />
      
      <DashboardLayout 
        sidebar={
          <PanelFiltros filtros={filtros} setFiltros={setFiltros} />
        }
        main={
          cargando ? (
            <p style={{ color: '#64748b' }}>Cargando dashboard...</p>
          ) : (
            <>
              {/* Tarjetas */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <TarjetaMetrica titulo="Ventas Totales" valor={`$${datosProcesados?.totalVentas || 0}`} color="#3b82f6" />
                <TarjetaMetrica titulo="Usuarios Activos" valor={datosProcesados?.totalUsuarios || 0} color="#10b981" />
                <TarjetaMetrica titulo="Meses Mostrados" valor={datosProcesados?.datosOriginales.length || 0} color="#f59e0b" />
              </div>

              {/* Gráficos */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
                <GraficoTendencia labels={datosGrafico.labels} values={datosGrafico.values} />
                <GraficoComparativo labels={datosGrafico.labels} values={datosGrafico.values} />
              </div>

              {/* Tabla */}
              <h2 style={{ color: '#0f172a', marginTop: '32px', fontSize: '22px' }}>Detalle Mensual</h2>
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