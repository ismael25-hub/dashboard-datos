function TarjetaMetrica({ titulo, valor, color }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '24px',
      borderRadius: '16px', // Bordes más redondeados
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Sombra suave y amplia
      borderLeft: `6px solid ${color || '#3b82f6'}`,
      flex: 1,
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3 style={{ margin: 0, color: '#64748b', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {titulo}
      </h3>
      <p style={{ margin: '12px 0 0 0', fontSize: '28px', fontWeight: '700', color: '#0f172a' }}>
        {valor}
      </p>
    </div>
  );
}

export default TarjetaMetrica;