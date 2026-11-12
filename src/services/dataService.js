// src/services/dataService.js
import apiClient from './apiClient';

// 1. Simular petición HTTP (Práctica 3.2)
export const obtenerDatosVisualizacion = async () => {
  try {
    const respuesta = await fetch('/datos.json');
    if (!respuesta.ok) throw new Error('Error al cargar los datos');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 2. Procesar los datos (Práctica 3.2)
export const procesarDatos = (datos) => {
  const etiquetas = datos.map(item => item.mes);
  const valoresVentas = datos.map(item => item.ventas);
  
  const totalVentas = valoresVentas.reduce((acc, curr) => acc + curr, 0);
  const totalUsuarios = datos.reduce((acc, curr) => acc + curr.usuarios, 0);

  return {
    etiquetas,
    valoresVentas,
    totalVentas,
    totalUsuarios,
    datosOriginales: datos
  };
};

// 3. Consumir API Externa (Práctica 3.3)
export const obtenerSerieDeTiempo = async (lat = 19.4326, lon = -99.1332) => {
  try {
    const respuesta = await apiClient.get('/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
        hourly: 'temperature_2m',
      },
    });
    // Retornamos la carga útil (payload) limpia
    return respuesta.data;
  } catch (error) {
    // Lanzamos el error para que el componente lo capture en su try/catch
    throw new Error('No se pudo conectar con la API de datos climáticos.');
  }
};

// 4. Filtrar Datos (Práctica 4 Unidad 3) - ¡Corregido!
export const filtrarDatos = (datos, filtros) => {
  return datos.filter(item => {
    const coincideMes = filtros.mes === 'todos' || item.mes === filtros.mes;
    const coincideCategoria = filtros.categoria === 'todas' || item.categoria === filtros.categoria;
    return coincideMes && coincideCategoria;
  });
};