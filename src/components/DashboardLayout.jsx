function DashboardLayout({ sidebar, main }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row', // En PC se ven lado a lado
      flexWrap: 'wrap',     // En celular se apilan
      minHeight: '100vh',
      padding: '20px',
      gap: '20px',
      backgroundColor: '#f8fafc'
    }}>
      <aside style={{ flex: '1 1 250px', maxWidth: '300px' }}>
        {sidebar}
      </aside>

      <main style={{ flex: '3 1 600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {main}
      </main>
    </div>
  );
}
export default DashboardLayout;