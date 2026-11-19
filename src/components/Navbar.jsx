function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0f172a', // Azul marino profundo moderno
      color: 'white',
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '600', letterSpacing: '0.5px' }}>
        Dashboard de Ciencia de Datos
      </h2>
      <p style={{ margin: 0, fontWeight: '500', fontSize: '15px', color: '#cbd5e1' }}>
        Ismael Hernandez
      </p>
    </nav>
  );
}

export default Navbar;