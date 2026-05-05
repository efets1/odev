import { useNavigate } from 'react-router-dom';

export default function PatientAppointments() {
  const navigate = useNavigate();

  const currTc = localStorage.getItem('userTc') || 'Bilinmiyor';
  const existingStr = localStorage.getItem('appointmentsList');
  const allAppointments = existingStr ? JSON.parse(existingStr) : [];

  // Sadece sistemi kullanan hastanın (userTc) randevularını filtrele
  const myAppointments = allAppointments.filter(app => app.tcNo === currTc);

  return (
    <div className="page-container top-aligned" style={{ paddingBottom: '20px' }}>
      <div className="btn-primary" style={{ height: '70px', width: '300px', cursor: 'default', fontSize: '22px' }}>
        Aldığınız randevular
      </div>
      <div className="list-placeholder" style={{ flexGrow: 1, maxHeight: '500px', padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {myAppointments.length > 0 ? (
          myAppointments.map((app, index) => (
            <div key={index} style={{ backgroundColor: '#ffffff', padding: '15px', color: '#000000', borderRadius: '4px', fontSize: '16px' }}>
              <span style={{ fontWeight: '600' }}>Hasta TC: </span> {app.tcNo} <br/>
              <span style={{ fontWeight: '600' }}>Randevu Tarihi: </span> {app.date}
            </div>
          ))
        ) : (
          <div style={{ color: '#000000' }}>Size ait alınmış bir randevu bulunmamaktadır.</div>
        )}
      </div>
      <button className="btn-primary btn-small" onClick={() => navigate('/')} style={{ marginTop: 'auto' }}>
        Geri Dön
      </button>
    </div>
  );
}
