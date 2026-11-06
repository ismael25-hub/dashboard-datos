// dataService.js

// 1. Simular petición HTTP
export const obtenerDatosVisualizacion = async () => {
  try {
    // Hacemos un fetch al archivo JSON que está en la carpeta public
    const respuesta = await fetch('/datos.json');
    if (!respuesta.ok) throw new Error('Error al cargar los datos');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 2. Procesar los datos (filtrar o formatear)
export const procesarDatos = (datos) => {
  // Por ejemplo, extraemos las etiquetas (meses) y los valores (ventas)
  const etiquetas = datos.map(item => item.mes);
  const valoresVentas = datos.map(item => item.ventas);
  
  // Calculamos una métrica total
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