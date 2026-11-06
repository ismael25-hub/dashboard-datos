function TablaDatos({ datos }) {
  if (!datos || datos.length === 0) return <p>No hay datos disponibles.</p>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <thead style={{ backgroundColor: '#1e293b', color: 'white' }}>
        <tr>
          <th style={{ padding: '12px', textAlign: 'left' }}>Mes</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Ventas</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Usuarios</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Conversión (%)</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item) => (
          <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
            <td style={{ padding: '12px' }}>{item.mes}</td>
            <td style={{ padding: '12px' }}>${item.ventas}</td>
            <td style={{ padding: '12px' }}>{item.usuarios}</td>
            <td style={{ padding: '12px' }}>{item.conversion}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaDatos;