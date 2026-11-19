function TablaDatos({ datos }) {
  if (!datos || datos.length === 0) return <p>No hay datos disponibles.</p>;

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginTop: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#0f172a', color: 'white' }}>
          <tr>
            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Mes</th>
            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Ventas</th>
            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Usuarios</th>
            <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Conversión (%)</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
              <td style={{ padding: '16px', color: '#1e293b', fontWeight: '500' }}>{item.mes}</td>
              <td style={{ padding: '16px', color: '#1e293b' }}>${item.ventas}</td>
              <td style={{ padding: '16px', color: '#1e293b' }}>{item.usuarios}</td>
              <td style={{ padding: '16px', color: '#1e293b' }}>{item.conversion}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDatos;