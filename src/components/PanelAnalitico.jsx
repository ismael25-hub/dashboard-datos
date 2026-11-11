import { useState } from 'react';
import { obtenerSerieDeTiempo } from '../services/dataService';
import TarjetaMetrica from './TarjetaMetrica';

function PanelAnalitico() {
  // Estados solicitados en la práctica
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const handleConsultarAPI = async () => {
    // 1. Antes de llamar, activamos carga y limpiamos errores
    setCargando(true);
    setError(null);
    setDatos(null);

    try {
      // 2. Intentamos obtener los datos
      const respuesta = await obtenerSerieDeTiempo();
      setDatos(respuesta);
    } catch (err) {
      // 3. Si falla, guardamos el error
      setError(err.message);
    } finally {
      // 4. Pase lo que pase, quitamos el estado de carga
      setCargando(false);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginTop: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2>Integración con API Externa (Clima)</h2>
      <p style={{ color: '#64748b' }}>Presiona el botón para consultar datos en tiempo real.</p>
      
      <button 
        onClick={handleConsultarAPI} 
        disabled={cargando}
        style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '5px', cursor: cargando ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
      >
        {cargando ? 'Analizando datos...' : 'Consultar API'}
      </button>

      {/* Renderizado condicional según los estados */}
      {cargando && (
        <div style={{ marginTop: '20px', color: '#3b82f6', fontWeight: 'bold' }}>
          ⏳ Analizando datos, por favor espera...
        </div>
      )}

      {error && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fee2e2', color: '#dc2626', borderRadius: '5px', border: '1px solid #f87171' }}>
          ❌ Error: {error}
        </div>
      )}

      {datos && !cargando && (
        <div style={{ marginTop: '20px' }}>
          <h3>Datos Obtenidos</h3>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <TarjetaMetrica titulo="Temperatura Actual" valor={`${datos.current_weather.temperature} °C`} color="#10b981" />
            <TarjetaMetrica titulo="Velocidad del Viento" valor={`${datos.current_weather.windspeed} km/h`} color="#f59e0b" />
            <TarjetaMetrica titulo="Zona Horaria" valor={datos.timezone} color="#8b5cf6" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PanelAnalitico;