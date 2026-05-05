import { useNavigate } from 'react-router-dom';

export default function DoctorDashboard() {
  const navigate = useNavigate();
  const existingStr = localStorage.getItem('appointmentsList');
  const allAppointments = existingStr ? JSON.parse(existingStr) : [];
  
  // Hastalarım sekmesi için aynı TC'yi birden fazla yazdırmamak için (Benzersiz TC'ler)
  const uniqueTcs = [...new Set(allAppointments.map(app => app.tcNo))];

  return (
    <div className="page-container top-aligned" style={{ gap: '20px' }}>
      <div className="btn-primary btn-large" style={{ cursor: 'default', height: '60px', fontSize: '22px' }}>
        Hastalarım
      </div>
      <div className="list-placeholder" style={{ minHeight: '150px', width: '300px', marginTop: '0', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto', maxHeight: '250px' }}>
        {uniqueTcs.length > 0 ? (
          uniqueTcs.map((tc, index) => (
            <div key={index} style={{ backgroundColor: '#ffffff', padding: '15px', color: '#000000', borderRadius: '4px', fontSize: '16px' }}>
              <span style={{ fontWeight: '600' }}>Hasta TC: </span> {tc}
            </div>
          ))
        ) : (
          <div style={{ color: '#000000' }}>Kayıtlı hasta yoktur.</div>
        )}
      </div>
      
      <div className="btn-primary btn-large" style={{ cursor: 'default', height: '60px', fontSize: '22px', marginTop: '20px' }}>
        Alınan randevular
      </div>
      <div className="list-placeholder" style={{ minHeight: '150px', width: '300px', marginTop: '0', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto', maxHeight: '250px' }}>
        {allAppointments.length > 0 ? (
          allAppointments.map((app, index) => (
            <div key={index} style={{ backgroundColor: '#ffffff', padding: '15px', color: '#000000', borderRadius: '4px', fontSize: '16px' }}>
              <span style={{ fontWeight: '600' }}>Hasta TC: </span> {app.tcNo} <br/>
              <span style={{ fontWeight: '600' }}>Randevu Tarihi: </span> {app.date}
            </div>
          ))
        ) : (
          <div style={{ color: '#000000' }}>Henüz alınan bir randevu yoktur.</div>
        )}
      </div>
      <button className="btn-primary btn-small" onClick={() => navigate('/')} style={{ marginTop: '20px' }}>
        Geri Dön
      </button>
    </div>
  );
}
