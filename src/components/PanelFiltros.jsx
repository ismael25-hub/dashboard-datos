function PanelFiltros({ filtros, setFiltros }) {
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value
    });
  };

  const selectStyle = {
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#f8fafc',
    width: '100%',
    fontSize: '15px',
    color: '#1e293b',
    outline: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginTop: 0, color: '#0f172a', fontSize: '18px', marginBottom: '20px' }}>Filtros Globales</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>Mes:</label>
          <select name="mes" value={filtros.mes} onChange={handleChange} style={selectStyle}>
            <option value="todos">Todos los meses</option>
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#64748b' }}>Categoría:</label>
          <select name="categoria" value={filtros.categoria} onChange={handleChange} style={selectStyle}>
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