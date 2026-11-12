function PanelFiltros({ filtros, setFiltros }) {
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <h3 style={{ marginTop: 0, color: '#1e293b' }}>Filtros Globales</h3>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px', color: '#64748b' }}>Mes:</label>
          <select 
            name="mes" 
            value={filtros.mes} 
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="todos">Todos los meses</option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '5px', color: '#64748b' }}>Categoría:</label>
          <select 
            name="categoria" 
            value={filtros.categoria} 
            onChange={handleChange}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
          >
            <option value="todas">Todas</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Redes">Redes</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PanelFiltros;