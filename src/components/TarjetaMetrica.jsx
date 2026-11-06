function TarjetaMetrica({ titulo, valor, color }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      borderLeft: `5px solid ${color || '#3b82f6'}`,
      flex: 1
    }}>
      <h3 style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>{titulo}</h3>
      <p style={{ margin: '10px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>
        {valor}
      </p>
    </div>
  );
}

export default TarjetaMetrica;